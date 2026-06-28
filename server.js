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

// Socket.io Real-Time Orchestration
io.on('connection', (socket) => {
  console.log(`🔌 New client connected: ${socket.id}`);

  // User Joins Meeting Room
  socket.on('join-room', async ({ name }) => {
    try {
      // Use UPSERT to avoid duplicate key errors on reconnect
      await db.query(
        `INSERT INTO users (id, name, is_muted, is_video_off)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (id) DO UPDATE SET name = $2, is_muted = $3, is_video_off = $4, joined_at = CURRENT_TIMESTAMP`,
        [socket.id, name, false, false]
      );

      console.log(`👤 User joined: ${name} (${socket.id})`);

      // Fetch current active participants
      const usersRes = await db.query('SELECT * FROM users ORDER BY joined_at ASC');
      const activeUsers = usersRes.rows;

      // Fetch recent chat history
      const messagesRes = await db.query('SELECT * FROM messages ORDER BY sent_at ASC LIMIT 100');
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
      const msgRes = await db.query(
        'INSERT INTO messages (user_name, message) VALUES ($1, $2) RETURNING *',
        [userName, message]
      );
      io.emit('new-chat-message', msgRes.rows[0]);
    } catch (err) {
      console.error('❌ Error handling send-chat-message:', err.message);
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
  } catch (err) {
    console.error('❌ Error handling user disconnection:', err.message);
  }
}

// Start Server after database schema check
db.initDb().then(() => {
  cleanupStaleUsers().then(() => {
    server.listen(PORT, () => {
      console.log(`🚀 Meeting platform is running on: http://localhost:${PORT}`);
      console.log(`📊 Database mode: ${db.isMock ? 'MOCK (in-memory)' : 'Neon PostgreSQL'}`);
    });
  });
});
