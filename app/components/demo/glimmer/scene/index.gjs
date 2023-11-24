import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { registerDestructor } from '@ember/destroyable';
import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { hash } from '@ember/helper';

import THREE from 'three';
import DirectionalLight from './directional-light';
import PerspectiveCamera from './perspective-camera';
import Box from './box';

  const setElement = modifier((element, [context]) => {
    context.element = element;
    context.element.appendChild(context.renderer.domElement);

    if (context.camera) {
      context.args.onInit(context.render);
    }
  });

export default class SceneComponent extends Component {
  <template>
    <div {{setElement this}}></div>

    {{yield
      (hash
        DirectionalLight=(component DirectionalLight scene=this.scene)
        PerspectiveCamera=(component PerspectiveCamera
          scene=this.scene
          setCamera=this.setCamera
        )
        Box=(component Box scene=this.scene)
      )
    }}
  </template>

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

  setCamera = (camera)  => {
    this.camera = camera;

    if (this.element) {
      this.args.onInit(this.render);
    }
  }

  render = () => {
    this.renderer.render(this.scene, this.camera);
  }
}
