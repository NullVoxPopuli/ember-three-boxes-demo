import Service from '@ember/service';
import EThreeJSScene from './-lib/EThreejsScene';

export default class EThreeJSSceneService extends Service {

  constructor() {
    super(...arguments);
  }

  getDefaultScene(id = undefined) {
    if (id === undefined) {
      let keys = Object.keys(EThreeJSSceneService._scenes);
      if (keys.length > 1) {
        console.warn('At the moment we only support a single three js scene');
      }

      return EThreeJSSceneService._scenes[keys[0]];
    }

    return EThreeJSSceneService._scenes[id];
  }

  get(id, { rendererParams = undefined } = {}) {
    let scene = EThreeJSSceneService._scenes[id];
    if (!scene) {
      EThreeJSSceneService._scenes[id] = new EThreeJSScene({ rendererParams });
    }

    return EThreeJSSceneService._scenes[id];
  }

  dispose(id) {
    let scene = EThreeJSSceneService._scenes[id];
    if (scene) {
      scene.dispose();
     delete EThreeJSSceneService._scenes[id];
    }
  }
}

EThreeJSSceneService._scenes = {};
