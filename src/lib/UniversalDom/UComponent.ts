import {
  CommonProps,
  UFunction,
  IUComponentType
} from './types';
import { bem } from '../isomorphic/bem';

abstract class UComponent<T extends CommonProps | undefined> implements IUComponentType<T> {
  protected props: T;

  protected b: ReturnType<typeof bem>;

  constructor(props: T) {
    this.props = props;
    const blockName = new.target.name;
    this.b = bem(blockName);
  }

  abstract render<E, I>(u: UFunction<E, T, I>): E;
}

export {
  UComponent
};