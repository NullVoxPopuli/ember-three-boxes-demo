import ObjectProxy from '../utils/object-proxy';
import THREE from 'three';

export default class SceneDirectionalLightComponent extends ObjectProxy {
  constructor(owner, args) {
    super(owner, args);
    let { x, y, z } = args;
    this.object3D = new THREE.DirectionalLight(0xffffff, 1);
    this.object3D.position.set(x, y, z).normalize();
    this.init();
  }

  didReceiveArgs() {
    let { position, parent } = this.args;
    if (this._object3D && position) {
      this._object3D.position.set(position.x, position.y, position.z).normalize();
    }

    if (parent !== this._parent) {
      this.remove(this._parent, this._object3D);
      this.add(parent, this._object3D);
      this._parent = parent;
    }
  }
}
