import { u, UDom } from '../lib/UniversalDom';
import { MainPage } from '../static/views/pages/Main';

class MainPageController {
  static render(): string {
    const dom = new UDom(u(MainPage));
    return dom.createApp({scripts: '/main.js'});
  }
}

export {
  MainPageController
};
