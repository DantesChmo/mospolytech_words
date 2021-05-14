import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';

type Props = {
  content: string,
  codeString: string,
  keyCode: string,
  span?: number
}

const b = bem('KeyboardKey');

class KeyboardKey extends UComponent<Props> {
  render(u) {
    return (
      u(
        'span',
        {
          className: b(),
          key: `key-${this.props.keyCode}`,
          ...(this.props.span && {style: `flex-grow: ${this.props.span}`})
        },
        this.props.content
      )
    );
  }
}

export {
  KeyboardKey
};