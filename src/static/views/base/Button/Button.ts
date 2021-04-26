import {UComponent} from '../../../../lib/UniversalDom';
import {Title} from '../Title';

interface Props {
  className: string;
  text: string;
  onClick: string
}

class Button extends UComponent<Props> {
  render(u) {
    const {className, text, onClick} = this.props;

    return (
      u('button', {className, onclick: onClick},
        u(Title, {className: 'Button__text', content: text})
      )
    );
  }
}

export {
  Button
};
