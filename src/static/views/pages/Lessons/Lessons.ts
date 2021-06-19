import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';

type Props = {
  lessons: any
};

class LessonsPage extends UComponent<Props> {
  private _renderLessonsList(u) {
    return (
      u('ul', {className: this.b('LessonList')},
        this.props.lessons.map(({tree_position: path, name}) => (
          u('li', {className: this.b('LessonItem')},
            u('a', {
              className: this.b('LessonItemLink'),
              href: `/lesson/${path.split('/').slice(1).join('_')}`
            },
              `${path} ${name}`
            )
          )
        ))
      )
    );
  }

  render(u) {
    return (
      u('div', {className: this.b()},
        u(Header),
        this._renderLessonsList(u)
      )
    );
  }
}

export {
  LessonsPage
};