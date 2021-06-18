class ErrorHint {
  static onCloseClick(event: PointerEvent, element: HTMLButtonElement) {
    const wrapper = element.parentElement;
    wrapper.remove();
  }
}

export {
  ErrorHint
};