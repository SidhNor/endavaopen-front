module.exports = function (gulp, plugins) {
	gulp.task('compileAssets', function(cb) {
		plugins.sequence(
			'clean:dev',
			'less:dev',
			'copy:dev',
			cb
		);
	});

  gulp.task('compileAssets:prod', function(cb) {
    plugins.sequence(
      'clean:dev',
      'less:prod',
      'copy:dev',
      cb
    );
  });
};
