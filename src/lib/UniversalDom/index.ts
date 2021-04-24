import {UDom} from './UDom';
import {UComponent} from './UComponent';

/*
  u('div', {},
    u(Button, {},
    )
  )
 */

/*
  {
    tagName: 'div',
    id: 'sdfsdfsd-sdfsdf-sdfgfdg-kjllk',
    attributes: {
      className: 'Button',
    },
    inner: [
      {
        tagName: 'span',
        id: 'sdsfjh-gfhfdlg',
        attributes: {
          className: 'Button__inner'
        },
        inner: 'Content'
      },
      'Some content'
    ]
  }
 */

const u = UDom.uCreateElement;

export {
  UComponent,
  UDom,
  u
};
