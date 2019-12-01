import Component from '@glimmer/component';
import THREE from 'three';

export default class ThreePerspectiveCameraComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    let { fov, aspectRatio, near, far, register } = args;
    this.camera = new THREE.PerspectiveCamera(
      fov, aspectRatio, near, far
    );

    this.camera.position.set(0, 0, 6);

    register(this.camera);
  }
}
