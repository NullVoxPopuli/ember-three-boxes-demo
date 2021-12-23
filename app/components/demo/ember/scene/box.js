// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import { action } from '@ember/object';
import classic from 'ember-classic-decorator';

import THREE from 'three';

let geometry = new THREE.BoxGeometry(2, 2, 2);
let material = new THREE.MeshNormalMaterial();

@classic
export default class SceneBoxComponent extends Component {
  tagName = '';

  init(...args) {
    super.init(...args);

    this.mesh = new THREE.Mesh(geometry, material);

    let { rotation: r } = this;
    this.updateRotation([r.x, r.y, r.z]);
    this.mesh.position.set(0, 0, 0);

    this.scene.add(this.mesh);
  }

  // eslint-disable-next-line ember/no-component-lifecycle-hooks
  didReceiveAttrs() {
    super.didReceiveAttrs();

    let { rotation: r } = this;
    this.updateRotation([r.x, r.y, r.z]);
  }

  @action
  updateRotation(rotation) {
    this.mesh.rotation.set(...rotation);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.scene.remove(this.mesh);
  }
}
