"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  let environment = EmberApp.env();
  let isProduction = environment === "production";
  let options = {
    sourcemaps: {
      enabled: false,
    },
    "ember-cli-babel": {
      includePolyfill: false,
      disablePresetEnv: true,
      disableDebugTooling: isProduction,
      includeExternalHelpers: true,
      // Will not build if uncommented:
      // disableEmberModulesAPIPolyfill: true
      // compileModules: false,
    },
  };

  // Helpful for running production builds locally.
  // Terser takes is the longest step
  if (process.env.DISABLE_TERSER) {
    options['ember-cli-terser'] = { enabled: false };
  }

  let app = new EmberApp(defaults, options);

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
