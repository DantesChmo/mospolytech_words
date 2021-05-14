import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';
import { Header } from '../../base/Header';

const b = bem('LessonsPage');

class LessonsPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: b()},
        u(Header)
      )
    );
  }
}

export {
  LessonsPage
};