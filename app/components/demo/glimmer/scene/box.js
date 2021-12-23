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

    let r = args.rotation.r;
    this.mesh.rotation.set(r.x, r.y, r.z);
    this.mesh.position.set(0, 0, 0);

    args.scene.add(this.mesh);

    registerDestructor(this, () => {
      args.scene.remove(this.mesh);
    });
  }

  @action
  updateRotation(rotation) {
    let r = rotation.r;
    this.mesh.rotation.set(r.x, r.y, r.z);
  }
}

setComponentTemplate(
  hbs`
 {{ (this.updateRotation @rotation) }}
`,
  SceneBoxComponent
);
