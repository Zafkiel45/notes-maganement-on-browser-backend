import express from "express";
import { implementCors } from "../middleware/docs.middlewere";
import {
  createFolder,
  getFoldersController,
} from "../controllers/folders.controller";

export const folder = express.Router();

folder.use(implementCors);
folder.post("/", createFolder);
folder.get("/", getFoldersController);
