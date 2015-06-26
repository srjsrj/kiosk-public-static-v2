import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import { ghPages as config } from '../../config';

gulp.task('[Shared] GithubPages', () => {
  return gulp.src(config.src)
    .pipe(ghPages(config.options));
});