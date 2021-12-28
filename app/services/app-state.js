import Service, { inject as service } from '@ember/service';
import { cached } from '@glimmer/tracking';
import { deepTracked } from 'ember-deep-tracked';

const DEFAULT_COUNT = 2;

export default class AppStateService extends Service {
  @service router;

  @cached
  get rotations() {
    return deepTracked(newRotations(this.count));
  }

  get count() {
    let qps = this.router.currentRoute.queryParams;
    let { n } = qps || {};

    if (n) {
      let parsedInt = parseInt(n, 10);

      return parsedInt || DEFAULT_COUNT;
    }

    return DEFAULT_COUNT;
  }
}

function random() {
  return Math.random() * 360;
}

function newRotations(num = 20) {
  return (
    Array(num)
      .fill()
      // Only arrays
      // .map(() => [random(), random(), random()])
      // Maybe more meaningful than just arrays
      .map(() => ({ x: random(), y: random(), z: random() }))
  );
}
