import {UDomNode} from './UDomNode';
import {
  IUDom,
  UComponentAttributes,
  CommonProps,
  InnerType,
  UAppSettings,
  UHtmlSettings
} from './types';

class UDom {
  private readonly _dom: IUDom;

  private static _idCache: Set<string>;

  private static _keyToIdMap: Record<string | number, string>;

  private static _instance: UDom;

  constructor(dom: IUDom) {
    if (UDom._instance) {
      return UDom._instance;
    }

    this._dom = dom;
    UDom._idCache = new Set();
    UDom._keyToIdMap = {};
    UDom._instance = this;
  }

  private static _createStringElement(tagName: string, attributes: UComponentAttributes): [string, string] {
    const attributesString = attributes ? Object.entries(attributes).reduce((result, [key, value]) => {
      result.push(`${key === 'className' ? 'class' : key}="${value}"`);
      return result;
    }, []).join(' ') : '';

    const innerPlaceholder = '{{inner}}'

    return [`<${tagName} ${attributesString}>${innerPlaceholder}</${tagName}>`, innerPlaceholder];
  }

  public createApp(settings?: UAppSettings): string {
    const appContent = this.toHtmlString(this._dom);
    const config = this._createConfig();

    const body = `${appContent}${config}`;

    return this._createWithOuterHtml({
      body,
      config,
      ...(settings && {...settings})
    });
  }

  public static uCreateElement<T extends CommonProps = null>(
    component: any, // UComponentType<T> | 'string'
    props: T = null,
    ...inner: (InnerType<IUDom>)[]
  ): IUDom {
    let key: IUDom['key'];
    if (props) {
      key = props.key as IUDom['key'];
      delete props.key;
    }

    if (!UDom._idCache) {
      UDom._idCache = new Set();
    }

    if (!UDom._keyToIdMap) {
      UDom._keyToIdMap = {};
    }

    return typeof component !== 'string' ?
      (new component(props)).render(UDom.uCreateElement) :
      new UDomNode({
        tagName: component,
        attributes: props as IUDom['attributes'],
        inner: inner || '',
        key
      }, UDom._idCache, UDom._keyToIdMap)
  }

  public toHtmlString(inner?: IUDom | string): string {
    if (typeof inner === 'string') {
      return inner;
    }

    const currentDom = inner || this._dom;

    const [currentString, innerSeparator] = UDom._createStringElement(currentDom.tagName, currentDom.attributes);
    let innerString = '';

    if (Array.isArray(currentDom.inner)) {
      innerString = currentDom.inner.map((currentInner) => {
        return Array.isArray(currentInner) ?
          currentInner.map((deepCurrentInner) => this.toHtmlString(deepCurrentInner)).join('') :
          this.toHtmlString(currentInner)
      }).join('');
    } else {
      innerString = this.toHtmlString(currentDom.inner);
    }

    return currentString.replace(innerSeparator, innerString);
  }

  private _createConfig(): string {
    const config = JSON.stringify(UDom._keyToIdMap);
    return config !== '{}' ? `<script>window.Uconfig = ${config}</script>` : '';
  }

  private _createWithOuterHtml({
    body = '',
    config = '',
    title = 'Document',
    scripts = [],
    styles = []
  }: UHtmlSettings) {
    return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          ${(Array.isArray(styles) ? styles : [styles]).map((styleLink) => `<link rel="stylesheet" href="${styleLink}">`)}
          <title>${title}</title>
      </head>
      <body>
        ${body}
        ${config}
        ${(Array.isArray(scripts) ? scripts : [scripts]).map((scriptLink) => `<script src="${scriptLink}">`)}
      </body>
      </html>
    `;
  }
}

export {
  UDom
};