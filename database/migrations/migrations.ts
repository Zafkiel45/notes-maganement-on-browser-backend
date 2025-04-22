import { database } from "../config/config";

database.run(`PRAGMA foreign_keys = ON;`);

database.run(`
    CREATE TABLE IF NOT EXISTS folders (
        folder_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    )
`);

database.run(`
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        content TEXT NOT NULL,
        folder INTEGER NOT NULL,
        FOREIGN KEY (folder) REFERENCES folders(folder_id) ON DELETE CASCADE
    )    
`);
