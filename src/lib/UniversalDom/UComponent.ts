import {
  CommonProps,
  UFunction,
  IUComponentType
} from './types';

abstract class UComponent<T extends CommonProps | undefined> implements IUComponentType<T> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  abstract render<E, I>(u: UFunction<E, T, I>): E;
}

export {
  UComponent
};