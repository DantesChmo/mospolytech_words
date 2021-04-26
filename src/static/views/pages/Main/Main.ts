import {UComponent} from '../../../../lib/UniversalDom';
import {Button} from '../../base/Button';

class MainPage extends UComponent<{hello: string}> {
  render(u) {
    return (
      u('div', {className: 'MainPage'},
        u(Button, {
          className: 'MainPage-Button',
          text: 'button text',
          onClick: 'MainPage.onButtonClick()'
        }),
        u('span', {key: 'hello'}),
        'SOME more Text'
      )
    );
  }
}

export {
  MainPage
};
