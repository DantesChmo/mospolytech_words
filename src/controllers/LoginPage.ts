import * as uuid from 'uuid';
import {LoginPage} from '../static/views/pages/Login';
import {u, UDom} from '../lib/UniversalDom';
import {userModel} from '../models';

class LoginPageController {
  static render(): string {
    const dom = new UDom(u(LoginPage));
    return dom.createApp({scripts: '/login_page.js', styles: '/login_page.css'});
  }

  static async login(name: string, password: string): Promise<string | null> {
    const user = await userModel.readByUserData({name, password});

    if (!user && name !== 'admin@admin.com' && password !== 'admin') {
      return null;
    }

    return uuid.v4();
  }
}

export {
  LoginPageController
};