import { UComponent } from '../../../../lib/UniversalDom';
import { Header } from '../../base/Header';

class MainPage extends UComponent<{}> {
  render(u) {
    return (
      u('div', {className: 'MainPage'},
        u(Header),
        u('main', {className: this.b('Main')},
          u('h1', {className: this.b('Title')},
            'Type as pro.'
          ),
          u('h2', {className: this.b('Subtitle')},
            'Развитие навыка слепой печати'
          ),
          u('video', {
              className: this.b('VideoContainer'),
              loop: true,
              autoplay: true,
              muted: true
            },
            u('source', {
              src: '/videos/keyboard_intro.mp4',
              type: 'video/mp4'
            })
          )
        )
      )
    );
  }
}

export {
  MainPage
};
