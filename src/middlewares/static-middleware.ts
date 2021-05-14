import { static as expressStatic } from 'express';
import path from 'path';

const staticPath = path.resolve(__dirname, '../../out/static/generated');

const staticMiddleware = expressStatic(staticPath);

export {
  staticMiddleware
};