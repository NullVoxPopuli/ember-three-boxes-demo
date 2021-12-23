import Service from '@ember/service';
import { action } from '@ember/object';
import Stats from 'stats.js';

// https://github.com/mrdoob/stats.js
export default class StatsService extends Service {
  constructor() {
    super(...arguments);

    let stats = new Stats();

    stats.showPanel(0);
    stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    stats.showPanel(2);

    // is this the plural?
    let canvaii = stats.dom.querySelectorAll('canvas');

    for (let canvas of canvaii) {
      canvas.style.display = 'block';
    }

    document.body.appendChild(stats.dom);

    this.stats = stats;
  }

  @action begin() {
    this.stats.begin();
  }

  @action end() {
    this.stats.end();
  }
}
