import { Request, Response, NextFunction } from 'express';
import { badImplementation } from '@hapi/boom';

function asyncHandler(target: any, propertyName: string, descriptor: any) {
  const handler = descriptor.value!;

  descriptor.value = async (req: Request, res?: Response, next?: NextFunction) => {
    return Promise.resolve(handler(req, res, next)).catch((err) => {
      if (!err.isBoom) {
        return next(badImplementation(err));
      }
      next(err);
    });
  };
}

export {
  asyncHandler,
};
