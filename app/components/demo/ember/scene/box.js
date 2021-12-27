// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import { action } from '@ember/object';
import { registerDestructor } from '@ember/destroyable';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

import THREE from 'three';

let geometry = new THREE.BoxGeometry(2, 2, 2);
let material = new THREE.MeshNormalMaterial();

export default class SceneBoxComponent extends Component {
  tagName = '';

  init(...args) {
    super.init(...args);

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 0, 0);
    this.updateRotation(this.rotation);

    this.scene.add(this.mesh);

    registerDestructor(this, () => {
      this.scene.remove(this.mesh);
    });
  }

  @action
  updateRotation(r) {
    this.mesh.rotation.set(r.x, r.y, r.z);
  }
}

setComponentTemplate(
  hbs`
 {{ (this.updateRotation @rotation) }}
`,
  SceneBoxComponent
);
