import Component from 'ember-three-boxes-demo/custom';

import THREE from 'three';

let geometry = new THREE.BoxGeometry( 2, 2, 2 );
let material = new THREE.MeshNormalMaterial();

export default class SceneBoxComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    this.mesh = new THREE.Mesh(geometry, material);

    let { rotation: r } = args;
    this.updateRotation([r.x, r.y, r.z]);
    this.mesh.position.set(0, 0, 0);

    args.scene.add(this.mesh);
  }

  didUpdate() {
    this.mesh.rotation.set(...this.args.rotation);
  }

  willDestroy() {
    this.args.scene.remove(this.mesh);
  }
}
