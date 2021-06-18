import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  onSubmit?: string,
  children: any,
  className: string
};

class Form extends UComponent<Props> {
  render(u) {
    return (
      u('form', {className: [this.props.className, this.b()].join(' '), onsubmit: this.props.onSubmit},
        this.props.children
      )
    );
  }
}

export {
  Form
};