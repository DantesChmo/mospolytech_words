import { ajax } from "../../../client/ajax";
import { getFormValues } from '../../../client/form-values';

class LoginPage {
  static async login(e: Event, element: HTMLFormElement) {
    e.preventDefault();
    const formValues = getFormValues<{login: string, password: string}>(element);

    const response = await ajax<{ok: true}, typeof formValues>({
      path: '/login',
      method: 'POST',
      body: formValues
    });

    if (response.body.ok) {
      window.location.href = '/admin';
    }
  }
}

export {
  LoginPage
};
