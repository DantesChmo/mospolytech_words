import { KeyboardGrid } from '../../views/keyboard/KeyboardGrid/KeyboardGrid_client';
import { Lesson } from '../../views/pages/Lesson/Lesson_client';
import { ResultScreen } from '../../views/game/ResultScreen/ResultScreen_client';
import { Platformer } from '../../views/game/Platformer/Platformer_client';

import { keyObserver } from '../../client/KeyObserver';

import './lesson_page.css';

declare global {
  interface Window {
    Lesson: Lesson;
    ResultScreen: ResultScreen;
    KeyboardGrid: KeyboardGrid;
    Platformer: Platformer;
  }
}

window.Lesson = Lesson;
window.ResultScreen = ResultScreen;
window.KeyboardGrid = KeyboardGrid;
window.Platformer = Platformer;

keyObserver
  .push('down', Platformer.step)
  .push('up', ResultScreen.onKeyUp)
  .push('up', KeyboardGrid.keyUp)
  .push('down', KeyboardGrid.keyDown);