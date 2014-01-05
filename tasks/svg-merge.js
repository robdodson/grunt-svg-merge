/*
 * grunt-svg-merge
 * 
 *
 * Copyright (c) 2014 Rob Dodson
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var Q = require('q');
var svgMerge = require('svg-merge');

module.exports = function (grunt) {

  grunt.registerMultiTask('svgmerge', 'Merge a folder of svg files into a single file', function () {
    var done = this.async();
    var dest = this.data.dest;
    var options = this.options({
      outputSuffix: '-out',
      classPrefix: 'iconic'
    });

    var promises = [];
    this.data.src.forEach(function (src) {
      fs.readdirSync(src).map(function (file) {
        // Get a list of all the directories in src
        return path.join(process.cwd(), src, file);
      }).filter(function (file) {
        // Remove anything that isn't a dir
        return grunt.file.isDir(file);
      }).forEach(function (dir) {
        // Because svgMerge is async we'll need to
        // use a deferred to listen for its completion
        // https://github.com/kriskowal/q#using-deferreds
        var deferred = Q.defer();
        // Pass each dir to svgMerge
        var name = dir.split(path.sep).pop();
        var outputFile = [name, options.outputSuffix, '.svg'].join('');

        var opts = {
          inputDir: dir,
          outputDir: path.join(dest, name),
          outputFile: outputFile,
          classPrefix: options.classPrefix
        };

        svgMerge(opts, deferred.resolve);
        // Store a promise for the async operation
        promises.push(deferred.promise);
      });
    });

    // When all async operations have finished
    // call done to finalize the grunt task
    Q.all(promises)
    .then(function (result) {
      done();
    }, function (err) {
      done(false);
    });
  });

};
