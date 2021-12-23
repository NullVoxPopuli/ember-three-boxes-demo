import { LifeCycleComponent } from 'ember-lifecycle-component';
import { registerDestructor } from '@ember/destroyable';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
import { modifier } from 'ember-could-get-used-to-this';

import THREE from 'three';

export default class SceneComponent extends LifeCycleComponent {
  element = undefined;

  constructor(owner, args) {
    super(owner, args);

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    registerDestructor(this, () => {
      this.renderer.renderLists.dispose();
      this.renderer.dispose();
    });
  }

  setElement = modifier((element) => {
    this.element = element;
    this.element.appendChild(this.renderer.domElement);

    if (this.camera) {
      this.args.onInit(this.render);
    }
  });

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
}

setComponentTemplate(
  hbs`
    <div {{this.setElement}}></div>

    {{yield
      (hash
        DirectionalLight=(component 'demo/without-templates/scene/directional-light' scene=this.scene)
        PerspectiveCamera=(component 'demo/without-templates/scene/perspective-camera'
          scene=this.scene
          setCamera=this.setCamera
        )
        Box=(component 'demo/without-templates/scene/box' scene=this.scene)
        scene=this.scene
      )
    }}
  `,
  SceneComponent
);
