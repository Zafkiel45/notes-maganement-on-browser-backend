import express from "express";
import './database/migrations/migrations';
import { docsRoute, foldersRoute, typesRoute } from "./routes/docs.router";
import { addNotesRoute } from './routes/addNotes.route';
import { folderAdd } from './routes/folders.route';

const route = express();

route.use(express.json())

route.use("/docs", docsRoute);
route.use("/folders", foldersRoute);
route.use("/types", typesRoute);
route.use('/createnote', addNotesRoute);
route.use('/createfolder', folderAdd);

route.listen(3001, () => {
  console.log("tudo funcionando!");
});
