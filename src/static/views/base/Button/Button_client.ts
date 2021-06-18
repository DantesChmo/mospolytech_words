class Button {
  private static _buttonPressedSelector = 'Button_pressed';

  static onDown(element: HTMLButtonElement) {
    element.classList.add(Button._buttonPressedSelector);
  }

  static onUp(element: HTMLButtonElement) {
    element.classList.remove(Button._buttonPressedSelector);
  }
}

export {
  Button
};
