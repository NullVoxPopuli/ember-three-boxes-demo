import { LifeCycleComponent } from 'ember-lifecycle-component';
import THREE from 'three';

const defaults = {
  fov: 75,
  near: 0.1,
  far: 1000,
  x: 0,
  y: 0,
  z: 0,
};

export default class ScenePerspectiveCameraComponent extends LifeCycleComponent {
  constructor(owner, args) {
    super(owner, args);

    let options = { ...defaults, ...args };
    let { x, y, z, fov, aspectRatio, near, far } = options;

    this.camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
    this.camera.position.set(x, y, z);

    args.setCamera(this.camera);
  }
}
