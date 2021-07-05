import { DateTime, Interval } from 'luxon';
import { Store } from '../../../client/Store';
import { keyObserver } from '../../../client/KeyObserver';
import { ajax } from '../../../client/ajax';

class Lesson {
  public static init(content: string, lessonId: string) {
    Store.putData('lessonContent', content);
    Store.putData('lessonTimeStart', DateTime.now());
    Store.putData('lessonId', lessonId);
    keyObserver.registerEvents();
  }

  public static calcScore(e: KeyboardEvent) {
    const gameContent: string = Store.getData('lessonContent');
    const gameProgress: string = Store.getData('gameProgress');
    const neededKey = gameContent[gameProgress.length];
    const previousScore: number = Store.getData('gameScore') || 0;

    if (e.key === neededKey) {
      Store.putData('gameScore', previousScore + 2);
    } else {
      Store.putData('gameScore', previousScore - 1);
    }
  }

  public static checkGameStatus() {
    const gameContent: string = Store.getData('lessonContent');
    const gameProgress: string = Store.getData('gameProgress');

    if (gameProgress.length === gameContent.length) {
      const lessonTimeEnd = DateTime.now();
      const lessonStartTime = Store.getData('lessonTimeStart');
      const gameScore: number = Store.getData('gameScore');

      const interval = Interval.fromDateTimes(lessonStartTime, lessonTimeEnd).count('seconds');
      const score = gameScore * interval;
      const userId = window.localStorage.getItem('type_as_pro_user_id');
      const lessonId = Store.getData('lessonId');

      ajax({
        path: `/lesson/${lessonId}`,
        method: 'POST',
        body: {
          score,
          userId
        }
      }).then(() => {
        window.location.href = `/lesson_result?from=${lessonId}`;
      });
    }
  }
}

export {
  Lesson
};
