import { tracked } from '@glimmer/tracking';
import THREE from 'three';

export function avg(arr) {
  return arr.reduce((total, num) => total + num, 0) / arr.length;
}

export function random() {
  return Math.random() * 360;
}

class ObjectProperties {
  @tracked r = new THREE.Euler();
  @tracked p = new THREE.Vector3();
  @tracked s = new THREE.Vector3();
}

export function newProperties(num = 20) {
  return Array(num)
    .fill()
    .map(() => {
      let properties = new ObjectProperties();

      properties.r.x = random();
      properties.r.y = random();
      properties.r.z = random();

      let scalar = Math.random();
      properties.s.x = scalar;
      properties.s.y = scalar;
      properties.s.z = scalar;

      return properties;
    });
}
