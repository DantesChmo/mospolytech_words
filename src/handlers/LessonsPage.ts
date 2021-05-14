import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { LessonsPageController } from '../controllers/LessonsPage';

class LessonsPageHandler extends Handler {
  @asyncHandler
  index(req, res, next): Promise<void> | void {
    res.setHeader('Content-type', 'text/html');

    const response = LessonsPageController.render();

    res.send(response);
  }
}

export {
  LessonsPageHandler
};
