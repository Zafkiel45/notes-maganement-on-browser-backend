import express from "express";
import { implementCors } from "../middleware/docs.middlewere";
import {
  addNoteController,
  getfolderByIdController,
  getNoteController,
} from "../controllers/notes.controller";
import { getFoldersByName } from "../services/folder.services";

export const notes = express.Router();

notes.use(implementCors);
notes.post("/", addNoteController);
notes.get("/notes/:id", getNoteController);
notes.get("/:folder", getfolderByIdController);
