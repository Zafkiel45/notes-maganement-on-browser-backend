import express from 'express';
import { docsController, foldersController } from '../controllers/controllers.docs';
import { implementCors } from '../middleware/docs.middlewere';

export const docsRoute = express.Router();
export const foldersRoute = express.Router();

foldersRoute.use(implementCors);

docsRoute.get('/:id', docsController);
foldersRoute.get('/', foldersController);