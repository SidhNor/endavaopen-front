/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 */
module.exports = function(gulp, plugins, growl) {
	gulp.task('copy:dev', function() {
		return gulp.src('./assets/**/*.!(less)')
				.pipe(gulp.dest('.tmp/public'));
	});
	gulp.task('copy:build', function() {
		return gulp.src('.tmp/public/**/*')
				.pipe(gulp.dest('www'));
	});
};
