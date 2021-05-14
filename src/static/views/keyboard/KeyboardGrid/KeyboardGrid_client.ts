import { $u } from '../../../../lib/UniversalDom/client';

class KeyboardGrid {
  private static _keyDown(e: KeyboardEvent): void {
    const keyString = `key-${e.keyCode}`;

    const $keyButton = $u({key: keyString});
    $keyButton.classList.add('KeyboardKey_pressed');
  }

  private static _keyUp(e: KeyboardEvent): void {
    const keyString = `key-${e.keyCode}`;

    const $keyButton = $u({key: keyString});
    $keyButton.classList.remove('KeyboardKey_pressed');
  }

  private static _isKeyboardExist(): boolean {
    const $keyboard = $u({key: 'keyboard-grid'});

    return Boolean($keyboard);
  }

  static init() {
    if (!KeyboardGrid._isKeyboardExist()) {
      return;
    }

    window.addEventListener('keydown', KeyboardGrid._keyDown);
    window.addEventListener('keyup', KeyboardGrid._keyUp);
  }
}

export {
  KeyboardGrid
};