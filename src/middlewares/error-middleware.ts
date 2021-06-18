import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err.isBoom) {
    console.log(`${req.method} ${req.url} ${JSON.stringify(err.output.payload)}`);

    if (err.output.payload.statusCode === 401 && req.method === 'GET') {
      res.redirect('/login');
    }
  } else {
    console.log(`${req.method} ${req.url} ${JSON.stringify(err)}`);
  }

  res
    .status(err.output.statusCode)
    .send(err.output.payload)
}

export {
  errorMiddleware
};
