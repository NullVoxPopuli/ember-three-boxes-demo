import THREE from 'three';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import Stats from 'stats.js';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DemoComponent extends Component {
  @service appState;
  @service('ember-three/scene-manager') sceneManager;

  @tracked containerRotation = new THREE.Euler();

  counter = 0;
  cameraPosition = new THREE.Vector3(0, 0, 6.2);
  lightPosition = new THREE.Vector3(-5, 0, 10);
  geometry = new THREE.BoxGeometry(2, 2, 2);
  material = new THREE.MeshNormalMaterial();
  sceneId = 'ember-threejs-demo';
  state = undefined;

  constructor() {
    super(...arguments);

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    // TODO: fix this is not ideal, but for now it gets us a single RAF loop
    let scene = this.sceneManager.get(this.sceneId);
    scene.addRafCallback(this.render, this);
    scene.setStats(this.stats);
  }

  render() {
    let { objectProperties } = this.appState;

    this.containerRotation.y += 0.045;
    this.containerRotation = this.containerRotation;

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
      property.s.x = property.s.y = property.s.z = scalar;

      // let glimmer know a tracked object has changed (to avoid creating new objects):
      property.s = property.s;
      property.p = property.p;
      property.r = property.r;
    }
    this.counter += 0.05;
  }

  @action
  destroyElement() {
    document.body.removeChild(this.stats.dom);
  }
}
