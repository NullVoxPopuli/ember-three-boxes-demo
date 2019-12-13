import Component from '@glimmer/component';
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
  @tracked count;

  @tracked rotations = newRotations();
  @tracked fps = 0;

  @action
  updateCount(newCount) {
    this.count = newCount;
    this.rotations = newRotations(this.count);

    this.renderer.syncBoxes(this.rotations);
  }

  @action
  setup(element) {
    this.renderer = new WebGlHelper({
      container: element,
      onFPSUpdate: throttle(120, (fps) => this.fps = Math.ceil(fps)),
    });

    this.renderer.animate();
  }
}

