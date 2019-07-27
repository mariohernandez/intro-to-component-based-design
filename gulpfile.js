/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp.
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var runSequence = require('run-sequence');

//=======================================================
// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
//=======================================================
var taskCompile     = require('./gulp-tasks/compile.js');
var taskMove        = require('./gulp-tasks/move.js');
var taskLint        = require('./gulp-tasks/lint.js');
var taskCompress    = require('./gulp-tasks/compress.js');
var taskClean       = require('./gulp-tasks/clean.js');
var taskConcat      = require('./gulp-tasks/concat.js');

//=======================================================
// Compile Our Sass and JS
// We also move some files if they don't need
// to be compiled.
//=======================================================
gulp.task('compile', [
  'compile:sass',
  'compile:js',
  'move:js',
  'move:fonts',
  'move:patternCSS'
]);

// Compile Sass
gulp.task('compile:sass', function() {
  return taskCompile.sass();
});

// Compile JavaScript ES2015 to ES5.
gulp.task('compile:js', function() {
  return taskCompile.js();
});

// If some JS components aren't es6 we want to simply move them
// into the dist folder. This allows us to clean the dist/js
// folder on build.
gulp.task('move:js', function() {
  return taskMove.js();
});

// Move any fonts added to the src directory to the /dist/fonts folder.
gulp.task('move:fonts', function() {
  return taskMove.fonts();
});

// Move any Patternlab specific CSS into the dist folder.
gulp.task('move:patternCSS', function() {
  return taskMove.patternCSS();
});

//=======================================================
// Lint Sass and JavaScript
//=======================================================
gulp.task('lint', ['lint:sass', 'lint:js']);

// Lint Sass based on .sass-lint.yml config.
gulp.task('lint:sass', function () {
  return taskLint.sass();
});

// Lint JavaScript based on .eslintrc config.
gulp.task('lint:js', function () {
  return taskLint.js();
});

//=======================================================
// Compress Files
//=======================================================
gulp.task('compress', function() {
  return taskCompress.assets();
});

//=======================================================
// Concat all css files into a master bundle.
//=======================================================
gulp.task('concat', function () {
  return taskConcat.css();
});

//=======================================================
// Clean all directories.
//=======================================================

gulp.task('clean', ['clean:css', 'clean:js']);

// Clean CSS files.
gulp.task('clean:css', function () {
  return taskClean.css();
});

// Clean JS files.
gulp.task('clean:js', function () {
  return taskClean.js();
});

//=======================================================
// Watch and recompile sass.
//=======================================================

// Pull the sass watch task out so we can use run sequence.

// Pull the sass watch task out so we can use run sequence.
gulp.task('watch:sass', function(callback) {
  runSequence(
    ['lint:sass', 'compile:sass'],
    'concat',
    callback
  );
});

// Main watch task.
gulp.task('watch', function() {

  // Watch all my sass files and compile sass if a file changes.
  gulp.watch(
    './source/_patterns/**/**/*.scss', ['watch:sass']
  );

  // Watch all my JS files and compile if a file changes.
  gulp.watch([
    './source/_patterns/**/**/*.js'
  ], ['lint:js', 'compile:js']);

});

//=======================================================
// Default Task
//
// runSequence runs 'clean' first, and when that finishes
// 'lint', 'compile' and 'compress' run at the same time.
//=======================================================
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    ['lint', 'compile', 'compress'],
    'concat',
    callback
  );
});
