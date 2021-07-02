import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  content: string
};

class Dialog extends UComponent<Props> {
  render(u) {
    return (
      u('div', {className: this.b()},
        u('div', {className: this.b('Bubble', {position: 'left'})},
          this.props.content.split(' ')[0]
        ),
        u('div', {className: this.b('Bubble', {position: 'right'})}),
      )
    );
  }
}

export {
  Dialog
};
