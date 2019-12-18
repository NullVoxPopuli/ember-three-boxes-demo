import { LifeCycleComponent } from 'ember-lifecycle-component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SceneComponent extends LifeCycleComponent {
  element = undefined;
  eThreeJsScene = undefined;

  @service('e-threejs/scene')
  sceneService;

  constructor(owner, args) {
    super(owner, args);
    this.eThreeJsScene = this.sceneService.get(this.args.id);
  }

  @action
  insertElement(element) {
    this.element = element;
    this.element.appendChild(this.eThreeJsScene.domElement);
    this.eThreeJsScene.start();
  }

  @action
  setCamera(camera) {
    this.eThreeJsScene.setCamera(camera);
  }

  willDestroy() {
    this.eThreeJsScene.dispose();
  }
}
