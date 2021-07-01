import { $u } from '../../../../lib/UniversalDom/client';
import { Store } from '../../../client/Store';

class ResultScreen {
  public static onKeyUp(e: KeyboardEvent) {
    const $screen = $u({key: 'ResultScreen'});

    if (!$screen) {
      return;
    }

    const lessonContent = Store.getData('lessonContent');
    let gameProgress: string | null = Store.getData('gameProgress');

    if (gameProgress === null) {
      Store.putData('gameProgress', '');
      gameProgress = Store.getData('gameProgress');
    }

    const currentGameIndex = gameProgress.length;
    const neededContentChar = lessonContent[currentGameIndex];
    const currentChar = e.key;

    if (neededContentChar.toLowerCase() === currentChar.toLocaleLowerCase()) {
      Store.putData('gameProgress', gameProgress + currentChar);
    }

    const currentProgress: string = Store.getData('gameProgress');
    const nextLetter = lessonContent[currentProgress.length];
    const nextLetterElement = `<span class="ResultScreen__NextLetter">${nextLetter}</span>`;
    $screen.innerHTML = Store.getData('gameProgress') + nextLetterElement;
  }
}

export {
  ResultScreen
};