import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';
import { KeyboardKey } from '../KeyboardKey';

const b = bem('KeyboardGrid');

/*
const t = [];
let i = 0;
function test(e) {
  if (e.keyCode === 13) {
    i++;
    t.push([]);
  } else {
    t[i].push({
      codeString: e.code,
      keyCode: e.keyCode,
      content: e.key
    });
  }
}
 */

class KeyboardGrid extends UComponent<{}> {
  private _keyboardStruct = [
    [
      { codeString: 'IntlBackslash', keyCode: 192, content: '§' },
      { codeString: 'Digit1', keyCode: 49, content: '1' },
      { codeString: 'Digit2', keyCode: 50, content: '2' },
      { codeString: 'Digit3', keyCode: 51, content: '3' },
      { codeString: 'Digit4', keyCode: 52, content: '4' },
      { codeString: 'Digit5', keyCode: 53, content: '5' },
      { codeString: 'Digit6', keyCode: 54, content: '6' },
      { codeString: 'Digit7', keyCode: 55, content: '7' },
      { codeString: 'Digit8', keyCode: 56, content: '8' },
      { codeString: 'Digit9', keyCode: 57, content: '9' },
      { codeString: 'Digit0', keyCode: 48, content: '0' },
      { codeString: 'Minus', keyCode: 189, content: '-' },
      { codeString: 'Equal', keyCode: 187, content: '=' },
      { codeString: 'Backspace', keyCode: 8, content: 'Backspace', span: 1 }
    ],
    [
      { codeString: 'Tab', keyCode: 9, content: 'Tab', span: 1},
      { codeString: 'KeyQ', keyCode: 81, content: 'q' },
      { codeString: 'KeyW', keyCode: 87, content: 'w' },
      { codeString: 'KeyE', keyCode: 69, content: 'e' },
      { codeString: 'KeyR', keyCode: 82, content: 'r' },
      { codeString: 'KeyT', keyCode: 84, content: 't' },
      { codeString: 'KeyY', keyCode: 89, content: 'y' },
      { codeString: 'KeyU', keyCode: 85, content: 'u' },
      { codeString: 'KeyI', keyCode: 73, content: 'i' },
      { codeString: 'KeyO', keyCode: 79, content: 'o' },
      { codeString: 'KeyP', keyCode: 80, content: 'p' },
      { codeString: 'BracketLeft', keyCode: 219, content: '[' },
      { codeString: 'BracketRight', keyCode: 221, content: ']' },
      { codeString: '', keyCode: 1000, content: '', span: 2 }
    ],
    [
      { codeString: 'Escape', keyCode: 27, content: 'Escape' },
      { codeString: 'KeyA', keyCode: 65, content: 'a' },
      { codeString: 'KeyS', keyCode: 83, content: 's' },
      { codeString: 'KeyD', keyCode: 68, content: 'd' },
      { codeString: 'KeyF', keyCode: 70, content: 'f' },
      { codeString: 'KeyG', keyCode: 71, content: 'g' },
      { codeString: 'KeyH', keyCode: 72, content: 'h' },
      { codeString: 'KeyJ', keyCode: 74, content: 'j' },
      { codeString: 'KeyK', keyCode: 75, content: 'k' },
      { codeString: 'KeyL', keyCode: 76, content: 'l' },
      { codeString: 'Semicolon', keyCode: 186, content: ';' },
      { codeString: 'Quote', keyCode: 222, content: "'" },
      { codeString: 'Backslash', keyCode: 220, content: '\\' },
      { codeString: 'Enter', keyCode: 13, content: 'Enter', span: 1 }
    ],
    [
      { codeString: 'ShiftLeft', span: 1, keyCode: 16, content: `Shift <div class="${b('Icon')}"><svg fill="currentColor" enable-background="new 0 0 32 32"  id="Слой_1" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M15.294,0.295L15.294,0.295L15.294,0.295  l-9.991,9.97c-0.66,0.634-0.162,1.748,0.734,1.723h4.976c0,0.004-0.002,0.008-0.002,0.012v19c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1  V12c0-0.004-0.002-0.008-0.002-0.012h4.972c0.892,0.024,1.376-1.082,0.742-1.715l-9.999-9.977  C16.328-0.098,15.688-0.098,15.294,0.295z M23.574,9.983H19.01V10v1v0.988h0.002c0,0.004-0.002,0.008-0.002,0.012v1v17h-6V13v-1  c0-0.004-0.002-0.008-0.002-0.012h0.002V11v-1V9.983H8.442l7.566-7.55L23.574,9.983z" fill="currentColor" fill-rule="evenodd" id="Arrow_Up"/><g/><g/><g/><g/><g/><g/></svg></div>` },
      { codeString: 'Backquote', keyCode: 192, content: '`' },
      { codeString: 'KeyZ', keyCode: 90, content: 'z' },
      { codeString: 'KeyX', keyCode: 88, content: 'x' },
      { codeString: 'KeyC', keyCode: 67, content: 'c' },
      { codeString: 'KeyV', keyCode: 86, content: 'v' },
      { codeString: 'KeyB', keyCode: 66, content: 'b' },
      { codeString: 'KeyN', keyCode: 78, content: 'n' },
      { codeString: 'KeyM', keyCode: 77, content: 'm' },
      { codeString: 'Comma', keyCode: 188, content: ',' },
      { codeString: 'Period', keyCode: 190, content: '.' },
      { codeString: 'Slash', keyCode: 191, content: '/' },
      { codeString: 'ShiftRight', span: 1, keyCode: 16, content: `Shift <div class="${b('Icon')}"><svg fill="currentColor" enable-background="new 0 0 32 32"  id="Слой_1" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M15.294,0.295L15.294,0.295L15.294,0.295  l-9.991,9.97c-0.66,0.634-0.162,1.748,0.734,1.723h4.976c0,0.004-0.002,0.008-0.002,0.012v19c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1  V12c0-0.004-0.002-0.008-0.002-0.012h4.972c0.892,0.024,1.376-1.082,0.742-1.715l-9.999-9.977  C16.328-0.098,15.688-0.098,15.294,0.295z M23.574,9.983H19.01V10v1v0.988h0.002c0,0.004-0.002,0.008-0.002,0.012v1v17h-6V13v-1  c0-0.004-0.002-0.008-0.002-0.012h0.002V11v-1V9.983H8.442l7.566-7.55L23.574,9.983z" fill="currentColor" fill-rule="evenodd" id="Arrow_Up"/><g/><g/><g/><g/><g/><g/></svg></div>` }
    ],
    [
      { codeString: 'ControlLeft', keyCode: 17, content: 'Control' },
      { codeString: 'AltLeft', keyCode: 18, content: 'Alt' },
      { codeString: 'MetaLeft', keyCode: 91, content: 'Meta' },
      { codeString: 'Space', keyCode: 32, content: ' ', span: 1},
      { codeString: 'MetaRight', keyCode: 93, content: 'Meta' },
      { codeString: 'AltRight', keyCode: 18, content: 'Alt' }
    ]
  ];

  render(u) {
    return (
      u('div', {className: b(), key: 'keyboard-grid'},
        this._keyboardStruct.map((row) => (
          u('div', {className: b('Row')},
            row.map((props) => (
              u(KeyboardKey, props)
            ))
          )
        )),
      )
    );
  }
}

export {
  KeyboardGrid
};
