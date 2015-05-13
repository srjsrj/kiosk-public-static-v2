gulp        = require 'gulp'
requireDir  = require 'require-dir'
runSequence = require 'run-sequence'

requireDir './gulp/tasks', { recurse: true }

gulp.task 'dist', ['clean'], ->
  gulp.start '[Production] Scripts', 'minifyStyles', 'productionImages'

gulp.task 'build', ['clean'], (cb) ->
  runSequence ['[Static] Scripts', 'haml', 'sass', 'fonts', 'localImages'], cb

gulp.task 'server', ['setWatch', 'build'], ->
  gulp.start 'watch'