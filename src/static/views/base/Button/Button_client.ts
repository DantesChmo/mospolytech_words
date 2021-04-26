import {$u, u} from '../../../../lib/UniversalDom/client';

class Button {
  static onClick() {
    const input = $u({key: 'input_keyboard'});
    input.classList.toggle('show');
  }
}

export {
  Button
};
