import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
import { registerDestructor } from '@ember/destroyable';

import THREE from 'three';

let geometry = new THREE.BoxGeometry(2, 2, 2);
let material = new THREE.MeshNormalMaterial();

export default class SceneBoxComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 0, 0);
    this.updateRotation();

    args.scene.add(this.mesh);

    registerDestructor(this, () => {
      args.scene.remove(this.mesh);
    });
  }

  @action
  updateRotation() {
    // this.mesh.rotation.set(...this.args.rotation);
    this.mesh.rotation.set(...Object.values(this.args.rotation));
  }
}

setComponentTemplate(
  hbs`
 {{ (this.updateRotation) }}
`,
  SceneBoxComponent
);
