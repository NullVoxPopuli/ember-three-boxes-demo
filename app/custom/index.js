import { setComponentManager } from '@ember/component';
import { RenderlessComponent } from 'ember-three-boxes-demo/component-managers/component';
import RenderlessComponentManager from 'ember-three-boxes-demo/component-managers/renderless';

setComponentManager((owner) => {
  return new RenderlessComponentManager(owner)
}, RenderlessComponent);

export default RenderlessComponent;
