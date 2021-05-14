import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { LessonPageController } from '../controllers/LessonPage'

class LessonPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = LessonPageController.render();

    res.send(response);
  }
}

export {
  LessonPageHandler
};
