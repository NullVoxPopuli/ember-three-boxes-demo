import { LifeCycleComponent } from 'ember-lifecycle-component';

export default class EmberObject3DComponent extends LifeCycleComponent {
  _parent = undefined;
  _object3D = undefined;

  constructor(owner, args) {
    super(owner, args);
  }

  init() {
    this.didReceiveArgs();
  }

  didReceiveArgs() {
    let { rotation, position, parent, scale } = this.args;
    if (this._object3D && rotation) {
      this._object3D.rotation.set(rotation.x, rotation.y, rotation.z);
    }

    if (this._object3D && position) {
      this._object3D.position.set(position.x, position.y, position.z);
    }

    if (this._object3D && scale) {
      this._object3D.scale.set(scale.x, scale.y, scale.z);
    }

    if (parent !== this._parent) {
      this.remove(this._parent, this._object3D);
      this.add(parent, this._object3D);
      this._parent = parent;
    }
  }

  add(parent, object3D) {
    if (parent && object3D) {
      parent.add(object3D);
    }
  }

  remove(parent, object3D) {
    if (parent && object3D) {
      parent.remove(object3D);
    }
  }

  get object3D() {
    return this._object3D;
  }

  set object3D(object3D) {
    this._object3D = object3D;
  }

  willDestroy() {
    if (this._parent) {
      this.remove(this._parent, this.object3D);
    }
  }
}
