/*eslint strict: ["error", "global"]*/
'use strict';

//-----------------------------
// Include gulp
//-----------------------------
var gulp = require('gulp');

//-----------------------------
// Include Our Plugins
//-----------------------------
var concat      = require('gulp-concat');
var order       = require('gulp-order');

// Export our tasks.
module.exports = {

  // Concat all CSS into a master bundle.
  css: function() {
    return gulp.src([
      './public/css/*.css'
    ])
      .pipe(order([
        'public/css/pattern-scaffolding.css',
        'public/css/global.css',
        'public/css/*.css'
      ], { base: './' }))
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./public/css'));
  }
};
