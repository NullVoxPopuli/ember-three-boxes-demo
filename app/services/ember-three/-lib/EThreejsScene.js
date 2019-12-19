import { RequestAnimationFrame } from './RequestAnimationFrame';
import THREE from 'three';

const DEFAULT_RENDERER_PARAMS = {
  alpha: false,
  antialias: true,
  clearColor: 0xFFFFFF,
};

export default class EThreeJSScene {
  scene = undefined;
  renderer = undefined;
  raf = undefined;
  frameTime = 16;
  frameAcc = 0;
  stats = undefined;
  preRenderCallback = {
    fnc: undefined,
    scope: undefined,
  };


  constructor({ rendererParams = {} } = {}) {
    let rendererProps = { ...rendererParams, ... DEFAULT_RENDERER_PARAMS };

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer(rendererProps);
    this.renderer.setClearColor(rendererProps.clearColor);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.raf = new RequestAnimationFrame(this.render, this);
  }

  start() {
    this.raf.start();
  }

  stop() {
    this.raf.stop();
  }

  addPreRenderCallback(fnc, scope) {
    this.preRenderCallback = {
      fnc,
      scope,
    }
  }

  setCamera(camera) {
    this.camera = camera;
  }

  setStats(stats) {
    this.stats = stats;
  }

  render(dt) {
    if (this.stats) {
      this.stats.begin();
    }
    this.frameAcc += dt;
    if (this.frameAcc > this.frameTime) {
      if (this.preRenderCallback.fnc) {
        this.preRenderCallback.fnc.apply(this.preRenderCallback.scope);
      }
      this.frameAcc = 0;
      this.renderer.render(this.scene, this.camera);
    }

    if (this.stats) {
      this.stats.end();
    }
  }

  dispose() {
    this.stop();
    this.scene.dispose();
    this.renderer.dispose();
    this.preRenderCallback = undefined;
  }

  get domElement() {
    return this.renderer.domElement;
  }
}
