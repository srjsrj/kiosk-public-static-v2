import gulp from 'gulp';
import handleErrors from '../../util/handleErrors';
import { images as config } from '../../config';

gulp.task('[Static] Images', () => {
  return gulp.src(config.static.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.static.dest))
});