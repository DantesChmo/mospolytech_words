import { LessonPage } from '../static/views/pages/Lesson';
import { UDom, u } from '../lib/UniversalDom';
import { lessonModel } from '../models';

import { Lesson } from '../@types';

class LessonPageController {
  static async render(lessonId: string): Promise<string> {
    const lesson = await LessonPageController.getLesson(lessonId);

    const dom = new UDom(u(LessonPage, {
      name: lesson.lessonName,
      content: lesson.lessonContent,
      gameType: lesson.gameType
    }));
    return dom.createApp({scripts: '/lesson_page.js',styles: '/lesson_page.css'});
  }

  static async getLesson(lessonId: string): Promise<Lesson.GetLessonResponseBody> {
    const dbLesson = await lessonModel.readById(lessonId);

    return ({
      lessonName: dbLesson.name,
      gameType: dbLesson.game_type,
      lessonContent: dbLesson.content,
      treePosition: dbLesson.tree_position
    });
  }
}

export {
  LessonPageController
};
