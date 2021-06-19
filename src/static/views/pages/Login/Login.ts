import { UComponent } from '../../../../lib/UniversalDom';
import { TextInput } from '../../base/TextInput';
import { Header } from '../../base/Header';
import { Button } from '../../base/Button';

class LoginPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: this.b()},
        u(Header),
        u('form', {onsubmit: 'LoginPage.login(event, this)', className: this.b('Form')},
          u('div', {className: this.b('BoxWrap')},
            u('div', {className: this.b('Box')},
              u(TextInput, {label: 'Логин', clear: true, name: 'email', type: 'email'}),
              u(TextInput, {label: 'Пароль', clear: true, name: 'password', type: 'password'}),
              u(Button, {
                className: this.b('SubmitButton'),
                type: 'submit',
                text: 'Войти',
                fitToParent: true
              })
            ),
          )
        )
      )
    );
  }
}

export {
  LoginPage
};
