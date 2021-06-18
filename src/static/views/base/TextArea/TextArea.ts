import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  name: string,
  label: string,
  clear?: boolean
};

class TextArea extends UComponent<Props> {
  render(u) {
    return (
      u('div', {className: this.b()},
        u('span', {
          className: this.b('Inner'),
          role: 'textbox',
          oninput: `TextArea.onInput(event, this, ${this.props.clear})`,
          name: this.props.name,
          contenteditable: true,
          'aria-multiline': true

        }),
        u('label', {className: this.b('Label')}, this.props.label),
        this.props.clear && (
          u(
            'button',
            {
              key: 'TextArea__Clear',
              className: this.b('Clear'),
              onclick: 'TextArea.onClearClick(event, this)'
            },
            '<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
          )
        )
      )
    );
  }
}

export {
  TextArea
};