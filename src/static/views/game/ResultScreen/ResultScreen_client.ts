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
    const nextLetterElement = `<span class="ResultScreen__NextLetter">
      ${nextLetter === ' ' ? '<svg viewBox="0 -161 514.42745 514" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="m482.277344 193.125h-450.125c-17.765625 0-32.152344-14.390625-32.152344-32.152344v-112.53125c0-26.636718 21.589844-48.226562 48.226562-48.226562 26.640626 0 48.230469 21.589844 48.230469 48.226562v48.226563h321.515625v-48.226563c0-26.636718 21.589844-48.226562 48.226563-48.226562s48.226562 21.589844 48.226562 48.226562v112.53125c0 17.761719-14.386719 32.152344-32.148437 32.152344zm0 0" fill="currentColor"/></svg>' : nextLetter}
    </span>`;
    $screen.innerHTML = Store.getData('gameProgress') + nextLetterElement;
  }
}

export {
  ResultScreen
};