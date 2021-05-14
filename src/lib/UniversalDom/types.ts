type UFunction<E, P, I> = (component: UComponentType<P>, props: P, ...inner: (InnerType)[]) => E;

type UComponentType<T> = IUComponentType<T> & (new (props: T) => UComponentType<T>);

type UComponentAttributes = Record<string, string | number | boolean> | null;

type UComponentKey = string | number | undefined;

type CommonProps = {
  id?: string,
  className?: string,
  key?: UComponentKey,
  children?: any
} | UComponentAttributes;

type ClientProps = Omit<CommonProps, 'key'> | null;

type InnerType = (IUDom | string | null | undefined)[] | IUDom | string | null | undefined;

interface IUComponentType<P extends CommonProps | undefined> {
  render?<E extends (IUDom | Element), I extends InnerType>(u: UFunction<E, P, I>): E;
}

interface UPageBaseSettings {
  title?: string;
  scripts?: string[] | string;
  styles?: string[] | string;
}

interface UAppSettings extends  UPageBaseSettings {
  chunked?: boolean | undefined;
  chunkSize?: UAppSettings['chunked'] extends boolean ? number : never;
}

interface UHtmlSettings extends UPageBaseSettings {
  body: string;
  config: string;
}

interface USettings {
  key?: string;
  className?: string;
  customSelector?: string;
}

interface UUSettings extends USettings {
  firstOf?: number;
}

interface IUDom {
  tagName: string,
  id: string;
  key?: UComponentKey;
  attributes: UComponentAttributes;
  inner: InnerType;
}

export {
  UComponentAttributes,
  IUDom,
  UFunction,
  IUComponentType,
  CommonProps,
  USettings,
  InnerType,
  UUSettings,
  UComponentType,
  ClientProps,
  UAppSettings,
  UHtmlSettings
};