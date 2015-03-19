module.exports = function (gulp, plugins) {
	gulp.task('prod', function(cb) {
		plugins.sequence(
			'compileAssets',
			'browserify:prod',
			'concat:css',
			'cssmin:dist',
			'sails-linker-gulp:prodAssets',
			'sails-linker-gulp:prodViews',
			cb
		);
	});
};
