import gulp from 'gulp';
import mochaPhantomjs from 'gulp-mocha-phantomjs';

gulp.task('[Shared] Test', () => {
  return gulp.src('test/index.html').pipe(mochaPhantomjs())
});

gulp.task('[Shared] Test with build', ['[Static] Vendor scripts', '[Static] Test scripts'], () => {
  return gulp.src('test/index.html').pipe(mochaPhantomjs())
});