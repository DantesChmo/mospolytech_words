import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';

type Props = {
  onSubmit?: string,
  children: any,
  className: string
};

const b = bem('Form');

class Form extends UComponent<Props> {
  render(u) {
    return (
      u('form', {className: [this.props.className, b()].join(' '), onsubmit: this.props.onSubmit},
        this.props.children
      )
    );
  }
}

export {
  Form
};