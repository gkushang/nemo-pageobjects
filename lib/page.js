'use strict';

var Promise = require('bluebird');
var map = require('lodash').map;
var glob = require('glob');
var resolve = require('path').resolve;

module.exports = function page(pagesDirectory, nemo) {
    var pages = [];
    var page = {};

    function instantiate(file) {
        pages = [require(resolve(pagesDirectory, file))];
        var pageArray = file.split('/');
        pageArray[pageArray.length - 1] = pageArray[pageArray.length - 1].split('.js')[0];
        pages.push(pageArray);
        var pageName = pages[1].length > 1 ? pages[1][pages[1].length - 1] : pages[1];
        page[pageName] = pages[0](nemo);
        return page;
    }

    return new Promise(function(resolve, reject) {
        function instantiatePages(err, pages) {
            if (err || pages.length <= 0) {
                reject('pages not found at ' + pagesDirectory);
            }
            else {
                nemo.page = map(pages, instantiate);
                resolve(nemo.page);
            }
        }

        glob("**/*.js", {cwd: pagesDirectory}, instantiatePages);
    })

};
