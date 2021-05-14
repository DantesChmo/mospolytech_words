import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';
import { TextInput } from '../../base/TextInput';
import { Form } from '../../base/Form';
import { Header } from '../../base/Header';

const b = bem('LoginPage');

class LoginPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: b()},
        u(Header),
        u('form', {onsubmit: 'LoginPage.login(event)', className: b('Form')},
          u('div', {className: b('BoxWrap')},
            u('div', {className: b('Box')},
              u(TextInput, {label: 'Логин', clear: true, name: 'login', type: 'email'}),
              u(TextInput, {label: 'Пароль', clear: true, name: 'password', type: 'password'})
            )
          )
        )
      )
    );
  }
}

export {
  LoginPage
};
