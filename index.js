'use strict';

var page = require('./lib/page');
var Path = require('path');

/*

  var options = {
    nemo: nemo,
    baseDir: baseDir // path to your tests directory
  }

 */

function nemoPage(options) {

  var nemo = options.nemo;
  var baseDir = options.baseDir;

  function attachToNamespace() {
    nemo.page = nemo.page[0];
    return nemo.page;
  }

  var pageDirectory = Path.join(process.cwd(), baseDir, 'pages');

  return page(pageDirectory, options.nemo)
      .then(attachToNamespace);
}

module.exports = {
  nemoPage: nemoPage
};

