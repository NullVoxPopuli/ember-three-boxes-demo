import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { throttle } from 'throttle-debounce';

import { WebGlHelper } from './web-gl-helper';

function random() {
  return Math.random() * 360;
}

function newRotations(num = 20) {
  return Array(num).fill().map(() => [random(), random(), random()]);
}

export default class DemoComponent extends Component {
  @service appState;

  @tracked fps = 0;

  @action
  onUpdate() {
    this.renderer.syncBoxes(newRotations(this.appState.count));
  }

  @action
  setup(element) {
    this.renderer = new WebGlHelper({
      container: element,
      onFPSUpdate: throttle(120, (fps) => this.fps = Math.round(fps)),
    });

    this.renderer.animate();
    this.onUpdate();
  }
}

