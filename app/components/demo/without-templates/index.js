import { default as Demo } from '../-base-demo-component';
import THREE from 'three';
export default class CustomComponents extends Demo {
  geometry = new THREE.BoxGeometry( 2, 2, 2 );
  material = new THREE.MeshNormalMaterial();
}

