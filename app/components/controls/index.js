import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Controls extends Component {
  @service appState;

  @action
  updateCount(newCount) {
    this.appState.updateCount(newCount);

    if (this.args.onUpdate) {
      this.args.onUpdate(newCount);
    }
  }
}
