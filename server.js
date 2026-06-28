const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const db = require('./db');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
  pingTimeout: 60000,
  pingInterval: 25000
});

const PORT = process.env.PORT || 3000;

// Global tracking of current active session ID
let currentSessionId = null;

// Mapping of UID -> Socket ID
const uidToSocketId = {};
// Disconnection timeouts for grace period: UID -> setTimeout ID
const disconnectTimeouts = {};

// Serve static client assets
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/health', async (req, res) => {
  const dbHealth = await db.healthCheck();
  res.json({
    status: 'ok',
    uptime: Math.floor(process.uptime()),
    database: dbHealth
  });
});

// ========================================================================
// TURN Server Credentials (Metered.ca)
// ========================================================================
const METERED_DOMAIN = process.env.METERED_DOMAIN || 'system4.metered.live';
const METERED_API_KEY = process.env.METERED_API_KEY || 'v1U5BRFnXuIYAQZhc1wRyfue0u6pt851lX-RCpJ3oqvf9tt1';

let cachedTurnCredentials = null;
let turnCacheExpiry = 0;
const TURN_CACHE_TTL = 5 * 60 * 1000; // Cache for 5 minutes

app.get('/api/turn-credentials', async (req, res) => {
  try {
    const now = Date.now();
    if (cachedTurnCredentials && now < turnCacheExpiry) {
      return res.json(cachedTurnCredentials);
    }

    const response = await fetch(
      `https://${METERED_DOMAIN}/api/v1/turn/credentials?apiKey=${METERED_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Metered API returned ${response.status}`);
    }

    cachedTurnCredentials = await response.json();
    turnCacheExpiry = now + TURN_CACHE_TTL;

    console.log('🔑 Fetched fresh TURN credentials from Metered.ca');
    res.json(cachedTurnCredentials);
  } catch (err) {
    console.error('❌ Failed to fetch TURN credentials:', err.message);
    // Fallback to basic STUN-only if Metered API is unreachable
    res.json([
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ]);
  }
});

// Clean up any stale active users on server startup
async function cleanupStaleUsers() {
  try {
    await db.query('DELETE FROM users');
    console.log('🧹 Cleaned up stale users from the database.');
  } catch (err) {
    console.error('❌ Error cleaning up stale users:', err.message);
  }
}

// Clean up/close any orphaned open sessions on startup
async function cleanupSessions() {
  try {
    await db.query('UPDATE sessions SET ended_at = CURRENT_TIMESTAMP WHERE ended_at IS NULL');
    console.log('🧹 Closed any orphaned open sessions from previous runs.');
  } catch (err) {
    console.error('❌ Error cleaning up sessions:', err.message);
  }
}

