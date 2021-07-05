import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';

type Props = {
  lessons: any
};

class LessonsPage extends UComponent<Props> {
  private _renderLessonListBlockItem(u, blockName: string, lessons: {name: string, id: string}[]) {
    return (
      u('li', {className: this.b('LessonListBlockItem')},
        u('div', {className: this.b('LessonListBlockName')},
          blockName,
          u('span', {className: this.b('BlockNameIcon')},
            `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 491.996 491.996" xml:space="preserve">
<g>
\t<g>
\t\t<path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
\t\t\tL62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
\t\t\tc-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
\t\t\tc7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
\t\t\tC491.996,136.902,489.204,130.046,484.132,124.986z"/>
\t</g>
</g>
</svg>`
          )

        ),
        u('ul', {className: this.b('LessonList')},
          lessons.map(({name, id}, ) => (
            u('li', {className: this.b('LessonListItem')},
              u('a', {
                className: this.b('LessonItemLink'),
                href: `/lesson/${blockName}_${id}`
              }, name)
            )
          ))
        )
      )
    );
  }

  private _renderLessonListBlocks(u) {
    const lessons = this.props.lessons.reduce((result, {tree_position: path, name}) => {
      const [blockName, id] = path.split('/').slice(1);
      if (result[blockName]) {
        result[blockName].push({name, id});
      } else {
        result[blockName] = [{name, id}];
      }

      return result;
    }, {});

    return (
      u('ul', {className: this.b('LessonList')},
        Object.entries(lessons).map(([blockName, lessons]: any) => (
          this._renderLessonListBlockItem(u, blockName, lessons)
        ))
      )
    );
  }

  render(u) {
    return (
      u('div', {className: this.b()},
        u(Header),
        u('main', {className: this.b('Main')},
          this._renderLessonListBlocks(u)
        )
      )
    );
  }
}

export {
  LessonsPage
};
