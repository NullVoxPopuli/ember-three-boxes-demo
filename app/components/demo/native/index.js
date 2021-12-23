import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

import { WebGlHelper } from './web-gl-helper';

function random() {
  return Math.random() * 360;
}

function newRotations(num = 20) {
  return Array(num)
    .fill()
    .map(() => [random(), random(), random()]);
}

export default class DemoComponent extends Component {
  @service router;
  @service appState;
  @service stats;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      this.onUpdate();
    });
  }

  @action
  onUpdate() {
    this.renderer.syncBoxes(newRotations(this.appState.count));
  }

  @action
  setup(element) {
    this.renderer = new WebGlHelper({
      container: element,
      stats: this.stats,
    });

    this.renderer.animate();
    this.onUpdate();
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.renderer.willDestroy();
  }
}
