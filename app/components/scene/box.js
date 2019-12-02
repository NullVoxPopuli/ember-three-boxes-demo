import Component from '@glimmer/component';

import THREE from 'three';

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

  willDestroy() {
    this.args.scene.remove(this.mesh);
  }
}
