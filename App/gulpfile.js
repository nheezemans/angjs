var gulp = require('gulp');
var gutil = require('gulp-util');
var ignore = require('gulp-ignore');
var gulpDocs = require('gulp-ngdocs');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

/**
 * Set the the default Task
 */
gulp.task('default', ['sass', 'ngdocs']);

/**
 * Set Variables
 */
var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src( paths.sass )
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/_assets/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/_assets/css/'))
    .on('end', done);
});

gulp.task('ngdocs', [], function () {
  var ngdocsOptions = {
    title: "App Documentation",
    startPage: '/api/app',
    html5Mode: true,
  };

  return gulp.src(['./www/**/*.js',  '!./www/_assets/**/*.js'])
    .pipe(gulpDocs.process( ngdocsOptions ))
    .pipe(gulp.dest('./docs'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(['./www/**/*.js'], ['ngdocs']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
