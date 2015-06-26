import gulp from 'gulp';
import handleErrors from '../../util/handleErrors';
import { images as config } from '../../config';

gulp.task('[Production] Images', () => {
  return gulp.src(config.production.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.production.dest))
});