import Service from '@ember/service';
import EmberThreeScene from './-lib/ember-three-scene';
import { isPresent } from '@ember/utils';

export default class EmberThreeSceneManager extends Service {
  constructor() {
    super(...arguments);
  }

  getDefaultScene(id = undefined) {
    if (id === undefined) {
      let keys = Object.keys(EmberThreeSceneManager._scenes);
      if (keys.length > 1) {
        console.warn('At the moment we only support a single three js scene');
      }

      return EmberThreeSceneManager._scenes[keys[0]];
    }

    return EmberThreeSceneManager._scenes[id];
  }

  get(id, { rendererParams = undefined } = {}) {
    let scene = EmberThreeSceneManager._scenes[id];
    if (!scene) {
      EmberThreeSceneManager._scenes[id] = new EmberThreeScene({ rendererParams });
    } else if (isPresent(rendererParams)) {
      scene.updateRenderer({ rendererParams });
    }

    return EmberThreeSceneManager._scenes[id];
  }

  dispose(id) {
    let scene = EmberThreeSceneManager._scenes[id];
    if (scene) {
      scene.dispose();
      delete EmberThreeSceneManager._scenes[id];
    }
  }
}

EmberThreeSceneManager._scenes = {};