// Socket.io Real-Time Orchestration
io.on('connection', (socket) => {
  console.log(`🔌 Socket connected: ${socket.id}`);

  // User Joins Meeting Room
  socket.on('join-room', async ({ name, uid }) => {
    try {
      socket.uid = uid;
      uidToSocketId[uid] = socket.id;

      // Clear any pending grace period disconnection for this user
      if (disconnectTimeouts[uid]) {
        clearTimeout(disconnectTimeouts[uid]);
        delete disconnectTimeouts[uid];
        console.log(`🔄 User ${name} (${uid}) reconnected within grace period.`);
      }

      // Check if user already exists in DB (reconnect vs fresh join)
      const existingUser = await db.query('SELECT id FROM users WHERE id = $1', [uid]);
      const isReconnect = existingUser.rows.length > 0;

      // 1. Check if we need to start a new meeting session (if active user count is 0)
      if (!isReconnect) {
        const activeUsersCountRes = await db.query('SELECT COUNT(*) FROM users');
        const activeCount = parseInt(activeUsersCountRes.rows[0].count);

        if (activeCount === 0 || !currentSessionId) {
          const sessRes = await db.query('INSERT INTO sessions (created_at) VALUES (DEFAULT) RETURNING id');
          currentSessionId = sessRes.rows[0].id;
          console.log(`🎬 Started new meeting session: ID ${currentSessionId}`);
        }
      }

      // 2. Insert/update user in database (keyed by persistent UID)
      await db.query(
        `INSERT INTO users (id, name, is_muted, is_video_off)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (id) DO UPDATE SET name = $2, joined_at = CURRENT_TIMESTAMP`,
        [uid, name, false, false]
      );

      if (isReconnect) {
        console.log(`🔄 User reconnected: ${name} (${uid}) — socket mapping updated only`);
      } else {
        console.log(`👤 User joined: ${name} (${uid}) inside session ${currentSessionId}`);
      }

      // 3. Fetch current active participants
      const usersRes = await db.query('SELECT * FROM users ORDER BY joined_at ASC');
      const activeUsers = usersRes.rows;

      // 4. Fetch current meeting session chat history (no past call history leakage)
      const messagesRes = await db.query(
        'SELECT * FROM messages WHERE session_id = $1 ORDER BY sent_at ASC LIMIT 100',
        [currentSessionId]
      );
      const chatHistory = messagesRes.rows;

      // Send room state to joining user
      socket.emit('room-joined', {
        selfId: uid,
        users: activeUsers,
        chatHistory: chatHistory
      });

      // Only broadcast to others on fresh join (not reconnect)
      if (!isReconnect) {
        socket.broadcast.emit('user-joined', {
          id: uid,
          name: name,
          is_muted: false,
          is_video_off: false
        });
      }
    } catch (err) {
      console.error('❌ Error handling join-room:', err.message);
      socket.emit('error', { message: 'Failed to join the meeting room.' });
    }
  });

  // Signaling: WebRTC Offer (Routed via UID)
  socket.on('webrtc-offer', ({ to, offer }) => {
    const targetSocketId = uidToSocketId[to];
    if (targetSocketId) {
      io.to(targetSocketId).emit('webrtc-offer', { from: socket.uid, offer });
    }
  });

  // Signaling: WebRTC Answer (Routed via UID)
  socket.on('webrtc-answer', ({ to, answer }) => {
    const targetSocketId = uidToSocketId[to];
    if (targetSocketId) {
      io.to(targetSocketId).emit('webrtc-answer', { from: socket.uid, answer });
    }
  });

  // Signaling: ICE Candidates (Routed via UID)
  socket.on('webrtc-ice-candidate', ({ to, candidate }) => {
    const targetSocketId = uidToSocketId[to];
    if (targetSocketId) {
      io.to(targetSocketId).emit('webrtc-ice-candidate', { from: socket.uid, candidate });
    }
  });

  // Chat Messaging
  socket.on('send-chat-message', async ({ message, userName }) => {
    try {
      if (currentSessionId) {
        const msgRes = await db.query(
          'INSERT INTO messages (session_id, user_name, message) VALUES ($1, $2, $3) RETURNING *',
          [currentSessionId, userName, message]
        );
        io.emit('new-chat-message', msgRes.rows[0]);
      }
    } catch (err) {
      console.error('❌ Error handling send-chat-message:', err.message);
    }
  });

  // Log P2P File transfers in database for archive tracking
  socket.on('log-file-share', async ({ fileName, fileSize, senderName }) => {
    try {
      if (currentSessionId) {
        await db.query(
          'INSERT INTO shared_files (session_id, sender_name, file_name, file_size) VALUES ($1, $2, $3, $4)',
          [currentSessionId, senderName, fileName, fileSize]
        );
        console.log(`📎 Logged file sharing: ${fileName} (${fileSize} bytes) by ${senderName}`);
      }
    } catch (err) {
      console.error('❌ Error logging file share:', err.message);
    }
  });

  // Fetch archives list
  socket.on('get-archive-list', async () => {
    try {
      const res = await db.query(`
        SELECT s.id, s.created_at, s.ended_at,
               (SELECT COUNT(*) FROM messages m WHERE m.session_id = s.id) as msg_count,
               (SELECT COUNT(*) FROM shared_files f WHERE f.session_id = s.id) as file_count
        FROM sessions s
        ORDER BY s.created_at DESC
      `);
      socket.emit('archive-list-response', res.rows);
    } catch (err) {
      console.error('❌ Error fetching archive list:', err.message);
    }
  });

  // Fetch specific session details (messages & files)
  socket.on('get-session-details', async ({ sessionId }) => {
    try {
      const msgsRes = await db.query('SELECT * FROM messages WHERE session_id = $1 ORDER BY sent_at ASC', [sessionId]);
      const filesRes = await db.query('SELECT * FROM shared_files WHERE session_id = $1 ORDER BY shared_at ASC', [sessionId]);
      socket.emit('session-details-response', {
        sessionId,
        messages: msgsRes.rows,
        files: filesRes.rows
      });
    } catch (err) {
      console.error('❌ Error fetching session details:', err.message);
    }
  });

  // Hand Raise Toggle
  socket.on('toggle-hand-raise', async ({ isHandRaised }) => {
    try {
      if (socket.uid) {
        await db.query('UPDATE users SET is_hand_raised = $1 WHERE id = $2', [isHandRaised, socket.uid]);
        io.emit('hand-raise-updated', { userId: socket.uid, isHandRaised });
      }
    } catch (err) {
      console.error('❌ Error handling toggle-hand-raise:', err.message);
    }
  });

  // Mute Toggle
  socket.on('toggle-mute', async ({ isMuted }) => {
    try {
      if (socket.uid) {
        await db.query('UPDATE users SET is_muted = $1 WHERE id = $2', [isMuted, socket.uid]);
        io.emit('mute-updated', { userId: socket.uid, isMuted });
      }
    } catch (err) {
      console.error('❌ Error handling toggle-mute:', err.message);
    }
  });

  // Video Toggle
  socket.on('toggle-video', async ({ isVideoOff }) => {
    try {
      if (socket.uid) {
        await db.query('UPDATE users SET is_video_off = $1 WHERE id = $2', [isVideoOff, socket.uid]);
        io.emit('video-updated', { userId: socket.uid, isVideoOff });
      }
    } catch (err) {
      console.error('❌ Error handling toggle-video:', err.message);
    }
  });

  // User Explicitly Leaves Meeting (Immediate Disconnect - No Grace Period)
  socket.on('leave-room', async () => {
    const uid = socket.uid;
    if (uid) {
      if (disconnectTimeouts[uid]) {
        clearTimeout(disconnectTimeouts[uid]);
        delete disconnectTimeouts[uid];
      }
      await handleRealUserDisconnection(uid);
    }
  });

  // Connection Disconnected (Grace Period Handling for momentary drops)
  socket.on('disconnect', () => {
    const uid = socket.uid;
    if (!uid) return;

    console.log(`🔌 Socket disconnected for UID: ${uid}. Starting grace period.`);
    
    // Clear lookup mapping
    if (uidToSocketId[uid] === socket.id) {
      delete uidToSocketId[uid];
    }

    // Set 7-second grace period timeout before deleting user
    disconnectTimeouts[uid] = setTimeout(async () => {
      delete disconnectTimeouts[uid];
      await handleRealUserDisconnection(uid);
    }, 7000);
  });
});

