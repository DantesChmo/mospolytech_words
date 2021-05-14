import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res
    .status(err.output.statusCode)
    .send(err.output.payload)
}

export {
  errorMiddleware
};
