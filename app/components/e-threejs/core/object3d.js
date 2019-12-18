import THREE from 'three';
import ObjectProxy from '../utils/object-proxy';

export default class SceneMeshComponent extends ObjectProxy {
  constructor(owner, args) {
    super(owner, args);
    this.object3D = new THREE.Object3D();
    this.init();
  }
}
