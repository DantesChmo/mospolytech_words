import { LessonPage } from '../static/views/pages/Lesson';
import { UDom, u } from '../lib/UniversalDom';

class LessonPageController {
  static render(): string {
    const dom = new UDom(u(LessonPage));
    return dom.createApp({scripts: '/main.js'})
  }
}

export {
  LessonPageController
};
