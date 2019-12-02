import { TrackedArray } from 'tracked-built-ins';
import { tracked } from '@glimmer/tracking';

export function avg(arr) {
  return arr.reduce((total, num) => total + num, 0) / arr.length;
}

export function random() {
  return Math.random() * 360;
}

class Rotation {
  @tracked x = 0;
  @tracked y = 0;
  @tracked z = 0;
}

export function newRotations(num = 20) {
  return Array(num).fill().map(() => {
    let r = new Rotation();
    r.x = random();
    r.y = random();
    r.z = random();

    return r;
  });
}
