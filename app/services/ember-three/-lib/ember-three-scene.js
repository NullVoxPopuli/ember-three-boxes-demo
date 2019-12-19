import { RequestAnimationFrame } from './request-animation-frame';
import THREE from 'three';

const DEFAULT_RENDERER_PARAMS = {
  alpha: false,
  antialias: true,
  clearColor: 0xFFFFFF,
};

export default class EmberThreeScene {
  frameAcc = 0;
  frameTime = 16;
  preRenderCallback = {
    fnc: undefined,
    scope: undefined,
  };
  raf = undefined;
  renderer = undefined;
  scene = undefined;
  stats = undefined;
  parentElement = undefined;

  constructor({ rendererParams = {} } = {}) {
    let rendererProps = { ...rendererParams, ... DEFAULT_RENDERER_PARAMS };

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer(rendererProps);
    this.renderer.setClearColor(rendererProps.clearColor);
    this.resizeEventDelegate = () => this.resize();
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
    this.resize();
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
    window.removeEventListener('resize', this.resizeEventDelegate);
    this.parentElement.removeChild(this.domElement);
    this.stop();
    this.scene.dispose();
    this.renderer.dispose();
    this.preRenderCallback = undefined;
  }

  resize() {
    if (!this.parentElement) {
      return;
    }

    this.renderer.setSize(this.parentWidth, this.parentHeight);
    if (this.camera) {
      this.camera.aspect = this.parentWidth / this.parentHeight;
      this.camera.updateProjectionMatrix();
    }
  }

  onInsertElement(parentElement) {
    this.parentElement = parentElement;
    this.parentElement.appendChild(this.domElement);
    this.resize();

    window.removeEventListener('resize', this.resizeEventDelegate);
    window.addEventListener('resize', this.resizeEventDelegate);
  }

  get domElement() {
    return this.renderer.domElement;
  }

  get parentHeight() {
    return this.parentElement.offsetHeight;
  }
  get parentWidth() {
    return this.parentElement.offsetWidth;
  }
}
