module.exports = function (gulp, plugins) {
	gulp.task('prod', function(cb) {
		plugins.sequence(
			'compileAssets:prod',
			'browserify:prod',
      'concat:adminjs',
			'cssmin:dist',
			'sails-linker-gulp:prodAssets',
			'sails-linker-gulp:prodViews',
			cb
		);
	});
};
