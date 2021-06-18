class KeyObserver {
  private readonly _subscribersUp: any[] = [];

  private readonly _subscribersDown: any[] = [];

  public push(event: 'down' | 'up', handler, ...args): this {
    if (event === 'down') {
      this._subscribersDown.push(handler);
    } else {
      this._subscribersUp.push(handler);
    }

    return this;
  }

  private _emit(event: 'down' | 'up', e: KeyboardEvent) {
    if (event === 'up') {
      this._subscribersUp.forEach((handler) => handler(e))
    } else {
      this._subscribersDown.forEach((handler) => handler(e))
    }
  }

  public registerEvents() {
    window.addEventListener('keydown', (e) => this._emit('down', e));
    window.addEventListener('keyup', (e) => this._emit('up', e));
  }
}

const keyObserver = new KeyObserver();

export {
  keyObserver
};