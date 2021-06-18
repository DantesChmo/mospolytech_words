import { $u } from '../../../../lib/UniversalDom/client';

class TextArea {
  static onClearClick(e: PointerEvent, element: HTMLButtonElement) {
    e.preventDefault();
    const root = element.parentElement as HTMLInputElement;
    console.log(root);
    const input = root.querySelector('[role="textbox"]') as HTMLInputElement;

    input.value = '';
    input.innerText = '';
    root.classList.remove('TextArea_hasValue');
    element.classList.remove('TextArea__Clear_position_right');
  }

  static onInput(e: InputEvent, element: HTMLInputElement, clear: boolean) {
    e.preventDefault();

    element.value = element.innerText;

    const wrap = element.parentElement;
    if (element.value) {
      wrap.classList.add('TextArea_hasValue');
    } else {
      wrap.classList.remove('TextArea_hasValue');
    }

    if (clear) {
      const $clearBtn = $u({key: 'TextArea__Clear'}) as HTMLButtonElement;
      if ($clearBtn && element.parentElement.offsetWidth - $clearBtn.offsetWidth - 8 < element.offsetWidth) {
        $clearBtn.classList.add('TextArea__Clear_position_right');
      } else {
        $clearBtn.classList.remove('TextArea__Clear_position_right');
      }
    }
  }
}

export {
  TextArea
};
