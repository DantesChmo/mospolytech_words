import {UComponent} from '../../../../lib/UniversalDom';

class MainPage extends UComponent<{hello: string}> {
  constructor(props) {
    super(props);
  }

  render(u) {
    return (
      u('div', {className: 'MainPage'}, 'SOME TEXT')
    );
  }
}

export {
  MainPage
};
