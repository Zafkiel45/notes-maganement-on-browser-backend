import { Database } from "bun:sqlite";
import { argv } from "node:process";
import "dotenv/config";

const params = argv.slice(2);
let path: string = '';

if(params[0] === 'production') {path = process.env.DB_PATH as string}
else if(params[0] === 'dev') {path = process.env.DB_PATH_DEVELOPMENT as string} 
else {path = ':memory:'};

export const database = new Database(path, {
  strict: true,
});