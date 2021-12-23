import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Controls extends Component {
  @service router;
  @service appState;

  @action
  updateCount(changeEvent) {
    let value = changeEvent.target.value;
    let newCount = parseInt(value);

    this.router.transitionTo({ queryParams: { n: newCount } });
  }
}
