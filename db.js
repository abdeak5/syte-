const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const isMock = !process.env.DATABASE_URL;
let pool = null;

// Mock database storage for seamless fallback (in case DATABASE_URL is not set)
const mockDb = {
  users: {},
  messages: []
};

if (!isMock) {
  console.log('📦 Connecting to Neon PostgreSQL database...');
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 10,                // Maximum connections in pool
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000
  });

  // Log connection errors without crashing
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

  if (queryStr.includes('select * from users')) {
    return { rows: Object.values(mockDb.users) };
  }

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

  if (queryStr.includes('insert into messages')) {
    const [user_name, message] = params;
    const msg = {
      id: mockDb.messages.length + 1,
      user_name,
      message,
      sent_at: new Date()
    };
    mockDb.messages.push(msg);
    return { rows: [msg] };
  }

  if (queryStr.includes('select * from messages')) {
    const sorted = [...mockDb.messages].sort((a, b) => a.sent_at - b.sent_at);
    return { rows: sorted.slice(-100) };
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
