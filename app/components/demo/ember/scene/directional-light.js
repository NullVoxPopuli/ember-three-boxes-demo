// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import classic from 'ember-classic-decorator';
import THREE from 'three';

@classic
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
