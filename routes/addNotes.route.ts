import express from 'express';
import { addNoteController } from '../controllers/addNotes.controller';
import { implementCors } from '../middleware/docs.middlewere';

export const addNotesRoute = express.Router();

addNotesRoute.use(implementCors);
addNotesRoute.post('/', addNoteController);