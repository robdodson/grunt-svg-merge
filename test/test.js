/* globals describe, it, beforeEach, afterEach */

'use strict';

var expect = require('chai').expect;
var path = require('path');
var grunt = require('grunt');

describe('grunt-svg-merge', function () {
  it('should create multiple svg files', function () {
    var align = path.join(process.cwd(), 'tmp', 'align-center', 'align-center-out.svg');
    var arrow = path.join(process.cwd(), 'tmp', 'arrow', 'arrow-out.svg');
    expect(grunt.file.exists(align)).to.equal(true);
    expect(grunt.file.exists(arrow)).to.equal(true);
  });
});
