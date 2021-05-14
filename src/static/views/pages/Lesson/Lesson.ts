import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';
import { Header } from '../../base/Header';
import { KeyboardGrid } from '../../keyboard/KeyboardGrid';

const b = bem('LessonPage');

class LessonPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: b()},
        u(Header),
        u(KeyboardGrid)
      )
    )
  }
}

export {
  LessonPage
};