import express from 'express';
import { docsController, filesTypeController, foldersController } from '../controllers/controllers.docs';
import { implementCors } from '../middleware/docs.middlewere';

export const docsRoute = express.Router();
export const foldersRoute = express.Router();
export const typesRoute = express.Router();

foldersRoute.use(implementCors);

docsRoute.get('/:id', docsController);
foldersRoute.get('/', foldersController);
typesRoute.get('/:type', filesTypeController)