import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import qs from 'qs';
import {newRotations} from '../utils/utils';
import { tracked as pTracked, TrackedArray } from 'tracked-built-ins';

export default class AppStateService extends Service {
  @tracked count = 500;

  // @pTracked rotations = [];
  @tracked rotations = [];

  constructor() {
    super(...arguments);

    let query = window.location.href.split('?')[1];
    let parsed = qs.parse(query);

    if (parsed.amount) {
      let parsedInt = parseInt(parsed.amount, 10);

      if (parsedInt) {
        this.count = parsedInt;
      }
    }


    this.updateRotations();
  }

  updateCount(newCount) {
    this.count = newCount;
    this.updateRotations();
  }

  updateRotations() {
    this.rotations = newRotations(this.count);
  }
}
