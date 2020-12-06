import { tracked } from "@glimmer/tracking";
import { TrackedObject, TrackedArray } from "tracked-built-ins";

export function random() {
  return Math.random() * 360;
}

export class Optimized {
  // this single tracked property is used so that we can
  // minimize object creation / destruction when
  // updating frames.
  // If we were to only work with x/y/z directly,
  // we'd need to pass each of those as args separately in order for
  // modifier-based updates to be seen
  @tracked r = { x: 0, y: 0, z: 0 };

  constructor(defaults) {
    if (defaults) this.r = defaults;
  }
}

export class Rotation {
  @tracked x = 0;
  @tracked y = 0;
  @tracked z = 0;

  constructor(defaults) {
    if (defaults) this.r = defaults;
  }
}

export function newRotations(num = 20) {
  let values = Array(num)
    .fill()
    .map(() => {
      let x = random();
      let y = random();
      let z = random();

      return new Optimized({ x, y, z });
      // return new TrackedObject({ x, y, z });
      // return new Rotation({ x, y, z });
    });

  return values;
}
