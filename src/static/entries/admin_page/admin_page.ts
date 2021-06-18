import { AdminPage } from '../../views/pages/Admin/Admin_client';

import { TextArea } from '../../views/base/TextArea/TextArea_client';
import { TextInput } from '../../views/base/TextInput/TextInput_client';
import { Button } from '../../views/base/Button/Button_client';

import './admin_page.css';

declare global {
  interface Window {
    AdminPage: AdminPage;
    TextArea: TextArea;
    TextInput: TextInput;
    Button: Button;
  }
}

window.AdminPage = AdminPage;
window.TextArea = TextArea;
window.TextInput = TextInput;
window.Button = Button;
