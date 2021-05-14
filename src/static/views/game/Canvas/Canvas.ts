import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';

const b = bem('Canvas');

class Canvas extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: b()})
    );
  }
}

export {
  Canvas
};