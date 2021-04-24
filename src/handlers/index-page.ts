import {Request, Response} from 'express';
import {UDom, u} from '../lib/UniversalDom';
import {MainPage} from '../static/skins/pages/Main';

const indexPageHandler = (req: Request, res: Response) => {
  res.setHeader('Content-type', 'text/html');

  const dom = new UDom(u(MainPage));
  const page = dom.createApp();

  res.send(page);
};

export {
  indexPageHandler
};