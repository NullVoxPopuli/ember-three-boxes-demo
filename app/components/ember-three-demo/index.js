import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export const DEFAULT_DEMO = 'lines';

export default class DemoComponent extends Component {
  @tracked selectedDemo = DEFAULT_DEMO;

  @action
  onSelectDemo(event) {
    let { value } = event.target;
    this.selectedDemo = value;
  }
}
