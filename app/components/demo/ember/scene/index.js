// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import { action } from '@ember/object';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
import { registerDestructor } from '@ember/destroyable';
import { modifier } from 'ember-could-get-used-to-this';

import THREE from 'three';

/**
 * NOTE: the following are built-in APIs and collide with common THREE
 *       property names:
 *       - render
 *       - renderer
 *
 *       This is not an issue for @glimmer/component, only @ember/component
 *
 */
export default class SceneComponent extends Component {
  tagName = '';
  element = undefined;

  init(owner, args) {
    super.init(owner, args);

    this.scene = new THREE.Scene();
    this.threeRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
    });
    this.threeRenderer.setSize(window.innerWidth, window.innerHeight);

    registerDestructor(this, () => {
      this.threeRenderer.renderLists.dispose();
      this.threeRenderer.dispose();
    });
  }

  setElement = modifier((element) => {
    this.element = element;
    this.element.appendChild(this.threeRenderer.domElement);

    if (this.camera) {
      this.onInit(this.renderScene);
    }
  });

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
}

setComponentTemplate(
  hbs`
<div {{this.setElement}}></div>

{{yield
  (hash
    DirectionalLight=(component 'demo/ember/scene/directional-light' scene=this.scene)
    PerspectiveCamera=(component 'demo/ember/scene/perspective-camera'
      scene=this.scene
      setCamera=this.setCamera
    )
    Box=(component 'demo/ember/scene/box' scene=this.scene render=this.render)
  )
}}
  `,
  SceneComponent
);
