import express from 'express';
import { implementCors } from '../middleware/docs.middlewere';
import { createFolder } from '../controllers/folders.controller';

export const folderAdd = express.Router();

folderAdd.use(implementCors);
folderAdd.post('/', createFolder);