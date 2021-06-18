import { Store } from '../../../client/Store';
import { keyObserver } from '../../../client/KeyObserver';

class Lesson {
  public static init(content: string) {
    Store.putData('lessonContent', content);
    keyObserver.registerEvents();
  }
}

export {
  Lesson
};
