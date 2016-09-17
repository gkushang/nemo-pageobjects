'use strict';

var page = require('./lib/page');
var Path = require('path');

function nemoPage(world) {
  function attachToNamespace() {
    world.nemo.page = world.nemo.page[0];
    return world.nemo.page;
  }

  var pageDirectory = Path.join(process.cwd() + world.nemo._config.get('baseDir') + 'pages');
  return page(pageDirectory, world)
      .then(attachToNamespace);
}

module.exports = {
  nemoPage: nemoPage
};

