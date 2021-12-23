// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import THREE from 'three';

const defaults = {
  fov: 75,
  near: 0.1,
  far: 1000,
  x: 0,
  y: 0,
  z: 0,
};

export default class ScenePerspectiveCameraComponent extends Component {
  tagName = '';

  init(...args) {
    super.init(...args);

    let options = { ...defaults, ...this };
    let { x, y, z, fov, aspectRatio, near, far } = options;

    this.camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
    this.camera.position.set(x, y, z);

    this.setCamera(this.camera);
  }
}
