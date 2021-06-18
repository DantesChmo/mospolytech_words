import { UComponent } from '../../../../lib/UniversalDom';

enum Directions {
  TO_TOP = 'toTop',
  TO_BOTTOM = 'toBottom',
  TO_LEFT = 'toLeft',
  TO_RIGHT = 'toRight'
}

type Props = {
  className?: string,
  name: string,
  value: string | number | boolean,
  label?: any, // For u() returned content or string
  direction?: Directions,
  checked?: boolean
};

class RadioButton extends UComponent<Props> {
  render(u) {
    const {
      className,
      name,
      value,
      label,
      direction = Directions.TO_BOTTOM,
      checked = false
    } = this.props;
    const isTextLabel = typeof label === 'string';

    return (
      u('label', {
        className: [this.b({direction}), className].join(' ')
      },
        u('input', {
          className: this.b('Input'),
          type: 'radio',
          name,
          value,
          checked
        }),
        u('span', {className: this.b('Box')}),
        label && u('span', {className: this.b('Label', {isTextLabel})}, label)
      )
    );
  }
}

export {
  RadioButton,
  Directions
};
