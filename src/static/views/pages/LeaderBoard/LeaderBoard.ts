import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';

type Props = {
  leads: any
};

class LeaderBoard extends UComponent<Props> {
  render(u) {
    return (
      u('div', {className: this.b()},
        u(Header),
        u('main', {className: this.b('Main')},
          u('div', {className: this.b('Table')},
            u('div', {className: this.b('TableHead')},
              u('div', {className: this.b('TableRow')},
                u('div', {className: this.b('TableItem')}, 'Пользователь'),
                u('div', {className: this.b('TableItem')}, 'Уровни'),
              )
            ),
            u('div', {className: this.b('TableBody')},
              this.props.leads.map(({userId, progress}) => (
                u('div', {className: this.b('TableRow')},
                  u('div', {className: this.b('TableItem')}, userId),
                  u('div', {className: this.b('TableItem')},
                    Object.entries(progress).map(([lessonId, score]) => {
                      return (
                        u('div', {className: this.b('TableSubRow')},
                          u('div', {className: this.b('TableSubItem')}, lessonId),
                          u('div', {className: this.b('TableSubItem')}, score.toString()),
                        )
                      )
                    })
                  ),
                )
              ))
            )
          )
        )
      )
    );
  }
}

export {
  LeaderBoard
};
