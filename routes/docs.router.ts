import express from 'express';
import { docsController } from '../controllers/controllers.docs';

export const docsRoute = express.Router();

docsRoute.get('/:id', docsController);