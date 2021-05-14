import {
  Request,
  Response,
  NextFunction,
  Router as ExpressRouter
} from 'express';
import { HandlerType } from '../Handler';

type HandlerMethod = (req: Request, res?: Response, next?: NextFunction) => Promise<void> | void;

type HTTPMethod = 'GET' | 'POST' | 'PUT';

interface RouteParams {
  path: string;
  handler: HandlerType;
  method?: HTTPMethod;
  middlewares?: HandlerMethod[] | HandlerMethod;
  callback?: string | 'index'; // TODO
}

class Route {
  public path: string;

  public handler: HandlerMethod;

  public method: HTTPMethod;

  public middlewares: RouteParams['middlewares'];

  constructor({ path, handler, middlewares, method = 'GET', callback = 'index' }: RouteParams) {
    this.path = path;
    const handlerInstance = new handler();
    this.handler = handlerInstance[callback];
    this.method = method;
    this.middlewares = middlewares;
  }
}

class Router {
  private _routesStorage: Route[] = [];

  public add(params: RouteParams): this {
    const route = new Route(params);
    this._routesStorage.push(route);

    return this;
  }

  public getExpressRouter(): ExpressRouter {
    const router = ExpressRouter();
    this._routesStorage.forEach(({path, handler, method, middlewares}) => {
      const routerMiddlewares = middlewares ? !Array.isArray(middlewares) ? [middlewares] : middlewares : [];

      (router as any)[method.toLowerCase()](path, [...routerMiddlewares, handler]);
    });

    return router;
  }
}

export {
  Router
};
