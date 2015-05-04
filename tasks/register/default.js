module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'compileAssets',
      'browserify:dev',
      'concat:adminjs',
			'linkAssets',
			['watch:api', 'watch:assets'],
			cb
		);
	});
};
