import { u, UDom } from "../lib/UniversalDom";
import { LessonResultPage } from "../static/views/pages/LessonResult";
import { lessonModel, leadersModel } from '../models';

class LessonResultPageController {
  public static async render(lessonPath: string, userId: string) {
    const lead = await leadersModel.readByUserId(userId);
    const score = JSON.parse(lead.progress)[lessonPath];

    const currentLesson = await lessonModel.readByPath(`/${lessonPath.split('_').join('/')}`);
    const nextLesson = await lessonModel.readById(`${currentLesson.id + 1}`);
    const nextLessonHref = nextLesson ? nextLesson.tree_position.split('/').slice(1).join('_') : null;

    const dom = new UDom(u(LessonResultPage, {score, nextLessonHref}));
    return dom.createApp({scripts: '/lesson_result_page.js', styles: '/lesson_result_page.css'});
  }
}

export {
  LessonResultPageController
};
