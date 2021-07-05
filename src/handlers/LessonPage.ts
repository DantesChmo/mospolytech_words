import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { LessonPageController } from '../controllers/LessonPage'

class LessonPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = await LessonPageController.render(req.params.lessonId);

    res.send(response);
  }

  @asyncHandler
  async saveProgress(req, res): Promise<void> {
    await LessonPageController.saveProgress(req.params.lessonId, req.body.userId, req.body.score);
    res.json({ok: true});
  }
}

export {
  LessonPageHandler
};
