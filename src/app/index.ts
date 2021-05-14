import express from 'express';
import bodyParser from 'body-parser';
import { router } from '../router';
import { errorMiddleware } from '../middlewares/error-middleware';
import { staticMiddleware } from '../middlewares/static-middleware';

const app = express()
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(staticMiddleware)
  .use(router.getExpressRouter())
  .use(errorMiddleware);

export {
  app
};
