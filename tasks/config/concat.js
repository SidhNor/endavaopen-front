/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 *
 */
module.exports = function(gulp, plugins, growl) {

	gulp.task('concat:adminjs', function() {
		return gulp.src(require('../pipeline').adminjsFilesToInject)
				.pipe(plugins.concat('adminproduction.js'))
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.uglify(/* {mangle: true} */))
				.pipe(gulp.dest('./.tmp/public/concat'));
	});

	gulp.task('concat:css', function() {
		return gulp.src(require('../pipeline').cssFilesToInject)
				.pipe(plugins.concat('production.css'))
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.minifyCss())
				.pipe(gulp.dest('./.tmp/public/concat'));
	});

};

