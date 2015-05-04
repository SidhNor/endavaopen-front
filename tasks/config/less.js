/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 */
module.exports = function(gulp, plugins, growl) {

	gulp.task('less:dev', function() {
		return gulp.src('assets/styles/importer.less')
        .pipe(plugins.sourcemaps.init())
				.pipe(
					plugins.less({
						expand: true,
						ext: '.css'
					})
				)
      .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 10', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(plugins.sourcemaps.write())
				.pipe(gulp.dest('.tmp/public/styles/'));
	});
};
