import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

gulp.task('dist', ['[Shared] Clean'], () => {
  gulp.start(
    '[Production] Scripts',
    '[Production] Styles',
    '[Production] Fonts',
    '[Production] Images'
  );
});

gulp.task('build', ['[Shared] Clean'], (cb) => {
  runSequence([
    '[Static] Scripts',
    '[Static] Haml',
    '[Static] Styles',
    '[Static] Fonts',
    '[Static] Images'
  ], cb);
});

gulp.task('deploy', ['build'], () => {
  gulp.start('[Shared] GithubPages');
});

gulp.task('server', ['[Shared] SetWatch', 'build'], () => {
  gulp.start('[Shared] Watch');
});

gulp.task('default', ['server']);