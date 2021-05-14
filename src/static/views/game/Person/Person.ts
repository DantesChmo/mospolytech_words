import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';

const b = bem('Person');

class Person extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: b()})
    );
  }
}

export {
  Person
};