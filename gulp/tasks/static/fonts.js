import gulp from 'gulp';
import flatten from 'gulp-flatten';
import handleErrors from '../../util/handleErrors';
import { fonts as config } from '../../config';

gulp.task('[Static] Fonts', () => {
  return gulp.src(config.static.src)
    .on('error', handleErrors)
    .pipe(flatten())
    .pipe(gulp.dest(config.static.dest));
});