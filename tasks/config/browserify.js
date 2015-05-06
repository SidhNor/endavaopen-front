/**
 * Browserifies stuff
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 */

var browserify = require('browserify');
var reactify   = require('reactify');
var watchify   = require('watchify');
var source = require('vinyl-source-stream');

module.exports = function(gulp, plugins, growl) {

  gulp.task('browserify:dev', function(cb) {
    var bundler = browserify({
       noparse: ['react/addons', 'reflux', 'react-router', 'underscore', 'material-ui'],
       entries: ['./assets/js/app.js'],
       transform: [reactify],
       extensions: ['.js'],
       debug: true,
       cache: {},
       packageCache: {},
       fullPaths: true
     });
    bundler = watchify(bundler);

    function rebundle() {
      console.log('Bundling Scripts...');
      var start = Date.now();
      return bundler.bundle()
        .pipe(source('app.js'))
        .pipe(plugins.util.noop())
        .pipe(gulp.dest('./.tmp/public/concat'));
    }

    bundler.on('update', rebundle);

    return rebundle();
  });

  gulp.task('browserify:prod', function() {
    var bundler = browserify({
      noparse: ['react/addons', 'reflux', 'react-router'],
      entries: ['./assets/js/app.js'],
      transform: [reactify],
      extensions: ['.jsx', '.js'],
      debug: false,
      cache: {},
      packageCache: {},
      fullPaths: true
    });

    function rebundle() {
      console.log('Bundling Scripts...');
      var start = Date.now();
      return bundler.bundle()
        .pipe(source('production.js'))
        .pipe(plugins.streamify(plugins.uglify()))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest('./.tmp/public/concat'));
    }

    return rebundle();
  });
};
