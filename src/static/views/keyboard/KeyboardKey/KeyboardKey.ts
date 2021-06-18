import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  content: string,
  codeString: string,
  keyCode: string,
  span?: number
}

class KeyboardKey extends UComponent<Props> {
  render(u) {
    return (
      u(
        'span',
        {
          className: this.b(),
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