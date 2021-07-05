import { u, UDom } from "../lib/UniversalDom";
import { LessonResultPage } from "../static/views/pages/LessonResult";

class LessonResultPageController {
  public static render() {
    const dom = new UDom(u(LessonResultPage, {}));
    return dom.createApp({scripts: '/lesson_page.js', styles: '/lesson_page.css'});
  }
}

export {
  LessonResultPageController
};
