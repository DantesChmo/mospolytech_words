import { u, UDom } from '../lib/UniversalDom';
import { LeaderBoard } from '../static/views/pages/LeaderBoard';
import { leadersModel, lessonModel } from '../models';

class LeaderBoardPageController {
  static async render() {
    const leads = await leadersModel.readAll();
    const propsOrigin = leads.map(({progress, user_id}) => ({userId: user_id, progress: JSON.parse(progress)}));
    const props = await Promise.all(propsOrigin.map(async ({progress, userId}) => {
      const progressList = await Promise.all(Object.entries(progress).map(async ([lessonPath, score]) => {
        const lesson = await lessonModel.readByPath(`/${lessonPath.split('_').join('/')}`);
        return [lesson.name, score];
      }));

      const currentProgress = progressList.reduce((result, [name, score]) => {
        result[name as string] = score;
        return result;
      }, {});

      return ({
        userId,
        progress: currentProgress
      });
    }));

    const dom = new UDom(u(LeaderBoard, {leads: props as any}));
    return dom.createApp({scripts: '/leader_board_page.js', styles: '/leader_board_page.css'});
  }
}

export {
  LeaderBoardPageController
};
