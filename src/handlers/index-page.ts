import {Request, Response} from 'express';
import {UDom, u} from '../lib/UniversalDom';
import {MainPage} from '../static/views/pages/Main';

const indexPageHandler = (req: Request, res: Response) => {
  res.setHeader('Content-type', 'text/html');

  const dom = new UDom(u(MainPage));
  const page = dom.createApp({scripts: '/main.js'});

  res.send(page);
};

export {
  indexPageHandler
};