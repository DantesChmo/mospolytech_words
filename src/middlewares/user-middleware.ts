import { Request, Response, NextFunction} from 'express';
import * as uuid from 'uuid';

function userMiddleware(req: Request, res: Response, next: NextFunction) {
  const userId = uuid.v4();

  res.cookie('type_as_pro_user_id', userId);

  next();
}

export {
  userMiddleware
};
