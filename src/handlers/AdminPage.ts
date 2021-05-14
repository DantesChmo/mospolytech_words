import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { AdminPageController } from '../controllers/AdminPage';

class AdminPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = AdminPageController.render();

    res.send(response);
  }
}

export {
  AdminPageHandler
};