import { LifeCycleComponent } from 'ember-lifecycle-component';
import THREE from 'three';

export default class SceneDirectionalLightComponent extends LifeCycleComponent {
  constructor(owner, args) {
    super(owner, args);

    let { x, y, z } = args;

    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(x, y, z).normalize();

    args.scene.add(this.light);
  }
}
