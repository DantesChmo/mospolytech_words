import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { router } from '../router';
import { errorMiddleware } from '../middlewares/error-middleware';
import { staticMiddleware } from '../middlewares/static-middleware';
import { resourcesMiddleware } from '../middlewares/resources-middleware';
import { userMiddleware } from '../middlewares/user-middleware';

const app = express()
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(staticMiddleware)
  .use(resourcesMiddleware)
  .use(userMiddleware)
  .use(router.getExpressRouter())
  .use(errorMiddleware);

export {
  app
};
