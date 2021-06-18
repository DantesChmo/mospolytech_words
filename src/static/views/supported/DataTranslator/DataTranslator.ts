import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  event: string;
};

class DataTranslator extends UComponent<Props> {
  render(u) {
    return (
      u('img', {
        style: 'display: none',
        src: ' ',
        onerror: this.props.event
      })
    );
  }
}

export {
  DataTranslator
};
