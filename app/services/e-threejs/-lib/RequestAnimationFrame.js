export class RequestAnimationFrame {
  constructor(callback, callbackContext) {
    this._active = false;
    this._argsArray = [];
    this.setCallback(callback, callbackContext);
    this._rafUpdateFunction = () => {
      if (this._active) {
        this._tick();
      }
    };

    this._argsArray.push(this._dt);
  }

  setCallback(callback, callbackContext) {
    this._callback = callback;
    this._callbackContext = callbackContext;
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
    this._callback = null;
    this._callbackContext = null;
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

    // spread operator shims are slower than apply.
    this._callback.apply(this._callbackContext, this._argsArray);
    requestAnimationFrame(this._rafUpdateFunction);
    this._prevTime = this._currentTime;
  }
}
