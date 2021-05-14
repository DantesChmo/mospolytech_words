import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';
import { Header } from '../../base/Header';
import { Form } from '../../base/Form';
import { TextInput } from '../../base/TextInput';

const b = bem('AdminPage');

class AdminPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: b()},
        u(Header),
        u('main', {className: b('Main')},
          u('form', {className: b('Form')},
            u(TextInput, {name: 'lesson_name', label: 'Название уровня'}),
            u(TextInput, {name: 'lesson_content', label: 'Контент уровня'}),
          )
        )
      )
    );
  }
}

export {
  AdminPage
};