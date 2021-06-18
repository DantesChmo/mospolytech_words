import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import {validateBody, validateCookies} from '../lib/validation';
import { LoginPageController } from '../controllers/LoginPage';

import { User } from '../@types';

class LoginPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = LoginPageController.render();

    res.send(response);
  }

  @asyncHandler
  @validateBody((Joi) => Joi.object<User.LoginUserReqBody>({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required()
  }))
  async login(req, res) {
    const {name, password} = req.body;

    const hash = await LoginPageController.login(name, password);

    if (!hash) {
      res.redirect('/login');
      return;
    }

    res.cookie('token', hash);
    res.redirect('/');
  }

  @asyncHandler
  @validateCookies((Joi) => Joi.object<{token: string}>({
    token: Joi.string().guid()
  }))
  async logout(req, res) {
    res.clearCookie('token');
    res.redirect('/');
  }
}

export {
  LoginPageHandler
};
