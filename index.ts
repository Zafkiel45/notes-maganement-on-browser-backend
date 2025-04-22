import express from "express";
import './database/migrations/migrations';
import { notes } from './routes/notes.route';
import { folder } from './routes/folders.route';

const route = express();

route.use(express.json())

route.use('/note', notes);
route.use('/folders', folder);

route.listen(3001, () => {
  console.log("tudo funcionando!");
});
