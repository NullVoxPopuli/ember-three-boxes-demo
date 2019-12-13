import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AppStateService extends Service {
  @tracked count = 20;
}
