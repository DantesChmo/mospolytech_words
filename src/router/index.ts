import { Router } from '../lib/Router';

import { MainPageHandler } from '../handlers/MainPage';
import { LoginPageHandler } from '../handlers/LoginPage';
import { LessonPageHandler } from '../handlers/LessonPage';
import { LessonsPageHandler } from '../handlers/LessonsPage';
import { AdminPageHandler } from '../handlers/AdminPage';

const router = new Router();

router
  .add({path: '/admin', handler: AdminPageHandler})
  .add({path: '/lessons', handler: LessonsPageHandler})
  .add({path: '/lesson/:lessonId', handler: LessonPageHandler})
  .add({path: '/login', handler: LoginPageHandler})
  .add({path: '/', handler: MainPageHandler});

export {
  router
};
