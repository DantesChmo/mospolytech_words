import { $u } from '../../../../lib/UniversalDom/client';
import { Store } from '../../../client/Store';

class Platformer {
  static previousProgress = '';

  static counter = 0;

  static updateStyle($element: Element, styleName: string, styleValue: string) {
    const previousStyle = $element.getAttribute('style') || '';

    const elementStyles = previousStyle.split(';').reduce((result, string) => {
      const [name, value] = string.split(': ');
      if (name && value) {
        result[name] = value;
      }
      return result;
    }, {});

    elementStyles[styleName] = styleValue;
    const updatedStyleString = Object.entries(elementStyles).reduce((result, [name, value]) => {
      const currentResult = `${name}: ${value};`;
      return result + currentResult
    }, '');

    $element.setAttribute('style', updatedStyleString);
  }

  static step() {
    const currentProgress: string = Store.getData('gameProgress') || '';
    const lessonContent: string = Store.getData('lessonContent') || '';

    if (Platformer.previousProgress.length !== currentProgress.length) {
      Platformer.previousProgress = currentProgress || '';
      const $player = $u({className: 'Platformer__Player'});
      const $canvas = $u({className: 'Platformer__Inner'})

      const lessonWords = lessonContent.split(' ');
      const words = currentProgress.split(' ');
      const neededWordFull = lessonWords[words.length - 1];
      const currentWord = words[words.length - 1];

      if (neededWordFull.toLocaleLowerCase() === currentWord.toLocaleLowerCase()) {
        const step = words.length;
        const xPosition = step % 2 === 0 ? 0 : 600;
        const yPosition = words.length * 80;
        Platformer.updateStyle($player, 'transform', `translate(${xPosition}px, -${yPosition}px)`)
        Platformer.counter++;

        if (Platformer.counter === 3) {
          Platformer.updateStyle($canvas, 'transform', `translateY(${step * 80}px)`);
          Platformer.counter = 0;
        }
      }
    }
  }
}

export {
  Platformer
};
