import {$u, u} from '../../../../lib/UniversalDom/client';
import {Title} from '../../base/Title';

class MainPage {
  static onButtonClick() {
    console.log('hello');
    const $hello = $u({key: 'hello'});
    $hello.innerHTML = 'FUCK YOU';
    console.log($hello);
  }
}

export {
  MainPage
};
