// eslint-disable-next-line ember/no-classic-components
import Component from "@ember/component";
import { action } from "@ember/object";
import classic from "ember-classic-decorator";

import THREE from "three";

/**
 * NOTE: the following are built-in APIs and collide with common THREE
 *       property names:
 *       - render
 *       - renderer
 *
 *       This is not an issue for @glimmer/component, only @ember/component
 *
 */
@classic
export default class SceneComponent extends Component {
  tagName = "";
  element = undefined;

  init(owner, args) {
    super.init(owner, args);

    this.scene = new THREE.Scene();
    this.threeRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
    });
    this.threeRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  @action
  setElement(element) {
    this.element = element;
    this.element.appendChild(this.threeRenderer.domElement);

    if (this.camera) {
      this.onInit(this.renderScene);
    }
  }

  @action
  setCamera(camera) {
    this.camera = camera;

    if (this.element) {
      this.onInit(this.renderScene);
    }
  }

  @action
  renderScene() {
    this.threeRenderer.render(this.scene, this.camera);
  }

  willDestroy() {
    this.threeRenderer.renderLists.dispose();
    this.threeRenderer.dispose();
    // this.scene.dispose();
  }
}
