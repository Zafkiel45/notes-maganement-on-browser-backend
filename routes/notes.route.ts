import express from "express";
import { implementCors } from "../middleware/docs.middlewere";
import {
  addNoteController,
  folderIdController,
  getNoteController,
} from "../controllers/notes.controller";

export const notes = express.Router();

notes.use(implementCors);
notes.post("/", addNoteController);
notes.get("/notes/:id", getNoteController);
notes.get("/:folder", folderIdController);
