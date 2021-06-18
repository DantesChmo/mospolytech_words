import { KeyboardGrid } from '../../views/keyboard/KeyboardGrid/KeyboardGrid_client';
import { Lesson } from '../../views/pages/Lesson/Lesson_client';
import { ResultScreen } from '../../views/game/ResultScreen/ResultScreen_client';

import { keyObserver } from '../../client/KeyObserver';

import './lesson_page.css';

declare global {
  interface Window {
    Lesson: Lesson;
    ResultScreen: ResultScreen;
    KeyboardGrid: KeyboardGrid;
  }
}

window.Lesson = Lesson;
window.ResultScreen = ResultScreen;
window.KeyboardGrid = KeyboardGrid;

keyObserver
  .push('up', ResultScreen.onKeyUp)
  .push('up', KeyboardGrid.keyUp)
  .push('down', KeyboardGrid.keyDown);