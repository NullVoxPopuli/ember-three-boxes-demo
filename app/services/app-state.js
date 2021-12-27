import Service, { inject as service } from '@ember/service';
import { cached } from '@glimmer/tracking';
import { newRotations } from '../utils/utils';
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
