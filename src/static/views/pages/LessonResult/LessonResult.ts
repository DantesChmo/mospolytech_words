import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  score: string,
  nextLessonHref?: string
}

class LessonResultPage extends UComponent<Props> {
  render(u) {
    return (
      u('div', {className: this.b()},
        u('div', {className: this.b('Modal')},
          u('h1', {className: this.b('Title')}, 'Type as Pro!'),
          u('h2', {className: this.b('Subtitle')}, `Ваш счет - ${this.props.score}`),
          u('div', {className: this.b('Bottom')},
            u('a', {className: this.b('Link'), href: '/lessons'}, 'Выбор уровня'),
            this.props.nextLessonHref ? u('a', {
              className: this.b('Link'),
              href: `/lesson/${this.props.nextLessonHref}`
            }, 'Следующий уровень') : ''
          )
        )
      )
    );
  }
}

export {
  LessonResultPage
};