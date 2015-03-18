module.exports = function (gulp, plugins) {
	gulp.task('syncAssets', function(cb) {
		plugins.sequence(
			'compileAssets',
			'images',
			'linkAssets',
			cb
		);
	});
};
