import { LoginPage } from '../../views/pages/Login/Login_client';

import { TextInput } from '../../views/base/TextInput/TextInput_client';
import { Button } from '../../views/base/Button/Button_client';

import './login_page.css';

declare global {
  interface Window {
    LoginPage: LoginPage;
    TextInput: TextInput;
    Button: Button;
  }
}

window.LoginPage = LoginPage;
window.TextInput = TextInput;
window.Button = Button;
