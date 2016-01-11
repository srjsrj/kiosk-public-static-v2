import gulp from 'gulp';
import browserSync from 'browser-sync';
import handleErrors from '../../util/handleErrors';
import { reload } from 'browser-sync';
import { html as config } from '../../config';

gulp.task('[Static] Html', () => {
  return gulp.src(config.static.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.static.dest))
    .pipe(reload({ stream: true }));
});
