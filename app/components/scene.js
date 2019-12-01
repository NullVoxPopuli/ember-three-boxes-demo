import Component from '@glimmer/component';
import { action } from '@ember/object';
import THREE from 'three';

export default class SceneComponent extends Component {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });

  constructor(owner, args) {
    super(owner, args);


    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  @action
  addCamera(camera) {
    this.camera = camera;
  }

  @action
  add(item) {
    this.scene.add(item);
    this.render();
  }

  @action
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  @action
  setContainer(element) {
    this.container = element;
    this.container.appendChild(this.renderer.domElement);
  }
}
