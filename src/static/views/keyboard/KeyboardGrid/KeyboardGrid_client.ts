import { $u } from '../../../../lib/UniversalDom/client';

class KeyboardGrid {
  public static keyDown(e: KeyboardEvent): void {
    if (!KeyboardGrid._isKeyboardExist()) {
      return
    }

    const keyString = `key-${e.keyCode}`;

    const $keyButton = $u({key: keyString});
    $keyButton.classList.add('KeyboardKey_pressed');
  }

  public static keyUp(e: KeyboardEvent): void {
    if (!KeyboardGrid._isKeyboardExist()) {
      return
    }

    const keyString = `key-${e.keyCode}`;

    const $keyButton = $u({key: keyString});
    $keyButton.classList.remove('KeyboardKey_pressed');
  }

  private static _isKeyboardExist(): boolean {
    const $keyboard = $u({key: 'keyboard-grid'});

    return Boolean($keyboard);
  }
}

export {
  KeyboardGrid
};