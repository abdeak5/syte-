const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const isMock = !process.env.DATABASE_URL;
let pool = null;

// Mock database storage for seamless fallback (in case DATABASE_URL is not set)
const mockDb = {
  users: {},
  messages: [],
  sessions: [],
  sharedFiles: []
};

if (!isMock) {
  console.log('📦 Connecting to Neon PostgreSQL database...');
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000
  });

  pool.on('error', (err) => {
    console.error('❌ Unexpected Neon pool error:', err.message);
  });
} else {
  console.warn('⚠️  DATABASE_URL not set. Running in MOCK (in-memory) mode.');
}

/**
 * Execute SQL queries against Postgres or fallback mock database.
 */
async function query(text, params) {
  if (!isMock) {
    try {
      return await pool.query(text, params);
    } catch (err) {
      console.error('❌ DB Query Error:', err.message, '| Query:', text.substring(0, 80));
      throw err;
    }
  }

  const queryStr = text.trim().replace(/\s+/g, ' ').toLowerCase();

  // 1. Session Insert
  if (queryStr.includes('insert into sessions')) {
    const sess = {
      id: mockDb.sessions.length + 1,
      created_at: new Date(),
      ended_at: null
    };
    mockDb.sessions.push(sess);
    return { rows: [sess] };
  }

  // 2. Session Update (End sessions)
  if (queryStr.includes('update sessions set ended_at')) {
    if (queryStr.includes('where id =')) {
      const [ended_at, id] = params;
      const sess = mockDb.sessions.find(s => s.id === id);
      if (sess) {
        sess.ended_at = ended_at || new Date();
      }
      return { rows: sess ? [sess] : [] };
    } else {
      // Cleanup all uncompleted sessions on startup
      mockDb.sessions.forEach(s => {
        if (s.ended_at === null) {
          s.ended_at = new Date();
        }
      });
      return { rows: [] };
    }
  }

  // 3. User Insert (UPSERT)
  if (queryStr.includes('insert into users')) {
    const [id, name, is_muted, is_video_off] = params;
    mockDb.users[id] = {
      id,
      name,
      joined_at: new Date(),
      is_hand_raised: false,
      is_muted: !!is_muted,
      is_video_off: !!is_video_off
    };
    return { rows: [mockDb.users[id]] };
  }

  // 4. Select Users
  if (queryStr.includes('select id from users where id =')) {
    const [id] = params;
    return { rows: mockDb.users[id] ? [{ id }] : [] };
  }
  if (queryStr.includes('select * from users')) {
    return { rows: Object.values(mockDb.users) };
  }

  // 5. Delete Users
  if (queryStr.includes('delete from users where id =')) {
    const [id] = params;
    const deleted = mockDb.users[id];
    delete mockDb.users[id];
    return { rows: deleted ? [deleted] : [] };
  }

  if (queryStr.includes('delete from users') && !queryStr.includes('where')) {
    mockDb.users = {};
    return { rows: [] };
  }

  // 6. Update User status
  if (queryStr.includes('update users set is_hand_raised')) {
    const [is_hand_raised, id] = params;
    if (mockDb.users[id]) {
      mockDb.users[id].is_hand_raised = !!is_hand_raised;
    }
    return { rows: mockDb.users[id] ? [mockDb.users[id]] : [] };
  }

  if (queryStr.includes('update users set is_muted')) {
    const [is_muted, id] = params;
    if (mockDb.users[id]) {
      mockDb.users[id].is_muted = !!is_muted;
    }
    return { rows: mockDb.users[id] ? [mockDb.users[id]] : [] };
  }

  if (queryStr.includes('update users set is_video_off')) {
    const [is_video_off, id] = params;
    if (mockDb.users[id]) {
      mockDb.users[id].is_video_off = !!is_video_off;
    }
    return { rows: mockDb.users[id] ? [mockDb.users[id]] : [] };
  }

  // 7. Message Insert
  if (queryStr.includes('insert into messages')) {
    const [session_id, user_name, message] = params;
    const msg = {
      id: mockDb.messages.length + 1,
      session_id,
      user_name,
      message,
      sent_at: new Date()
    };
    mockDb.messages.push(msg);
    return { rows: [msg] };
  }

  // 8. Select Messages
  if (queryStr.includes('select * from messages')) {
    if (queryStr.includes('where session_id =')) {
      const [session_id] = params;
      const filtered = mockDb.messages.filter(m => m.session_id === session_id);
      return { rows: filtered.sort((a, b) => a.sent_at - b.sent_at) };
    } else {
      const sorted = [...mockDb.messages].sort((a, b) => a.sent_at - b.sent_at);
      return { rows: sorted.slice(-100) };
    }
  }

  // 9. Shared Files Insert
  if (queryStr.includes('insert into shared_files')) {
    const [session_id, sender_name, file_name, file_size] = params;
    const file = {
      id: mockDb.sharedFiles.length + 1,
      session_id,
      sender_name,
      file_name,
      file_size,
      shared_at: new Date()
    };
    mockDb.sharedFiles.push(file);
    return { rows: [file] };
  }

  // 10. Select Shared Files
  if (queryStr.includes('select * from shared_files')) {
    const [session_id] = params;
    const filtered = mockDb.sharedFiles.filter(f => f.session_id === session_id);
    return { rows: filtered.sort((a, b) => a.shared_at - b.shared_at) };
  }

  // 11. Archive List Query
  if (queryStr.includes('select s.id') && queryStr.includes('count(*)')) {
    const archive = mockDb.sessions.map(s => {
      const msgCount = mockDb.messages.filter(m => m.session_id === s.id).length;
      const fileCount = mockDb.sharedFiles.filter(f => f.session_id === s.id).length;
      return {
        id: s.id,
        created_at: s.created_at,
        ended_at: s.ended_at,
        msg_count: msgCount,
        file_count: fileCount
      };
    });
    // Sort descending by created_at
    return { rows: archive.sort((a, b) => b.created_at - a.created_at) };
  }

  return { rows: [] };
}

/**
 * Initialize database schema.
 */
async function initDb() {
  if (isMock) return;
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    await pool.query(schemaSql);
    console.log('✅ Neon PostgreSQL tables initialized successfully.');
  } catch (error) {
    console.error('❌ Failed to initialize database tables:', error.message);
  }
}

/**
 * Health check: verify the database connection is alive.
 */
async function healthCheck() {
  if (isMock) return { status: 'ok', mode: 'mock' };
  try {
    const res = await pool.query('SELECT NOW()');
    return { status: 'ok', mode: 'neon', serverTime: res.rows[0].now };
  } catch (err) {
    return { status: 'error', mode: 'neon', error: err.message };
  }
}

module.exports = {
  query,
  initDb,
  healthCheck,
  isMock
};
