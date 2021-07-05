import { Store } from '../../../client/Store';

class ProgressBar {
  static onChange() {
    const lessonContent: string = Store.getData('lessonContent');
    const lessonProgress: string = Store.getData('gameProgress');

    const percent = Math.floor(lessonProgress.length * 100 / lessonContent.length);
    const $element = document.querySelector('.ProgressBar');
    $element.setAttribute('style', `width: ${percent}%`);
  }
}

export {
  ProgressBar
};
