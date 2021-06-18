import { Handler, Response, Request } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { validateBody } from '../lib/validation';
import { AdminPageController } from '../controllers/AdminPage';

import { Lesson } from '../@types';

class AdminPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = await AdminPageController.render();

    res.send(response);
  }

  @asyncHandler
  @validateBody((Joi) => Joi.object<Lesson.CreateLessonRequestBody>({
    lessonName: Joi.string().required(),
    lessonContent: Joi.string().required(),
    treePosition: Joi.string().required(),
    gameType: Joi.string().allow('platform', 'dialog', 'scroll').required()
  }))
  async createLesson(req: Request, res: Response) {
    await AdminPageController.createLesson(req.body);

    res.json({ok: true});
  }
}

export {
  AdminPageHandler
};