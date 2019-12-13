import { setComponentTemplate } from '@ember/component';

import Demo from './-shared/demo-js';
import template from 'ember-three-boxes-demo/templates/components/glimmer';

class DemoComponent extends Demo {

}


export default setComponentTemplate(template, DemoComponent);
