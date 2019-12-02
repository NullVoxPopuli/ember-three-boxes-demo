import Component from '@glimmer/component';
import { action } from '@ember/object';

import THREE from 'three';

let geometry = new THREE.BoxGeometry( 2, 2, 2 );
let material = new THREE.MeshNormalMaterial();

export default class SceneBoxComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    this.mesh = new THREE.Mesh(geometry, material);
    this.updateRotation(args.rotation);
    this.mesh.position.set(0, 0, 0);

    args.scene.add(this.mesh);
  }

  @action
  updateRotation({ x, y, z }) {
    console.log('update --- this should be getting invoked wildly');
    this.mesh.rotation.set(x, y, z);
  }

  willDestroy() {
    this.args.scene.remove(this.mesh);
  }
}
