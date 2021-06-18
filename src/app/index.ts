import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { router } from '../router';
import { errorMiddleware } from '../middlewares/error-middleware';
import { staticMiddleware } from '../middlewares/static-middleware';

const app = express()
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(staticMiddleware)
  .use(router.getExpressRouter())
  .use(errorMiddleware);

export {
  app
};
