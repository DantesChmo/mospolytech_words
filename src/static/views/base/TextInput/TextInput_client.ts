import {$u} from '../../../../lib/UniversalDom/client';

class TextInput {
  static onClearClick(e: Event, name: string) {
    e.preventDefault();
    const $input = $u({key: name}) as HTMLInputElement;

    $input.value = '';
    $input.classList.remove('TextInput__Input_hasValue');
  }

  static onInput(self: HTMLInputElement) {
    if (self.value) {
      self.classList.add('TextInput__Input_hasValue');
    } else {
      self.classList.remove('TextInput__Input_hasValue');
    }
  }
}

export {
  TextInput
};