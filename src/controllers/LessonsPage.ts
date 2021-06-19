import { LessonsPage } from '../static/views/pages/Lessons';
import { UDom, u } from '../lib/UniversalDom';
import { lessonModel } from '../models';

class LessonsPageController {
  static async render() {
    const lessons = await lessonModel.readAll();

    const dom = new UDom(u(LessonsPage, {lessons: lessons as any}));
    return dom.createApp({scripts: '/lessons_page.js', styles: '/lessons_page.css'})
  }
}

export {
  LessonsPageController
};