import Component from '@glimmer/component';
import THREE from 'three';

export default class ThreeMeshComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    let { geometry, material, rotation, scene } = args;

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.set(...rotation);

    scene.add(this.mesh);
  }

  willDestroy() {
    this.args.scene.remove(this.mesh);
  }

}
