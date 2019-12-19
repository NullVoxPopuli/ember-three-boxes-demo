export class RequestAnimationFrame {
  _active = false;
  _argsArray = [];
  _listeners = [];

  constructor(callback, callbackContext) {
    this.addCallback(callback, callbackContext);
    this._rafUpdateFunction = () => {
      if (this._active) {
        this._tick();
      }
    };

    this._argsArray.push(this._dt);
  }

  addCallback(callbackFunction, context) {
    this._listeners.push({ callbackFunction, context });
  }

  start() {
    if (this._active) {
      return;
    }

    this._prevTime = Date.now();
    this._active = true;
    requestAnimationFrame(this._rafUpdateFunction);
  }

  dispose() {
    this.stop();
    this._active = null;
    this._argsArray = null;
    this._listeners = null;
  }

  stop() {
    this._active = false;
  }

  get active() {
    return this._active;
  }

  _tick() {
    this._currentTime = Date.now();
    this._dt = this._currentTime - this._prevTime;
    this._argsArray[0] = this._dt;

    let { length } = this._listeners;
    for (let c = 0; c < length; c++) {
      let { callbackFunction, context } = this._listeners[c];
      callbackFunction.apply(context, this._argsArray);
    }

    requestAnimationFrame(this._rafUpdateFunction);
    this._prevTime = this._currentTime;
  }
}
