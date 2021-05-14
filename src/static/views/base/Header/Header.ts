import { UComponent } from '../../../../lib/UniversalDom';
import { bem } from '../../../../lib/isomorphic/bem';

const b = bem('Header');

class Header extends UComponent<{}> {
  private readonly _links = [
    {path: '/', content: 'Главная'},
    {path: '/leader_board', content: 'Список лучших'},
    {path: '/lessons', content: 'Уроки'},
    {path: '/login', content: 'Вход'}
  ];

  render(u) {
    return (
      u('header', {className: b()},
        u('nav', {className: b('Navigation')},
          u('ul', {className: b('List')},
            this._links.map(({path, content}) => (
              u('li', {className: b('ListItem')},
                u('a', {className: b('Link'), href: path}, content)
              )
            ))
          )
        )
      )
    );
  }
}

export {
  Header
};