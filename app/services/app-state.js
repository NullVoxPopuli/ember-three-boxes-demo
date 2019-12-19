import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import qs from 'qs';
import { newProperties } from '../utils/utils';

export default class AppStateService extends Service {
  @tracked count = 100;
  @tracked objectProperties = [];

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

    this.updateProperties();
  }

  updateCount(newCount) {
    this.count = newCount;
    this.updateProperties();
  }

  updateProperties() {
    this.objectProperties = newProperties(this.count);
  }
}
