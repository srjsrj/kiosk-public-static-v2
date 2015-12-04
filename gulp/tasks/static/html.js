import gulp from 'gulp';
import browserSync from 'browser-sync';
import { reload } from 'browser-sync';
import { html as config } from '../../config';

gulp.task('[Static] Html', () => {
  return gulp
    .src(config.static.src)
    .pipe(gulp.dest(config.static.dest))
    .pipe(reload({ stream: true }));
});