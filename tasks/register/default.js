module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'compileAssets',
      'browserify:dev',
			'linkAssets',
			['watch:api', 'watch:assets'],
			cb
		);
	});
};
