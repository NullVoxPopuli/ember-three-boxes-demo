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
    let { rotation, position, parent } = this.args;
    if (rotation) {
      this._object3D.rotation.set(rotation.x, rotation.y, rotation.z);
    }

    if (position) {
      this._object3D.position.set(position.x, position.y, position.z);
    }

    this.add(parent);
  }

  add(parent) {
    if (parent && this._object3D) {
      this._parent = parent;
      this._parent.add(this._object3D)
    }
  }

  remove(parent) {
    if (parent && this._object3D) {
      this._parent.remove(this._object3D);
      this._parent = undefined;
    }
  }

  get object3D() {
    return this._object3D;
  }

  set object3D(object3D) {
    this._object3D = object3D;
  }

  willDestroy() {
    this.args.scene.remove(this.mesh);
  }
}
