import THREE from 'three';

import { avg } from 'ember-three-boxes-demo/utils/utils';

// Static things that won't change
let geometry = new THREE.BoxGeometry( 2, 2, 2 );
let material = new THREE.MeshNormalMaterial();

export class WebGlHelper {
  frames = Array(5).fill(0); // for smoothing out FPS counter
  frame = undefined; // for tracking the current frame
  boxes = []; // references to all meshes

  scene = new THREE.Scene();
  light = new THREE.DirectionalLight(0xffffff, 1);
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer( { alpha: true, antialias: false } );

  constructor({ container, onFPSUpdate, }) {
    this.element = container;
    this.onFPSUpdate = onFPSUpdate;

    // fov, ratio, zNear, zFar
    this.camera.position.set(0, 0, 3.2);
		this.light.position.set( -5, 0, -10 ).normalize();
    this.scene.add(this.light);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.element.appendChild(this.renderer.domElement);

    this.animate = this.animate.bind(this);
  }

  syncBoxes(rotations) {
    let diff = this.boxes.length - rotations.length;
    let boxesHaveMore = diff > 0;
    let boxesHaveLess = diff < 0;
    let same = diff === 0;

    if (same) return;

    if (boxesHaveLess) {
      for (let i = 0; i < 0 - diff; i++) {
        let rotation = rotations[i];
        this.addBox(rotation);
      }
      return;
    }

    if (boxesHaveMore) {
      for (let i = 0; i < diff; i++) {
        let box = this.boxes.pop();
        this.scene.remove(box);
      }
      return;
    }
  }

  addBox(rotation) {
    let mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(...rotation);
    this.scene.add(mesh);
    this.boxes.push(mesh);
  }

  animate() {
    let last = Date.now();
    let boundCallback;

    function loop() {
      this.frame = requestAnimationFrame(boundCallback);

      for (let i = 0; i < this.boxes.length; i++) {
        let box = this.boxes[i];
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        box.rotation.z += 0.01;
      }

      this.renderer.render(this.scene, this.camera);

      const now = Date.now();
      const elapsed = now - last;

      this.frames.shift();
      this.frames.push(1000 / elapsed);
      this.onFPSUpdate(avg(this.frames));
      last = now;
    }

    boundCallback = loop.bind(this);
    this.frame = requestAnimationFrame(boundCallback);
  }

  willDestroy() {
    cancelAnimationFrame(this.frame);
  }
}
