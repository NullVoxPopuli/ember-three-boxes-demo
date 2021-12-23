import Component from '@glimmer/component';
import { action } from '@ember/object';

import THREE from 'three';

export default class SceneComponent extends Component {
  element = undefined;

  constructor(owner, args) {
    super(owner, args);

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  @action
  setElement(element) {
    this.element = element;
    this.element.appendChild(this.renderer.domElement);

    if (this.camera) {
      this.args.onInit(this.render);
    }
  }

  @action
  setCamera(camera) {
    this.camera = camera;

    if (this.element) {
      this.args.onInit(this.render);
    }
  }

  @action
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.renderer.renderLists.dispose();
    this.renderer.dispose();
  }
}
