import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';
import { Button } from '../../base/Button';

class MainPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: 'MainPage'},
        u(Header),
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
