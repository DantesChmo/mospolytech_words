import { Request, Response, NextFunction } from 'express';
import { unauthorized } from '@hapi/boom';
import { wrapAsyncMiddleware } from '../lib/async-handler';

const authMiddleware = wrapAsyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
  const isAuth = req.cookies.token;

  if (!isAuth) {
    throw unauthorized();
  }

  next();
});

export {
  authMiddleware
};
