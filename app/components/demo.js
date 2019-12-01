import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DemoComponent extends Component {
  @tracked currentCount;
  @tracked fps;

  get roundedFPS() {
    return Math.round(this.fps);
  }

  @action
  updateCount(newCount) {
    this.currentCount = newCount;
  }

}
