import { setComponentTemplate } from '@ember/component';

import { default as Demo } from './-shared/demo-js';
import template from 'ember-three-boxes-demo/templates/components/custom';

class CustomComponents extends Demo {

}

export default setComponentTemplate(template, CustomComponents);
