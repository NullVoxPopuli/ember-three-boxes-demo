import { setComponentManager } from '@ember/component';
import { RenderlessComponent } from './component';
import RenderlessComponentManager from './manager';

setComponentManager((owner) => {
  return new RenderlessComponentManager(owner)
}, RenderlessComponent);

export default RenderlessComponent;
