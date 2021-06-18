import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';

class LessonsPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: this.b()},
        u(Header)
      )
    );
  }
}

export {
  LessonsPage
};