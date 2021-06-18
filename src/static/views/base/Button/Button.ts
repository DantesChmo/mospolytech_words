import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  className?: string,
  text: string,
  onClick: string,
  type?: string,
  fitToParent?: boolean;
}

class Button extends UComponent<Props> {
  render(u) {
    const {
      className = null,
      text,
      onClick,
      type = 'button',
      fitToParent
    } = this.props;

    return (
      u('button', {
        className: [className, this.b({fitToParent})].filter((s) => Boolean(s)).join(' '),
        type,
        onpointerup: 'Button.onUp(this)',
        onpointerdown: 'Button.onDown(this)',
        ...(onClick && {onclick: onClick})
      },
        u('span', {className: this.b('Text')}, text)
      )
    );
  }
}

export {
  Button
};
