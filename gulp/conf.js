'use strict';

var gutil = require('gulp-util');
var path  = require('path');

/**
 * Configure base paths
 */

exports.paths = {
  src:  'src',
  dest: 'build',
  tmp:  '.tmp'
};

exports.errorHandler = function(title) {
  'use strict';
  return function(err) {
    gutil.log(gutil.colors.red('['+title+']'), err.toString());
    this.emit('end');
  };
};

exports.logger = function(msg, data) {
  var title = msg || '';
  gutil.log(gutil.colors.cyan('['+title+']', data.toString());
};