// Handle real/permanent user removal
async function handleRealUserDisconnection(uid) {
  try {
    const userRes = await db.query('DELETE FROM users WHERE id = $1 RETURNING name', [uid]);
    if (userRes.rows.length > 0) {
      const userName = userRes.rows[0].name;
      console.log(`👤 User left permanently: ${userName} (${uid})`);
      io.emit('user-left', { id: uid, name: userName });
    }

    // Check if the room became empty to close the current meeting session
    const activeUsersCountRes = await db.query('SELECT COUNT(*) FROM users');
    const activeCount = parseInt(activeUsersCountRes.rows[0].count);

    if (activeCount === 0 && currentSessionId) {
      console.log(`🏁 Meeting session ended: ID ${currentSessionId}`);
      await db.query('UPDATE sessions SET ended_at = CURRENT_TIMESTAMP WHERE id = $1', [currentSessionId]);
      currentSessionId = null;
    }
  } catch (err) {
    console.error('❌ Error handling real user disconnection:', err.message);
  }
}

// Start Server after database schema check
db.initDb().then(() => {
  cleanupStaleUsers().then(() => {
    cleanupSessions().then(() => {
      server.listen(PORT, () => {
        console.log(`🚀 Meeting platform is running on: http://localhost:${PORT}`);
        console.log(`📊 Database mode: ${db.isMock ? 'MOCK (in-memory)' : 'Neon PostgreSQL'}`);
      });
    });
  });
});
