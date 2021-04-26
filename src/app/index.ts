import express from 'express';
import path from 'path'
import {router} from '../router';

const staticPath = path.resolve(__dirname, '../../out/static/generated');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(staticPath));
}

app.use(router.getExpressRouter());


export {
  app
};
