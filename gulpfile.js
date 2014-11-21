'use strict';

var gulp   = require('gulp')
  , insert = require('gulp-insert')
  , svgmin = require('gulp-svgmin');


gulp.task('default', ['svg:minify']);

/**
 *  Minify all SVG files
 */
gulp.task('svg:minify', function () {
  return gulp.src('./svg/*.svg')
        .pipe( svgmin() )
        .pipe( insert.prepend('<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->') )
        .pipe(gulp.dest('./svg.minified'));
});