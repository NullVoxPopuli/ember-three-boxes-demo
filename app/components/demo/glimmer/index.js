import { default as Demo } from '../-base-demo-component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

export default class DemoComponent extends Demo {}

setComponentTemplate(
  hbs`
  <main>
    <Demo::Glimmer::Scene @onInit={{this.animate}} as |s|>
      <s.DirectionalLight @x={{-5}} @y={{0}} @z={{-10}} />
      <s.PerspectiveCamera @z={{3.2}} @aspectRatio={{this.aspectRatio}} />

      {{#each this.appState.rotations as |rotation|}}
        <s.Box @rotation={{rotation}} />
      {{/each}}

    </Demo::Glimmer::Scene>
  </main>

  `,
  DemoComponent
);
