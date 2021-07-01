function getFormValues<T extends Record<string, string | number | boolean>>(form: HTMLFormElement): T | null {
  const selector = 'input[name],span[role="textbox"]';
  const inputElements = form.querySelectorAll<HTMLInputElement>(selector);

  if (!inputElements) {
    return null;
  }

  return Array.from(inputElements)
    .filter(Boolean)
    .reduce((result, input) => {
      const name = input.getAttribute('name');
      const value = input.value;

      if (name && value) {
        if (result[name]) {
          (result as unknown)[name] = input.checked ? value : result[name];
        } else {
          (result as unknown)[name] = value;
        }
      }

      return result;
  }, {} as T);
}

export {
  getFormValues
};
