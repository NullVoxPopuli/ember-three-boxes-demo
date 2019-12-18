import THREE from 'three';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { throttle } from 'throttle-debounce';
import { avg } from 'ember-three-boxes-demo/utils/utils';

export default class DemoComponent extends Component {

  @service appState;

  geometry = new THREE.BoxGeometry( 2, 2, 2 );
  material = new THREE.MeshNormalMaterial();
  frames = Array(10).fill(0); // for smoothing out FPS counter
  frame = undefined; // for tracking the current frame
  counter = 0;
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
      let { objectProperties }  = this.appState;
      this.frame = requestAnimationFrame(boundCallback);

      let radius = 0.085;
      for (let i = 0; i < objectProperties.length; i++) {
        let property = objectProperties[i];
        property.r.x = property.r.x + 0.01;
        property.r.y = property.r.y + 0.01;
        property.r.z = property.r.z + 0.01;

        property.p.x = property.p.x + Math.sin(this.counter + property.r.x) * radius;
        property.p.y = property.p.y + Math.cos(this.counter + property.r.y) * radius;
        property.p.z = property.p.z + Math.sin(this.counter + property.r.z) * radius;

        let scalar = Math.cos(this.counter * 2);
        property.s.x =  property.s.y =  property.s.z = scalar;

        // let glimmer know a tracked object has changed (to avoid creating new objects):
        property.s = property.s;
        property.p = property.p;
        property.r = property.r;

      }

      updateCanvas();

      const now = Date.now();
      const elapsed = now - last;

      this.frames.shift();
      this.frames.push(1000 / elapsed);
      updateFps();

      last = now;

      this.counter += 0.05;
    }

    boundCallback = loop.bind(this);
    this.frame = requestAnimationFrame(boundCallback);
  }

  willDestroy() {
    cancelAnimationFrame(this.frame);
  }
}
