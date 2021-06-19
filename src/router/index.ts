import { Router } from '../lib/Router';

import { MainPageHandler } from '../handlers/MainPage';
import { LoginPageHandler } from '../handlers/LoginPage';
import { LessonPageHandler } from '../handlers/LessonPage';
import { LessonsPageHandler } from '../handlers/LessonsPage';
import { AdminPageHandler } from '../handlers/AdminPage';

import { authMiddleware } from '../middlewares/auth-middleware';

const router = new Router();

router
  .add({
    method: 'POST',
    path: '/admin/create_lesson',
    middlewares: authMiddleware,
    handler: AdminPageHandler,
    callback: 'createLesson'
  })
  .add({
    method: 'POST',
    path: '/login',
    handler: LoginPageHandler,
    callback: 'login'
  })
  .add({path: '/admin', middlewares: authMiddleware, handler: AdminPageHandler})
  .add({path: '/lessons', handler: LessonsPageHandler})
  .add({path: '/lesson/:lessonId', handler: LessonPageHandler})
  .add({path: '/login', handler: LoginPageHandler})
  .add({path: '/', handler: MainPageHandler});

export {
  router
};
