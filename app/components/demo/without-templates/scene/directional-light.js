import Component from '../custom';
import THREE from 'three';

export default class SceneDirectionalLightComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    let { x, y, z } = args;

    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(x, y, z).normalize();

    args.scene.add(this.light);
  }
}
