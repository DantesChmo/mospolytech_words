import { LoginPage } from '../static/views/pages/Login';
import { UDom, u } from '../lib/UniversalDom';

class LoginPageController {
  static render(): string {
    const dom = new UDom(u(LoginPage));
    return dom.createApp({scripts: '/main.js'});
  }
}

export {
  LoginPageController
};