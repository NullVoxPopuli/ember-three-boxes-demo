import { LifeCycleComponent } from 'ember-lifecycle-component';

import THREE from 'three';

let geometry = new THREE.BoxGeometry( 2, 2, 2 );
let material = new THREE.MeshNormalMaterial();

export default class SceneBoxComponent extends LifeCycleComponent {
  constructor(owner, args) {
    super(owner, args);

    this.mesh = new THREE.Mesh(geometry, material);

    let { rx, ry, rz } = this.args;
    this.didUpdate([rx, ry, rz]);
    this.mesh.position.set(0, 0, 0);

    args.scene.add(this.mesh);
  }

  didUpdate() {
    let { rx, ry, rz } = this.args;
    this.mesh.rotation.set(rx, ry, rz);
  }


  willDestroy() {
    this.args.scene.remove(this.mesh);
  }
}
