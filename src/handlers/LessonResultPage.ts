import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { LessonResultPageController } from "../controllers/LessonResultPage";

class LessonResultPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = await LessonResultPageController.render();

    res.send(response);
  }
}

export {
  LessonResultPageHandler
};