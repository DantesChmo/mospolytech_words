import { LessonsPage } from '../static/views/pages/Lessons';
import { UDom, u } from '../lib/UniversalDom';

class LessonsPageController {
  static render() {
    const dom = new UDom(u(LessonsPage));
    return dom.createApp({scripts: '/lessons_page.js', styles: '/lessons_page.css'})
  }
}

export {
  LessonsPageController
};