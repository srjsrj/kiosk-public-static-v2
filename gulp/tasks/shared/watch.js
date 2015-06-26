import gulp from 'gulp';

gulp.task('[Shared] Watch', ['[Shared] BrowserSync'], () => {
  gulp.watch('app/haml/**/*.haml', ['[Static] Haml']);
  gulp.watch('app/stylesheets/**/*.s?ss', ['[Static] Styles']);
  gulp.watch('app/images/**/*', ['[Static] Images']);
});