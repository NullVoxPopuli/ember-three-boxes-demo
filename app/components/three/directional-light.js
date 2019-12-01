import Component from '@glimmer/component';
import THREE from 'three';

export default class ThreeDirectionalLightComponent extends Component {

  constructor(owner, args) {
    super(owner, args);

    let { register } = args;

    this.light = new THREE.DirectionalLight(0xffffff, 1);
		this.light.position.set( -5, 0, -10 ).normalize();

    register(this.light);
  }
}
