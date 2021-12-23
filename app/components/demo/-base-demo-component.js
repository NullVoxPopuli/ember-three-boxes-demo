import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { Optimized } from '../../utils/utils';

const ROTATION_SPEED = 0.01;

export default class DemoComponent extends Component {
  @service appState;
  @service stats;

  frame = undefined; // for tracking the current frame

  @tracked fps = 0;

  get aspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  @action
  animate(updateCanvas) {
    let boundCallback;

    function loop() {
      this.stats.begin();
      let rotations = this.appState.rotations;
      this.frame = requestAnimationFrame(boundCallback);

      for (let i = 0; i < rotations.length; i++) {
        let rotation = rotations[i];

        if (rotation instanceof Optimized) {
          // Single tracked property
          rotation.r = {
            x: rotation.r.x + ROTATION_SPEED,
            y: rotation.r.y + ROTATION_SPEED,
            z: rotation.r.z + ROTATION_SPEED,
          };
        } else {
          // 3 Tracked Properties
          rotation.x += ROTATION_SPEED;
          rotation.y += ROTATION_SPEED;
          rotation.z += ROTATION_SPEED;
        }
      }

      updateCanvas();
      this.stats.end();
    }

    boundCallback = loop.bind(this);
    this.frame = requestAnimationFrame(boundCallback);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    cancelAnimationFrame(this.frame);
  }
}
