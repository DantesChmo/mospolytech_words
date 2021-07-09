import { $u } from '../../../../lib/UniversalDom/client';
import { Store } from '../../../client/Store';

const positionMap: Record<string, string> = {
  right: 'left',
  left: 'right'
};

class Dialog {
  static step() {
    const gameContent: string = Store.getData('lessonContent');
    const gameProgress: string = Store.getData('gameProgress');
    const gameWords = gameContent.split(' ');

    if (Store.getData('dialogStep') === null) {
      Store.putData('dialogStep', 0);
    }
    const dialogStep: number = Store.getData('dialogStep');

    if (Store.getData('dialogPosition') === null) {
      Store.putData('dialogPosition', 'left');
    }
    const dialogPosition: 'left' | 'right' = Store.getData('dialogPosition');

    const currentWord = gameWords[dialogStep];
    const currentProgress = currentWord.length;
    const progress = gameProgress.split(' ')[dialogStep].length;

    if (currentProgress === progress) {
      const nextPosition = positionMap[dialogPosition];
      const nextStep = dialogStep + 1;
      const nextWord = gameWords[nextStep];

      Store.putData('dialogPosition', nextPosition);
      Store.putData('dialogStep', nextStep);

      const nextBubbleSelector = `Dialog__Bubble_position_${nextPosition}`;
      const $nextBubble = $u({className: nextBubbleSelector});
      $nextBubble.innerHTML = nextWord;
    }
  }
}

export { Dialog };
