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
    this.eThreeJsScene = this.sceneManager.get(id, { rendererParams });
  }

  @action
  onInsertElement(element) {
    this.element = element;
    this.eThreeJsScene.onInsertElement(this.element);
    this.eThreeJsScene.start();
  }

  @action
  onDestroyElement() {
    this.sceneManager.dispose(this.args.id);
  }
}
