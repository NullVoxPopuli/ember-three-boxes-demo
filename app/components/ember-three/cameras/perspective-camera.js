import THREE from 'three';
import { inject as service } from '@ember/service';
import ObjectProxy from '../utils/object-proxy';

const defaults = {
  fov: 75,
  near: 0.1,
  far: 1000,
};

export default class ScenePerspectiveCameraComponent extends ObjectProxy {

  @service('ember-three/scene-manager')
  sceneManager;

  constructor(owner, args) {
    super(owner, args);

    let options = { ...defaults, ...args };
    let { fov, aspectRatio, near, far } = options;
    let scene = this.sceneManager.getDefaultScene();

    this.object3D = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
    scene.setCamera(this.object3D);
    this.init();
  }
}
