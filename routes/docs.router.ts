import express from 'express';
import { implementCors } from '../middleware/docs.middlewere';

const getDocsRoute = express.Router();

getDocsRoute.use(implementCors);

getDocsRoute.get('/:doc', () => {

});