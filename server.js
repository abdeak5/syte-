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

// Serve static client assets
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint for deployment platforms
app.get('/health', async (req, res) => {
  const dbHealth = await db.healthCheck();
  res.json({
    status: 'ok',
    uptime: Math.floor(process.uptime()),
    database: dbHealth
  });
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
  console.log(`🔌 New client connected: ${socket.id}`);

  // User Joins Meeting Room
  socket.on('join-room', async ({ name }) => {
    try {
      // 1. Check if we need to start a new meeting session (if active user count is 0)
      const activeUsersCountRes = await db.query('SELECT COUNT(*) FROM users');
      const activeCount = parseInt(activeUsersCountRes.rows[0].count);

      if (activeCount === 0 || !currentSessionId) {
        const sessRes = await db.query('INSERT INTO sessions (created_at) VALUES (DEFAULT) RETURNING id');
        currentSessionId = sessRes.rows[0].id;
        console.log(`🎬 Started new meeting session: ID ${currentSessionId}`);
      }

      // 2. Insert user into the database
      await db.query(
        `INSERT INTO users (id, name, is_muted, is_video_off)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (id) DO UPDATE SET name = $2, is_muted = $3, is_video_off = $4, joined_at = CURRENT_TIMESTAMP`,
        [socket.id, name, false, false]
      );

      console.log(`👤 User joined: ${name} (${socket.id}) inside session ${currentSessionId}`);

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
        selfId: socket.id,
        users: activeUsers,
        chatHistory: chatHistory
      });

      // Broadcast to others
      socket.broadcast.emit('user-joined', {
        id: socket.id,
        name: name,
        is_muted: false,
        is_video_off: false
      });
    } catch (err) {
      console.error('❌ Error handling join-room:', err.message);
      socket.emit('error', { message: 'Failed to join the meeting room.' });
    }
  });

  // Signaling: WebRTC Offer
  socket.on('webrtc-offer', ({ to, offer }) => {
    io.to(to).emit('webrtc-offer', { from: socket.id, offer });
  });

  // Signaling: WebRTC Answer
  socket.on('webrtc-answer', ({ to, answer }) => {
    io.to(to).emit('webrtc-answer', { from: socket.id, answer });
  });

  // Signaling: ICE Candidates
  socket.on('webrtc-ice-candidate', ({ to, candidate }) => {
    io.to(to).emit('webrtc-ice-candidate', { from: socket.id, candidate });
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
      await db.query('UPDATE users SET is_hand_raised = $1 WHERE id = $2', [isHandRaised, socket.id]);
      io.emit('hand-raise-updated', { userId: socket.id, isHandRaised });
    } catch (err) {
      console.error('❌ Error handling toggle-hand-raise:', err.message);
    }
  });

  // Mute Toggle
  socket.on('toggle-mute', async ({ isMuted }) => {
    try {
      await db.query('UPDATE users SET is_muted = $1 WHERE id = $2', [isMuted, socket.id]);
      io.emit('mute-updated', { userId: socket.id, isMuted });
    } catch (err) {
      console.error('❌ Error handling toggle-mute:', err.message);
    }
  });

  // Video Toggle
  socket.on('toggle-video', async ({ isVideoOff }) => {
    try {
      await db.query('UPDATE users SET is_video_off = $1 WHERE id = $2', [isVideoOff, socket.id]);
      io.emit('video-updated', { userId: socket.id, isVideoOff });
    } catch (err) {
      console.error('❌ Error handling toggle-video:', err.message);
    }
  });

  // User Explicitly Leaves Meeting
  socket.on('leave-room', async () => {
    await handleUserDisconnection(socket);
  });

  // Connection Disconnected (Browser Close / Network Drop)
  socket.on('disconnect', async () => {
    console.log(`🔌 Client disconnected: ${socket.id}`);
    await handleUserDisconnection(socket);
  });
});

// Handle client removal and update active user list
async function handleUserDisconnection(socket) {
  try {
    const userRes = await db.query('DELETE FROM users WHERE id = $1 RETURNING name', [socket.id]);
    if (userRes.rows.length > 0) {
      const userName = userRes.rows[0].name;
      console.log(`👤 User left: ${userName} (${socket.id})`);
      io.emit('user-left', { id: socket.id, name: userName });
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
    console.error('❌ Error handling user disconnection:', err.message);
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
