import { LessonPage } from '../static/views/pages/Lesson';
import { UDom, u } from '../lib/UniversalDom';
import { lessonModel, leadersModel } from '../models';

import { Lesson } from '../@types';

class LessonPageController {
  static async render(lessonId: string): Promise<string> {
    const lesson = await LessonPageController.getLesson(lessonId);

    const dom = new UDom(u(LessonPage, {
      id: lessonId,
      name: lesson?.lessonName,
      content: lesson?.lessonContent,
      gameType: lesson?.gameType
    }));
    return dom.createApp({scripts: '/lesson_page.js', styles: '/lesson_page.css'});
  }

  private static async getLesson(lessonPath: string): Promise<Lesson.GetLessonResponseBody> {
    const pathToLesson = `/${lessonPath.split('_').join('/')}`;
    const dbLesson = await lessonModel.readByPath(pathToLesson);

    return ({
      lessonName: dbLesson?.name,
      gameType: dbLesson?.game_type,
      lessonContent: dbLesson?.content,
      treePosition: dbLesson?.tree_position
    });
  }

  static async saveProgress(lessonId: string, userId: string, score: number) {
    const currentProgress = {[lessonId]: score};

    const leadData = await leadersModel.readByUserId(userId);

    if (leadData) {
      const progress = JSON.stringify({...JSON.parse(leadData.progress), ...currentProgress});
      await leadersModel.update({...leadData, progress})
    } else {
      await leadersModel.create({'user_id': userId, progress: JSON.stringify(currentProgress)});
    }
  }
}

export {
  LessonPageController
};
