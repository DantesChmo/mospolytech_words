import {UComponent} from '../../../../lib/UniversalDom';

interface Props {
  className: string;
  content: string;
}

class Title extends UComponent<Props> {
  render(u) {
    const {className, content} = this.props;

    return (
      u('h1', {className},
        content
      )
    );
  }
}

export {
  Title
};
