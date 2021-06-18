import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';
import { KeyboardGrid } from '../../keyboard/KeyboardGrid';
import { DataTranslator } from '../../supported/DataTranslator';
import { ResultScreen } from '../../game/ResultScreen';

type Props = {
  name: string;
  content: string,
  gameType: string
}

class LessonPage extends UComponent<Props> {
  render(u) {
    return (
      u('div', {className: this.b()},
        u(Header),
        u('div', null, this.props.content),
        u(ResultScreen, {firstLetter: this.props.content[0]}),
        u(DataTranslator, {event: `Lesson.init(\`${this.props.content}\`)`}),
        u(KeyboardGrid)
      )
    )
  }
}

export {
  LessonPage
};
