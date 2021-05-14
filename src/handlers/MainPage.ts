import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { MainPageController } from '../controllers/MainPage';

class MainPageHandler extends Handler {
  @asyncHandler
  async index(req, res, next) {
    res.setHeader('Content-type', 'text/html');

    const response = MainPageController.render();

    res.send(response);
  }
}

export {
  MainPageHandler
};
