import { Request, Response, NextFunction } from 'express';

interface IHandler {
  index(req: Request, res?: Response, next?: NextFunction): Promise<void> | void;
}

type HandlerType = { new(): Handler };

type HandlerMethodType = IHandler['index'];

abstract class Handler implements IHandler {
  abstract index(
    req: Request,
    res?: Response,
    next?: NextFunction
  ): Promise<void> | void;
}

export {
  Handler,
  HandlerType,
  HandlerMethodType,
  Request,
  Response,
  NextFunction
};
