import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';
import { modifier } from 'ember-could-get-used-to-this';
import { action } from '@ember/object';

import { WebGlHelper } from './web-gl-helper';

function random() {
  return Math.random() * 360;
}

function newRotations(num = 20) {
  return Array(num)
    .fill()
    .map(() => [random(), random(), random()]);
}

export default class DemoComponent extends Component {
  @service router;
  @service appState;
  @service stats;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      this.onUpdate();
    });
  }

  @action
  onUpdate() {
    this.renderer.syncBoxes(newRotations(this.appState.count));
  }

  setup = modifier((element) => {
    this.renderer = new WebGlHelper({
      container: element,
      stats: this.stats,
    });

    this.renderer.animate();
    this.onUpdate();

    registerDestructor(this, () => this.renderer.willDestroy());
  });
}

setComponentTemplate(hbs`<main {{this.setup}}></main>`, DemoComponent);
