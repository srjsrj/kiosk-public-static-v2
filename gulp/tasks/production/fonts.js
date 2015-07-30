import gulp from 'gulp';
import flatten from 'gulp-flatten';
import handleErrors from '../../util/handleErrors';
import { fonts as config } from '../../config';

gulp.task('[Production] Fonts', () => {
  return gulp.src(config.production.src)
    .on('error', handleErrors)
    .pipe(flatten())
    .pipe(gulp.dest(config.production.dest));
});