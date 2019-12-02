import Component from '@glimmer/component';
import { action } from '@ember/object';

import THREE from 'three';
import {random} from '../../utils/utils';

let geometry = new THREE.BoxGeometry( 2, 2, 2 );
let material = new THREE.MeshNormalMaterial();

export default class SceneBoxComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.set(...args.rotation);
    this.mesh.position.set(0, 0, 0);

    args.scene.add(this.mesh);
  }

  @action
  updateRotation(rotation) {
    console.log(rotation);
    this.mesh.rotation.set(...rotation);
  }

  willDestroy() {
    this.args.scene.remove(this.mesh);
  }
}
