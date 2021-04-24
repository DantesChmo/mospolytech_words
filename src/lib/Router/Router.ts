import {Request, Response, NextFunction, Router as ExpressRouter} from 'express';

type Handler = (req: Request, res?: Response, next?: NextFunction) => void;

type HTTPMethod = 'GET' | 'POST' | 'PUT';

class Route {
  public path: string;

  public handler: Handler;

  public method: HTTPMethod;

  constructor(path: string, handler: Handler, method: HTTPMethod) {
    this.path = path;
    this.handler = handler;
    this.method = method;
  }
}

class Router {
  private _routesStorage: Route[] = [];

  public add(path: string, handler: Handler, method: HTTPMethod = 'GET'): this {
    const route = new Route(path, handler, method);
    this._routesStorage.push(route);

    return this;
  }

  public getExpressRouter(): ExpressRouter {
    const router = ExpressRouter();
    this._routesStorage
      .forEach(({path, handler, method}) => (router as any)[method.toLowerCase()](path, handler));

    return router;
  }
}

export {
  Router
};
