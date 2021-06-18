import { UComponent } from '../../../../lib/UniversalDom';

class Person extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: this.b()})
    );
  }
}

export {
  Person
};