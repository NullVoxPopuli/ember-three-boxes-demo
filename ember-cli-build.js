'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-babel': {
      // turn off the old transform
      // (for this to work when using Embroider you need https://github.com/embroider-build/embroider/pull/1673)
      disableDecoratorTransforms: true,
    },
    babel: {
      plugins: [
        // add the new transform.
        require.resolve('decorator-transforms'),
      ],
    },
  });

  return app.toTree();
};
