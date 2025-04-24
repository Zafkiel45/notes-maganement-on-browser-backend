import express from "express";
import { implementCors } from "../middleware/docs.middlewere";
import {
  createNoteController,
  getfolderByIdController,
  getNoteController,
  updateNoteController,
} from "../controllers/notes.controller";

export const notes = express.Router();

notes.use(implementCors);
notes.post("/", createNoteController);
notes.get("/notes/:id", getNoteController);
notes.get("/:folder", getfolderByIdController);
notes.put('/update', updateNoteController);