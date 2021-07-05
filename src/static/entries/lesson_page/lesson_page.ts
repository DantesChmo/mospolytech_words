import { KeyboardGrid } from '../../views/keyboard/KeyboardGrid/KeyboardGrid_client';
import { Lesson } from '../../views/pages/Lesson/Lesson_client';
import { ResultScreen } from '../../views/game/ResultScreen/ResultScreen_client';
import { Platformer } from '../../views/game/Platformer/Platformer_client';
import { Dialog } from '../../views/game/Dialog/Dialog_client';

import { keyObserver } from '../../client/KeyObserver';

import './lesson_page.css';

declare global {
  interface Window {
    Lesson: Lesson;
    ResultScreen: ResultScreen;
    KeyboardGrid: KeyboardGrid;
    Platformer: Platformer;
    Dialog: Dialog;
  }
}

window.Lesson = Lesson;
window.ResultScreen = ResultScreen;
window.KeyboardGrid = KeyboardGrid;
window.Platformer = Platformer;
window.Dialog = Dialog;

window.onload = () => {
  keyObserver
    .push('down', Platformer.step)
    .push('down', Dialog.step)
    .push('up', ResultScreen.onKeyUp)
    .push('up', KeyboardGrid.keyUp)
    .push('down', KeyboardGrid.keyDown)
    .push('up', Lesson.checkGameStatus)
    .push('down', Lesson.calcScore);
};
