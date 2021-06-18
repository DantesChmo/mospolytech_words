import { UComponent } from '../../../../lib/UniversalDom';

type Props = {
  text: string;
};

class ErrorHint extends UComponent<Props> {
  render(u) {
    console.log(this.b());
    return (
      u('div', {className: this.b()},
        u('button', {
          className: this.b('CloseButton'),
          onclick: 'ErrorHint.onCloseClick(event, this)'
        },
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        ),
        u('span', {className: this.b('Text')}, this.props.text)
      )
    );
  }
}

export {
  ErrorHint
};
