import EmberRouter from '@ember/routing/router';
import config from 'ember-three-boxes-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('with-glimmer');
  this.route('with-ember');
  this.route('without-templates');
});
