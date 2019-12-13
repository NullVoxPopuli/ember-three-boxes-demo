import Ember from 'ember';
import { set } from '@ember/object';
import { getOwner, setOwner } from '@ember/application';
import { capabilities } from '@ember/component';
import { schedule } from '@ember/runloop';

import { setDestroyed, setDestroying } from './component';

export default class RenderlessComponentManager {
  static create(attrs) {
    let owner = getOwner(attrs);
    return new this(owner);
  }
  constructor(owner) {
    setOwner(this, owner);
    this.capabilities = capabilities('3.4', {
      destructor: true,
      asyncLifecycleCallbacks: true,
    });
  }

  createComponent(Klass, args) {
    let instance = new Klass(args.named);
    setOwner(instance, getOwner(this));
    return instance;
  }

  updateComponent(component, args) {
    set(component, 'args', args.named);
  }

    destroyComponent(component) {
    if (component.isDestroying) {
      return;
    }

    let meta = Ember.meta(component);

    meta.setSourceDestroying();
    setDestroying(component);

    schedule('actions', component, component.willDestroy);
    schedule('destroy', this, scheduledDestroyComponent, component, meta);
  }

  getContext(component) {
    return component;
  }

  didUpdateComponent(component) {
    component.didUpdate();
  }
}



function scheduledDestroyComponent(component, meta) {
  if (component.isDestroyed) {
    return;
  }

  Ember.destroy(component);

  meta.setSourceDestroyed();
  setDestroyed(component);
}
