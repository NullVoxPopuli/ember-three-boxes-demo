import { LifeCycleComponent } from 'ember-lifecycle-component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SceneComponent extends LifeCycleComponent {
  element = undefined;
  eThreeJsScene = undefined;

  @service('ember-three/scene-manager')
  sceneManager;

  constructor(owner, args) {
    super(owner, args);
    let { id, rendererParams } = this.args;
    this.eThreeJsScene = this.sceneManager.get(id, rendererParams);
  }

  @action
  insertElement(element) {
    this.element = element;
    this.element.appendChild(this.eThreeJsScene.domElement);
    this.eThreeJsScene.start();
  }

  @action
  destroyElement() {
    this.element.removeChild(this.eThreeJsScene.domElement);
    this.sceneManager.dispose(this.args.id);
  }
}
