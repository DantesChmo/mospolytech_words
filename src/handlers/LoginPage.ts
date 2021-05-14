import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { LoginPageController } from '../controllers/LoginPage';

class LoginPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = LoginPageController.render();

    res.send(response);
  }
}

export {
  LoginPageHandler
};