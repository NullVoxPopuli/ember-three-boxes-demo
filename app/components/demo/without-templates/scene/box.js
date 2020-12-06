import Component from '@glimmer/component';
import { use, Resource } from 'ember-could-get-used-to-this';

import THREE from 'three';

const noop = (...args) => args;

export default class Box extends Component {
  constructor(...e) {
    super(...e);

    // box needs to be accessed, or *something* assumes box isn't used
    // and removes it from the class?
    noop(this.box, this.args, this.args.rotation);
  }

  // TODO: no way to pass named args?
  @use box = new ReactiveBox(() => {
    let { scene, rotation } = this.args;

    return [scene, rotation.r];
  });
}

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshNormalMaterial();


// Maybe this needs to be an effect?
// a resource doesn't seem to update when I want.
//
// the box spins when I click on the above component in ember inspector.
// the box stops spinning if I click on args.
// or anything else
class ReactiveBox extends Resource {
  get rotation() {
    return this.args.positional[1];
  }

  get scene() {
    return this.args.positional[0];
  }

  setup() {
    let { x, y, z } = this.rotation;
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.set(x, y, z);
    this.mesh.position.set(0, 0, 0);

    this.scene.add(this.mesh);
  }

  update() {
    let { x, y, z } = this.rotation;

    this.mesh.rotation.set(x, y, z);
    this.mesh.position.set(0, 0, 0);
  }

  teardown() {
    this.scene.remove(this.mesh);
  }
}
