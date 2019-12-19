import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { DEFAULT_DEMO } from '../../index';

export default class Controls extends Component {

  @tracked demoList = ['cubes', 'lines'];
  @tracked selectedDemoListItem = DEFAULT_DEMO;

}
