'use strict';

var gulp   = require('gulp')
  , svgmin = require('gulp-svgmin');


gulp.task('default', ['test']);

/**
 *  Minify all SVG files
 */
gulp.task('svg:minify', function () {
  return gulp.src('./svg/*.svg')
        .pipe( svgmin() )
        .pipe(gulp.dest('./svg.minified'));
});