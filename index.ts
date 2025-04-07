import express from 'express';
import { docsRoute } from './routes/docs.router';

const route = express();

route.use('/docs', docsRoute);

route.listen(3001, () => {
    console.log('tudo funcionando!');
});