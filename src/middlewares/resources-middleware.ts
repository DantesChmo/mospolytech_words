import { static as expressStatic } from 'express';
import path from 'path';

const staticPath = path.resolve(__dirname, '../../out/static/resources');

const resourcesMiddleware = expressStatic(staticPath);

export {
  resourcesMiddleware
};