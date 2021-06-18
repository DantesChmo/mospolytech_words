import { UComponent } from '../../../../lib/UniversalDom';

class Canvas extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: this.b()})
    );
  }
}

export {
  Canvas
};