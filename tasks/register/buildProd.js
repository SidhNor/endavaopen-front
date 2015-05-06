module.exports = function (gulp, plugins) {
	gulp.task('buildProd', function(cb) {
		plugins.sequence(
			'compileAssets:prod',
      'browserify:prod',
      'concat:adminjs',
			'concat:css',
			'cssmin:dist',
			'linkAssetsBuildProd',
			'clean:build',
			'copy:build',
			cb
		);
	});
};
