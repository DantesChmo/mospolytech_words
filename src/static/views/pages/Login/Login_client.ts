import { $u } from '../../../../lib/UniversalDom/client';

class LoginPage {
  static login(e: Event) {
    e.preventDefault();
    console.log(e);
  }
}

export {
  LoginPage
};
