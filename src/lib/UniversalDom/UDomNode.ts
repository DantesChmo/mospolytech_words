import {
  UComponentAttributes,
  IUDom
} from './types';

class UDomNode implements IUDom {
  private static _idCache: Set<string>;

  private static _keyToIdMap: Record<string | number, string>;

  public tagName: string;

  public id: string;

  public attributes: UComponentAttributes;

  public inner: string | IUDom | (string | IUDom | string[] | IUDom[])[];

  constructor(
    props: Omit<IUDom, 'id'>,
    idCache: Set<string>,
    keyToIdMap: Record<string | number, string>
  ) {
    UDomNode._idCache = idCache;
    UDomNode._keyToIdMap = keyToIdMap;

    const {tagName, inner, attributes, key} = props;

    this.tagName = tagName;
    this.inner = inner;
    this.attributes = UDomNode._parseAttributes({
      ...attributes,
      ...(key && {'data-key': key})
    });
    this.id = this.attributes['id'] as string;

    if (key) {
      console.log('IM HERE');
      UDomNode._keyToIdMap[key] = this.id;
      console.log(UDomNode._keyToIdMap);
    }
  }

  private static _parseAttributes(attributes: UComponentAttributes): UComponentAttributes {
    if (attributes?.['id']) {
      attributes['data-id'] = attributes['id'];
    }

    if (!attributes) {
      attributes = {};
    }

    attributes['id'] = this._getId();

    return attributes;
  }

  private static _generateId(): string {
    return Math.random().toString();
  }

  private static _getId(): string {
    const id = UDomNode._generateId();

    return UDomNode._idCache.has(id) ? this._getId() : id;
  }
}

export {
  UDomNode
};