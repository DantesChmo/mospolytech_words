import {Router} from '../lib/Router';

import {indexPageHandler} from '../handlers/index-page';

const router = new Router()

router
  .add('/', indexPageHandler);

export {
  router
};
