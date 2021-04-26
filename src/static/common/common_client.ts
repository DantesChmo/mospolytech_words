import {Button} from '../views/base/Button/Button_client';
import {MainPage} from '../views/pages/Main/Main_client';

console.log('HELLO');
(window as any).UConfig = (window as any).UConfig && JSON.parse((window as any).UConfig);
(window as any).Button = Button;
(window as any).MainPage = MainPage;
