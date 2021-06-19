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
    password: Joi.string().required(),
    email: Joi.string().email().required()
  }))
  async login(req, res) {
    const {email, password} = req.body;

    if (req.cookies.token) {
      res.send({ok: true});
    }

    const hash = await LoginPageController.login(email, password);

    if (!hash) {
      res.redirect('/login');
      return;
    }

    res.cookie('token', hash);
    res.send({ok: true});
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
