// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import THREE from 'three';

export default class SceneDirectionalLightComponent extends Component {
  tagName = '';

  init(...args) {
    super.init(...args);

    let { x, y, z } = this;

    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(x, y, z).normalize();

    this.scene.add(this.light);
  }
}
