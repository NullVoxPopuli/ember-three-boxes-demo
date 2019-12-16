import THREE from 'three';
import EmberObject3DComponent from '../core/ember-object-3d';


export default class SceneMeshComponent extends EmberObject3DComponent {
  constructor(owner, args) {
    super(owner, args);
    let { geometry, material } = this.args;
    this.object3D = new THREE.Mesh(geometry, material);
    this.init();
  }
}
