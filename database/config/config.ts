import { Database } from "bun:sqlite";
import 'dotenv/config';

export const database = new Database(process.env.DB_PATH, {
    strict: true,
});