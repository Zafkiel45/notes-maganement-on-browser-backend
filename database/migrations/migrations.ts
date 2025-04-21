import { database } from "../config/config";

database.run(`PRAGMA foreign_keys = ON;`);

database.run(`
    CREATE TABLE IF NOT EXISTS folders (
        folder_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    )
`);

database.run(`
    CREATE TABLE IF NOT EXISTS docs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        content BLOB NOT NULL,
        folder INTEGER NOT NULL UNIQUE,
        FOREIGN KEY (folder) REFERENCES folders(folder_id) ON DELETE CASCADE
    )    
`);
