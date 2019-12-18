import Service from '@ember/service';
import EThreeJSScene from './-lib/EThreejsScene';

export default class EThreeJSSceneService extends Service {

  constructor() {
    super(...arguments);
  }

  get(id) {
    let scene = EThreeJSSceneService._scenes[id];
    if (!scene) {
      EThreeJSSceneService._scenes[id] = new EThreeJSScene();
    }

    return EThreeJSSceneService._scenes[id];
  }
}

EThreeJSSceneService._scenes = {};
