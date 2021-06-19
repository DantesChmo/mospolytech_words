import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  content: string
};

class Platformer extends UComponent<Props> {
  private _prepareGameContent(): number[] {
    const words = this.props.content.split(' ');

    return words.map((word) => word.length);
  }

  private _renderPlayer(u) {
    return (
      u('span', {className: this.b('Player')})
    );
  }

  private _renderSteps(u, steps: number[]) {
    return steps.map((step, index) => (
      u('span', {
        className: this.b('Step'),
        'data-length': step,
        'data-key': index,
        style: `bottom: ${index * 80}px;${index % 2 === 0 ? 'left: 0%' : 'right: 0%'};`
      })
    ));
  }

  render(u) {
    const steps = this._prepareGameContent();

    return (
      u('div', {className: this.b()},
        u(
          'div',
          {
            className: this.b('Inner'),
            style: `height: ${80 * 3 * steps.length}px;`
          },
          this._renderSteps(u, steps).concat([this._renderPlayer(u)])
        )
      )
    );
  }
}

export {
  Platformer
};
