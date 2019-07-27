/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var sassLint = require('gulp-sass-lint');
var eslint   = require('gulp-eslint');

// Export our tasks.
module.exports = {

  // Lint Sass based on .sass-lint.yml config.
  sass: function() {
    return gulp.src([
      './source/_patterns/{00-atoms,01-molecules,02-organisms,03-templates,04-pages}/**/*.scss',
      '!./source/css/scss/*'
    ])
      .pipe(sassLint())
      .pipe(sassLint.format());
  },

  // Lint JavaScript based on .eslintrc config.
  js: function() {
    return gulp.src([
      './source/_patterns/{00-atoms,01-molecules,02-organisms,03-templates,04-pages}/**/*.js',
      '!./source/js/*'
    ])
      .pipe(eslint())
      .pipe(eslint.format());
  }
};
