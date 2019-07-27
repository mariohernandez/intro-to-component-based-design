/*eslint strict: ["error", "global"]*/
'use strict';

// If some JS components aren't es6 we want to simply move them
// into the dist folder. This allows us to clean the dist/js
// folder on build.

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var rename = require('gulp-rename');

// Export our tasks.
module.exports = {

  // Moves JavaScript.
  js: function() {
    return gulp.src([
      './source/_patterns/{00-atoms,01-molecules,02-organisms,03-templates,04-pages}/**/*.js',
      '!./source/_patterns/{00-atoms,01-molecules,02-organisms,03-templates,04-pages}/**/*.es6.js'
    ], { base: './' })
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./public/js'));
  },

  // Moves Fonts.
  fonts: function() {
    return gulp.src([
      './src/fonts/**/*.woff',
      './src/fonts/**/*.woff2',
      './src/fonts/**/*.eot',
      './src/fonts/**/*.ttf',
      './src/fonts/**/*.svg'
    ], { base: './' })
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./public/fonts'));
  },

  patternCSS: function() {
    return gulp.src([
      './public/styleguide/**/*.css',
    ], { base: './' })
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./public/css'));
  }
};
