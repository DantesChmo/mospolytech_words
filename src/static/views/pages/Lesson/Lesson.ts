import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';
import { KeyboardGrid } from '../../keyboard/KeyboardGrid';
import { DataTranslator } from '../../supported/DataTranslator';
import { ResultScreen } from '../../game/ResultScreen';
import { ProgressBar } from '../../game/ProgressBar';
import { Platformer } from '../../game/Platformer';
import { Dialog } from '../../game/Dialog';

type Props = {
  id?: string,
  name?: string,
  content?: string,
  gameType?: string
}

class LessonPage extends UComponent<Props> {
  private _checkPageContentExistence(): boolean {
    const {content, name, gameType} = this.props;

    return [content, name, gameType].every(Boolean);
  }

  private _getCurrentGame(u) {
    const props = {content: this.props.content};

    switch (this.props.gameType) {
      case 'platform':
        return (
          u(Platformer, props)
        );

      case 'dialog':
        return (
          u(Dialog, props)
        )
    }
  }

  private _renderMainContent(u) {
    return (
      u('main', {className: this.b('Main')},
        u(ResultScreen, {firstLetter: this.props.content[0]}),
        u(DataTranslator, {event: `Lesson.init(\`${this.props.content}\`, '${this.props.id}')`}),
        this._getCurrentGame(u),
        u(KeyboardGrid)
      )
    );
  }

  render(u) {
    const isEmpty = !this._checkPageContentExistence();

    return (
      u('div', {className: this.b()},
        u(Header),
        u(ProgressBar),
        isEmpty ? 'empty' : this._renderMainContent(u)
      )
    )
  }
}

export {
  LessonPage
};
