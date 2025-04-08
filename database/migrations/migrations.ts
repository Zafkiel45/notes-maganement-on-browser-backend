import { database } from "../config/config";

database.run(`
    CREATE TABLE IF NOT EXISTS docs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        content BLOB NOT NULL,
        type TEXT NOT NULL
    )    
`);