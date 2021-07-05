import { Handler } from '../lib/Handler';
import { asyncHandler } from '../lib/async-handler';
import { LeaderBoardPageController } from '../controllers/LeaderBoardPage';

class LeaderBoardPageHandler extends Handler {
  @asyncHandler
  async index(req, res) {
    res.setHeader('Content-type', 'text/html');

    const response = await LeaderBoardPageController.render();

    res.send(response);
  }
}

export {
  LeaderBoardPageHandler
};
