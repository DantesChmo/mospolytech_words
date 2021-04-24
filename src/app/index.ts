import express from 'express';
import {router} from '../router';

const app = express()
  .use(router.getExpressRouter());

app.listen('8080', () => {
  console.log('Server started');
});