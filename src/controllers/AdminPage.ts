import { AdminPage } from '../static/views/pages/Admin';
import { u, UDom } from '../lib/UniversalDom';
import { lessonModel } from '../models';

import { Lesson } from '../@types';

class AdminPageController {
  static async render(): Promise<string> {
    const lessons = await AdminPageController.getLessons();

    const dom = new UDom(u(AdminPage, {lessons} as any));
    return dom.createApp({scripts: '/admin_page.js', styles: '/admin_page.css'});
  }

  static async createLesson(data: Lesson.CreateLessonRequestBody): Promise<void> {
    await lessonModel.create({
      name: data.lessonName,
      content: data.lessonContent,
      tree_position: data.treePosition,
      game_type: data.gameType
    });
  }

  static async getLessons(): Promise<Lesson.GetLessonsResponseBody | null> {
    const lessons = await lessonModel.readAll();
    if (!lessons.length) {
      return null
    }

    return lessons.map((lesson) => ({
      lessonName: lesson.name,
      lessonContent: lesson.content,
      treePosition: lesson.tree_position,
      gameType: lesson.game_type
    }));
  }
}

export {
  AdminPageController
};