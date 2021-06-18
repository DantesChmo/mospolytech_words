import { UComponent } from '../../../../lib/UniversalDom';

class Header extends UComponent<{}> {
  private readonly _links = [
    {path: '/', content: 'Главная'},
    {path: '/leader_board', content: 'Список лучших'},
    {path: '/lessons', content: 'Уроки'},
    {path: '/login', content: 'Вход'}
  ];

  render(u) {
    return (
      u('header', {className: this.b()},
        u('nav', {className: this.b('Navigation')},
          u('ul', {className: this.b('List')},
            this._links.map(({path, content}) => (
              u('li', {className: this.b('ListItem')},
                u('a', {className: this.b('Link'), href: path}, content)
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