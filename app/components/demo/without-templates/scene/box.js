import Component from '@glimmer/component';
import { effect } from 'ember-tracked-effects-placeholder';
import { registerDestructor } from '@ember/destroyable';

import THREE from 'three';

let geometry = new THREE.BoxGeometry(2, 2, 2);
let material = new THREE.MeshNormalMaterial();

export default class Box extends Component {
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

  @effect box = () => {
    let { rotation } = this.args;
    let r = rotation.r;

    if (!this.mesh) return;
    this.mesh.rotation.set(r.x, r.y, r.z);
  };
}
