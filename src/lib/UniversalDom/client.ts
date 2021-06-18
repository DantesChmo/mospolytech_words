import {
  USettings,
  UUSettings,
  UComponentType,
  ClientProps,
  InnerType
} from './types';

declare global {
  interface Window {
    Uconfig: any;
  }
}


function $u({key, className, customSelector}: USettings): Element | null {
  if (key) {
    const Uconfig: any = window.Uconfig;

    return document.getElementById(Uconfig[key]);
  }

  const selector = customSelector || className ? `.${className}` : null;

  return selector && document.querySelector(selector);
}

function $$u({customSelector, className, key, firstOf}: UUSettings): Element | null {
  const selector = customSelector || className ? `.${className}` : key ? `[data-key="${key}"]` : null;

  if (!selector) {
    return null;
  }

  const elements = document.querySelectorAll(selector);

  if (!elements) {
    return null;
  }

  // @ts-ignore
  return [].slice.call(elements, 0, firstOf);
}

function appendInner(root: Element, inner: Element | string) {
  let child;
  if (typeof inner === 'string') {
    if (/<svg/.test(inner)) {
      const tmpElement = document.createElement('div');
      tmpElement.innerHTML = inner;
      child = tmpElement.querySelector('svg');
    } else {
      child = document.createTextNode(inner);
    }
  } else {
    child = inner;
  }

  root.appendChild(child);
}

function uCreateElementClient<T>(
  component: any, // UComponentType<T> | string,
  props: T = null,
  ...inner: any[]
): Element {
  let root: Element | undefined;

  if (typeof component !== 'string') {
    const instance = new component(props);
    root = instance!.render!(uCreateElementClient);
  } else {
    root = document.createElement(component);
  }

  if (props !== null) {
    Object.entries(props).forEach(([attrName, attrValue]) => {
      if (typeof attrValue === 'string') {
        const currentAttrName = attrName === 'className' ? 'class' : attrName;
        root.setAttribute(currentAttrName, attrValue);
      }
    });
  }

  inner?.forEach((currentInner) => {
    if (Array.isArray(currentInner)) {
      currentInner.forEach((currentDeepInner: any) => appendInner(root, currentDeepInner));
    } else {
      appendInner(root, currentInner);
    }
  });

  return root;
}

export {
  uCreateElementClient as u,
  $u,
  $$u
}