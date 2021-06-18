import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';
import { TextInput } from '../../base/TextInput';
import { TextArea } from '../../base/TextArea';
import { Button } from '../../base/Button';
import { Directions, RadioButton } from '../../base/RadioButton';

import { Lesson } from '../../../../@types';

type Props = {
  className?: string,
  lessons?: Lesson.GetLessonsResponseBody;
}

class AdminPage extends UComponent<Props> {
  private _lessonTypes = [
    {
      value: 'platform',
      label: 'Платформер'
    },
    {
      value: 'scroll',
      label: 'Сайд скроллер'
    },
    {
      value: 'dialog',
      label: 'Диалог'
    }
  ];

  private _renderLessonList(u) {
    return this.props.lessons ? (
      u('ul', {className: this.b('LessonList')},
        this.props.lessons.map((lessonListElement) => (
          u('li', {className: this.b('LessonListElement')},
            u('span', {className: this.b('LessonListElementName')}, lessonListElement.lessonName),
            u('span', {className: this.b('LessonListElementContent')}, lessonListElement.lessonContent),
            u('span', {className: this.b('LessonListElementPath')}, lessonListElement.treePosition)
          )
        ))
      )
    ) : (
      u('div', {className: this.b('LessonList', {empty: true})},
        u('span', {className: this.b('LessonListText')}, 'Пока нет уровней')
      )
    );
  }

  private _renderRadioButton(u, value: string, label: string) {
    return (
      u(RadioButton, {
        className: this.b('Radio'),
        name: 'gameType',
        value,
        label,
        direction: Directions.TO_RIGHT
      })
    );
  }

  private _renderRadioGroup(u) {
    return (
      u('div', {className: this.b('RadioGroup')},
        this._lessonTypes.map(({value, label}) => this._renderRadioButton(u, value, label))
      )
    );
  }

  private _renderTextInputGroup(u) {
    return (
      u('div', {className: this.b('TextInputGroup')},
        u(TextInput, {name: 'lessonName', label: 'Название уровня', clear: true}),
        u(TextInput, {name: 'treePosition', label: 'Позиция уровня', clear: true}),
        u(TextArea, {name: 'lessonContent', label: 'Контент ', clear: true}),
      )
    );
  }

  private _renderForm(u) {
    return (
      u('form', {onsubmit: 'AdminPage.onSubmit(event, this)', className: this.b('Form')},
        this._renderRadioGroup(u),
        this._renderTextInputGroup(u),
        u(Button, {type: 'submit', text: 'Создать уровень', className: this.b('SubmitButton')})
      )
    );
  }

  render(u) {
    return (
      u('div', {className: this.b()},
        u(Header),
        u('main', {className: this.b('Main')},
          this._renderLessonList(u),
          this._renderForm(u)
        )
      )
    );
  }
}

export {
  AdminPage
};
