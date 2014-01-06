# grunt-svg-merge

> Merge a folder of svg files into a single file

[![Build Status](https://secure.travis-ci.org/robdodson/grunt-svg-merge.png?branch=master)](http://travis-ci.org/robdodson/grunt-svg-merge)

## Getting Started
This plugin requires Grunt ~0.4.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svg-merge --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg-merge');
```

## Configuration

To configure the task just pass in a `src` directory, with subfolders for each icon and a `dest` directory.

``` js
svgmerge: {
  files: {
    src: ['icons'],
    dest: 'icons-out'
  }
}
```

### Options

#### outputSuffix

Default: `-out`  
Type: `String`

Append a suffix to the end of every output file. Ex: `arrow.svg` becomes `arrow-out.svg`.

```js
svgmerge: {
  files: {
    src: ['icons'],
    dest: 'icons-out',
    options: {
      outputSuffix: '-foo'
    }
  }
}
```

#### classPrefix

Default: `iconic`  
Type: `String`

Prefix class names coming from svg files. Ex: `class="arrow-lg"` becomes `class="iconic-arrow-lg"`.

```js
svgmerge: {
  files: {
    src: ['icons'],
    dest: 'icons-out',
    options: {
      classPrefix: 'awesome'
    }
  }
}
```

## License
Copyright (c) 2014 Rob Dodson. Licensed under the MIT license.
