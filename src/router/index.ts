import { Router } from '../lib/Router';

import { MainPageHandler } from '../handlers/MainPage';
import { AdminPageHandler } from '../handlers/AdminPage';
import { LoginPageHandler } from '../handlers/LoginPage';
import { LessonPageHandler } from '../handlers/LessonPage';
import { LessonsPageHandler } from '../handlers/LessonsPage';
import { LeaderBoardPageHandler } from '../handlers/LeaderBoardPage';
import { LessonResultPageHandler } from '../handlers/LessonResultPage';

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
  .add({
    method: 'POST',
    path: '/lesson/:lessonId',
    handler: LessonPageHandler,
    callback: 'saveProgress'
  })
  .add({path: '/admin', middlewares: authMiddleware, handler: AdminPageHandler})
  .add({path: '/lessons', handler: LessonsPageHandler})
  .add({path: '/lesson/:lessonId', handler: LessonPageHandler})
  .add({path: '/lesson_result', handler: LessonResultPageHandler})
  .add({path: '/leader_board', handler: LeaderBoardPageHandler})
  .add({path: '/login', handler: LoginPageHandler})
  .add({path: '/', handler: MainPageHandler});

export {
  router
};
