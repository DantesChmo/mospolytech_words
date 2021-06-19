import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { LessonsPageController } from '../controllers/LessonsPage';

class LessonsPageHandler extends Handler {
  @asyncHandler
  async index(req, res, next): Promise<void> {
    res.setHeader('Content-type', 'text/html');

    const response = await LessonsPageController.render();

    res.send(response);
  }
}

export {
  LessonsPageHandler
};
