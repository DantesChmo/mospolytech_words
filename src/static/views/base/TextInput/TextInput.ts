import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';

type Props = {
  label: string,
  clear?: boolean,
  name: string,
  type?: string
};

const b = bem('TextInput');

class TextInput extends UComponent<Props> {
  render(u) {
    return (
      u('div', {className: b()},
        u('div', {className: b('Box')},
          u('input', {
            className: b('Input'),
            type: this.props.type || 'text',
            key: this.props.name,
            oninput: 'TextInput.onInput(this)'
          }),
          u('label', {className: b('Label')},
            u('span', {className: b('LabelInner')},
              this.props.label
            )
          ),
          this.props.clear && (
            u(
              'button',
              {
                className: b('Clear'),
                onclick: `TextInput.onClearClick(event, '${this.props.name}')`
              },
              '<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
            )
          )
        )
      )
    );
  }
}

export {
  TextInput
};