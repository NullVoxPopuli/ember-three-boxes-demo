import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

import THREE from 'three';

function avg(arr) {
  return arr.reduce((total, num) => total + num, 0) / arr.length;
}

function random() {
  return Math.random() * 360;
}

function newBoxes(num = 20) {
  return Array(num).fill().map(() => [random(), random(), random()]);
}

let frame;

let geometry = new THREE.BoxGeometry( 2, 2, 2 );
let material = new THREE.MeshNormalMaterial();


export default class DemoComponent extends Component {
  cube = geometry;
  material = material;

  @tracked count;

  @tracked boxes = newBoxes();
  @tracked frames = Array(60).fill(0); // for smoothing out FPS counter

  get fps() {
    return Math.round(avg(this.frames));
  }

  get aspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  @action
  updateCount(newCount) {
    this.count = newCount;
    this.boxes = newBoxes(this.count);
  }

  @action
  animate() {
    let last = Date.now();
    let boundCallback;

    function loop() {
      frame = requestAnimationFrame(boundCallback);

      this.boxes.forEach(box => {
        box[0] += 0.5;
        box[1] += 0.5;
        box[2] += 0.5;
      });

      this.boxes = this.boxes; // tell auto-tracking the array has changed

      const now = Date.now();
      const elapsed = now - last;

      this.frames.shift();
      this.frames[frames.length] = 1000 / elapsed;
      this.frames = this.frames;
      last = now;
    }

    boundCallback = loop.bind(this);
    frame = requestAnimationFrame(boundCallback);
  }

  willDestroy() {
    cancelAnimationFrame(frame);
  }
}
