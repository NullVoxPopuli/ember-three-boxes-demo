import { setOwner } from './owner';

const DESTROYING = new WeakMap();
const DESTROYED = new WeakMap();

export function setDestroying(component) {
  DESTROYING.set(component, true);
}
export function setDestroyed(component) {
  DESTROYED.set(component, true);
}

export class RenderlessComponent {
  constructor(owner, args) {
    this.args = args;
    setOwner(this, owner);

    DESTROYING.set(this, false);
    DESTROYED.set(this, false);
  }

  didUpdate() {}
  willDestroy() {}

  get isDestroying() {
    return DESTROYING.get(this);
  }

  get isDestroyed() {
    return DESTROYED.get(this);
  }
}
