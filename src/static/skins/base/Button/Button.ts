import {UComponent} from '../../../../lib/UniversalDom';
import {Title} from '../Title';

interface Props {
  className: string;
  text: string
}

class Button extends UComponent<Props> {
  render(u) {
    const {className, text} = this.props;

    return (
      u('button', {className},
        u(Title, {className: 'Button__text', content: text})
      )
    );
  }
}

export {
  Button
};
