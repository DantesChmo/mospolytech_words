import {
  USettings,
  UUSettings,
  UComponentType,
  ClientProps,
  InnerType
} from './types';


function $u({key, className, customSelector}: USettings): Element | null {
  if (key) {
    const {Uconfig} = window as any;

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
  const child = typeof inner === 'string' ? document.createTextNode(inner) : inner;

  root.appendChild(child);
}

function uCreateElementClient<T extends ClientProps>(
  component: UComponentType<T> | string,
  props: T = null,
  ...inner: InnerType<Element>[]
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
        root.setAttribute(attrName, attrValue);
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