import Database from "better-sqlite3";

// Open or create the database
const db = new Database("./contacts.db");

// Create table if it doesn't exist
db.prepare(
    `CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
).run();

export default db;
