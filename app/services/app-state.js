import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import qs from 'qs';

export default class AppStateService extends Service {
  @tracked count = 20;

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
  }

  updateCount(newCount) {
    this.count = newCount;
  }
}
