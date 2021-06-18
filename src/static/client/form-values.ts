function getFormValues(form: HTMLFormElement): Record<string, string | number | boolean> | null {
  const selector = 'input[name],span[role="textbox"]';
  const inputElements = form.querySelectorAll<HTMLInputElement>(selector);

  if (!inputElements) {
    return null;
  }

  return Array.from(inputElements).reduce((result, input) => {
    const name = input.getAttribute('name');
    const value = input.value;

    if (name && value) {
      result[name] = value;
    }

    return result;
  }, {});
}

export {
  getFormValues
};