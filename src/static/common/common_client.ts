import { MainPage } from '../views/pages/Main/Main_client';
import { LoginPage } from '../views/pages/Login/Login_client';

import { Button } from '../views/base/Button/Button_client';
import { TextInput } from '../views/base/TextInput/TextInput_client';

import { KeyboardGrid } from '../views/keyboard/KeyboardGrid/KeyboardGrid_client';

import './common.css';

(window as any).UConfig = (window as any).UConfig && JSON.parse((window as any).UConfig);

(window as any).Button = Button;
(window as any).TextInput = TextInput;
(window as any).MainPage = MainPage;
(window as any).LoginPage = LoginPage;

(window as any).onload = () => {
  KeyboardGrid.init();
};
