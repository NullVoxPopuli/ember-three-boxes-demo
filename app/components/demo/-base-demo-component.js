import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { registerDestructor } from '@ember/destroyable';

const ROTATION_SPEED = 0.01;

export default class DemoComponent extends Component {
  @service appState;
  @service stats;

  frame = undefined; // for tracking the current frame

  @tracked fps = 0;

  constructor(...args) {
    super(...args);
    registerDestructor(this, () => {
      cancelAnimationFrame(this.frame);
    });
  }

  get aspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  @action
  animate(updateCanvas) {
    // we're already animating
    if (this.frame) return;

    let boundCallback;

    function loop() {
      this.stats.begin();
      let rotations = this.appState.rotations;
      this.frame = requestAnimationFrame(boundCallback);

      for (let i = 0; i < rotations.length; i++) {
        let rotation = rotations[i];

        rotation.x += ROTATION_SPEED;
        rotation.y += ROTATION_SPEED;
        rotation.z += ROTATION_SPEED;
      }

      updateCanvas();
      this.stats.end();
    }

    boundCallback = loop.bind(this);
    this.frame = requestAnimationFrame(boundCallback);
  }
}
