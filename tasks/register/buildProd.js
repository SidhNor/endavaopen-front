module.exports = function (gulp, plugins) {
	gulp.task('buildProd', function(cb) {
		plugins.sequence(
			'compileAssets',
      'browserify:prod',
			'concat:css',
			'cssmin:dist',
			'linkAssetsBuildProd',
			'clean:build',
			'copy:build',
			cb
		);
	});
};
