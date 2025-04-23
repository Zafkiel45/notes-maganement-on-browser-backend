import { Database } from "bun:sqlite";
import { argv } from "node:process";
import "dotenv/config";

const params = argv.slice(2);
const dbPath = params.includes("dev")
  ? process.env.DB_PATH_DEVELOPMENT
  : process.env.DB_PATH;

console.log(params);

export const database = new Database(dbPath, {
  strict: true,
});
