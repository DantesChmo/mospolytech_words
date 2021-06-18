import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  firstLetter: string;
};

class ResultScreen extends UComponent<Props> {
  render(u) {
    return (
      u('div', {className: this.b(), key: 'ResultScreen'},
        u('span', {className: this.b('NextLetter')}, this.props.firstLetter)
      )
    );
  }
}

export {
  ResultScreen
};
