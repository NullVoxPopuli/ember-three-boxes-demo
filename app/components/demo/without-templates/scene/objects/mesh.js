import { LifeCycleComponent } from 'ember-lifecycle-component';
import THREE from 'three';


export default class SceneMeshComponent extends LifeCycleComponent {

  constructor(owner, args) {
    super(owner, args);

    let { geometry, material, scene } = this.args;
    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);
    this.didReceiveArgs();
  }

  didReceiveArgs() {
    let { rotation, position } = this.args;
    if (rotation) {
      this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
    }

    if (position) {
      this.mesh.position.set(position.x, position.y, position.z);
    }
  }


  willDestroy() {
    this.args.scene.remove(this.mesh);
  }
}
