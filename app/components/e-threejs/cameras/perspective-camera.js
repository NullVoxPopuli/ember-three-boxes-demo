import THREE from 'three';
import { inject as service } from '@ember/service';
import EmberObject3DComponent from '../core/ember-object-3d';

const defaults = {
  fov: 75,
  near: 0.1,
  far: 1000,
  x: 0,
  y: 0,
  z: 0,
};

export default class ScenePerspectiveCameraComponent extends EmberObject3DComponent {

  @service('e-threejs/scene')
  sceneService;

  constructor(owner, args) {
    super(owner, args);

    let options = { ...defaults, ...args };
    let { fov, aspectRatio, near, far } = options;

    this.object3D = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

    let scene = this.sceneService.getDefaultScene();
    scene.setCamera(this.object3D);

    this.init();
  }
}
