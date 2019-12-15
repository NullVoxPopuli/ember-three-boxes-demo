import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { throttle } from 'throttle-debounce';

import { avg, newRotations } from 'ember-three-boxes-demo/utils/utils';

export default class DemoComponent extends Component {
  @service appState;

  frames = Array(10).fill(0); // for smoothing out FPS counter
  frame = undefined; // for tracking the current frame

  @tracked fps = 0;

  get aspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  @action
  animate(updateCanvas) {
    let last = Date.now();
    let boundCallback;

    let fpsUpdate = () => {
      this.fps = Math.round(avg(this.frames));
    }
    let updateFps = throttle(120, fpsUpdate);

    function loop() {
      let rotations = this.appState.rotations;
      this.frame = requestAnimationFrame(boundCallback);

      for (let i = 0; i < rotations.length; i++) {

        // this.rotations[i].x += 0.01;
        // this.rotations[i].y += 0.01;
        // this.rotations[i].z += 0.01;
        let rotation = rotations[i];
        rotation.r = {
          x: rotation.r.x + 0.01,
          y: rotation.r.y + 0.01,
          z: rotation.r.z + 0.01,
        }
      }

      updateCanvas();

      const now = Date.now();
      const elapsed = now - last;

      this.frames.shift();
      this.frames.push(1000 / elapsed);
      updateFps();

      last = now;
    }

    boundCallback = loop.bind(this);
    this.frame = requestAnimationFrame(boundCallback);
  }

  willDestroy() {
    cancelAnimationFrame(this.frame);
  }
}
