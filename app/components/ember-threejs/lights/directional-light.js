import EmberObject3DComponent from '../core/ember-object-3d';
import THREE from 'three';

export default class SceneDirectionalLightComponent extends EmberObject3DComponent {
  constructor(owner, args) {
    super(owner, args);
    let { x, y, z } = args;
    this.object3D = new THREE.DirectionalLight(0xffffff, 1);
    this.object3D.position.set(x, y, z).normalize();
    this.init();
  }
}
