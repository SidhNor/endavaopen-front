module.exports = function(ctx) {

  var exec = require('child_process').exec,
    util = require('util'),
    deferral = ctx.requireCordovaModule('q').defer();

  function puts(error, stdout, stderr) {
    if (error)
      deferral.reject(error)
    util.puts(stdout)
  }
  var lt = exec('gulp to-html', puts)
  lt.stdout.pipe(process.stdout);
  lt.stderr.pipe(process.stderr);
  lt.on('exit', function (code) {
    util.puts('Gulp exited with exit code ' + code);
    if (code === 0)
      deferral.resolve()
    else
      deferral.reject()
  });

  return deferral.promise;
};
