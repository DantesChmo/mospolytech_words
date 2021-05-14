import { AdminPage } from '../static/views/pages/Admin';
import { UDom, u } from '../lib/UniversalDom';

class AdminPageController {
  static render(): string {
    const dom = new UDom(u(AdminPage));
    return dom.createApp({scripts: '/main.js'});
  }
}

export {
  AdminPageController
};