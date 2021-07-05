import { UComponent } from '../../../../lib/UniversalDom';

class ProgressBar extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: this.b()})
    );
  }
}

export {
  ProgressBar
};
