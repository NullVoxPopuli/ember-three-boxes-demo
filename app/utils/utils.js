import { tracked } from '@glimmer/tracking';

export function avg(arr) {
  return arr.reduce((total, num) => total + num, 0) / arr.length;
}

export function random() {
  return Math.random() * 360;
}

class Rotation {
  @tracked r = { x: 0, y: 0, z: 0 };
  // @tracked x = 0;
  // @tracked y = 0;
  // @tracked z = 0;
}

let cache;

function initialValuesFor(num) {
  if (!cache) cache = {};

  let existing = cache[num];

  if (existing) return existing;

  let array = Array(num).fill().map(() => new Rotation());

  for (let i = 0; i < array.length; i++) {
    array[i].r = {
      x: random(),
      y: random(),
      z: random(),
    };
    // array[i].x = random();
    // array[i].y = random();
    // array[i].z = random();
  }

  cache[num] = array;

  return array;
}

export function newRotations(num = 20) {
  return initialValuesFor(num);
}
