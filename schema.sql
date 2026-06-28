-- Table to store active meeting participants
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_hand_raised BOOLEAN DEFAULT FALSE,
    is_muted BOOLEAN DEFAULT FALSE,
    is_video_off BOOLEAN DEFAULT FALSE
);

-- Table to store chat messages
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
