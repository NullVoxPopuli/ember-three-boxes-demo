import THREE from 'three';
import ObjectProxy from '../utils/object-proxy';

export default class SceneMeshComponent extends ObjectProxy {
  constructor(owner, args) {
    super(owner, args);
    let { geometry, material } = this.args;
    this.object3D = new THREE.LineSegments(geometry, material);
    this.init();
  }
}
