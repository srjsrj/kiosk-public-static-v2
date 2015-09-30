import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import streamify from 'gulp-streamify';
import bundleLogger from '../util/bundleLogger';
import handleErrors from '../util/handleErrors';
import { scripts as config } from '../config';

// External dependencies we do not want to rebundle while developing,
// but include in our dist bundle
const dependencies = {
  'react': './node_modules/react/addons',
  'redux': './node_modules/redux',
  'classnames': './node_modules/classnames',
  'perfect-scrollbar': './node_modules/perfect-scrollbar',
  'nouislider': './node_modules/noUiSlider/distribute/nouislider',
  'tinycolor2': './node_modules/tinycolor2',
  'immutable': './node_modules/immutable/dist/immutable',
  'jss': './node_modules/jss/lib',
  'reqwest': './node_modules/reqwest',
  'URIjs': './node_modules/URIjs/src/URI',

  'reactUjs': './app/scripts/resources/react_ujs',
  'jquery': './node_modules/jquery/dist/jquery',
  'jquery.mmenu': './app/bower_components/jQuery.mmenu/src/js/jquery.mmenu.min.all',
  'jquery.role': './app/bower_components/jquery.role/lib/jquery.role',
  'jquery.sticky-kit': './app/bower_components/sticky-kit/jquery.sticky-kit',
  'bootstrapSass': './app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
  'eventEmitter': './app/bower_components/eventEmitter/EventEmitter',
  'owlCarousel': './app/bower_components/OwlCarousel/owl-carousel/owl.carousel',
  'fancybox': './app/bower_components/fancybox/source/jquery.fancybox',
  'fancybox.wannabe': './app/bower_components/fancybox-wannabe-fix/index',
  'accounting': './app/bower_components/accounting.js/accounting',
  'lodash': './node_modules/lodash'
};
const nonProductionDependencies = [
  'reactUjs'
];

gulp.task('[Static] Client scripts', () => {
  let bundler = browserify({
    cache: {}, packageCache: {},
    entries: config.static.client.entries,
    extensions: config.static.client.extensions
  });

  Object.keys(dependencies).forEach((dep) => {
    bundler.external(dep);
  });

  function rebundle() {
    bundleLogger.start(config.static.client.outputName);

    bundler.bundle()
      .on('error', handleErrors)
      .pipe(source(config.static.client.outputName))
      .pipe(gulp.dest(config.static.client.dest))
      .on('end', function() {
        bundleLogger.end(config.static.client.outputName);
      });
  };

  if (global.isWatching) {
    bundler = watchify(bundler
      .transform('coffee-reactify')
      .transform('babelify', {
        stage: 0,
        ignore: /(node_modules|bower_components)/
      })
    );
    bundler.on('update', rebundle);
  } else {
    bundler
      .transform('coffee-reactify')
      .transform('babelify', {
        stage: 0,
        ignore: /(node_modules|bower_components)/
      });
  }

  rebundle();
});

gulp.task('[Static] Vendor scripts', (cb) => {
  let bundler = browserify({
    cache: {}, packageCache: {},
    entries: config.static.vendor.entries,
    extensions: config.static.vendor.extensions
  });

  Object.keys(dependencies).forEach((dep) => {
    bundler.require(dependencies[dep], { expose: dep });
  });

  bundleLogger.start(config.static.vendor.outputName);

  bundler
    .transform('coffee-reactify')
    .bundle()
    .on('error', handleErrors)
    .pipe(source(config.static.vendor.outputName))
    .pipe(gulp.dest(config.static.vendor.dest))
    .on('end', () => {
      bundleLogger.end(config.static.vendor.outputName);
      cb();
    });
});

gulp.task('[Static] Test scripts', () => {
  let testBundler = browserify({
    cache: {}, packageCache: {},
    entries: config.static.test.entries,
    extensions: config.static.test.extensions
  });

  Object.keys(dependencies).forEach((dep) => {
    testBundler.external(dep);
  });

  function rebundle() {
    bundleLogger.start(config.static.test.outputName);

    return testBundler.bundle()
      .on('error', handleErrors)
      .pipe(source(config.static.test.outputName))
      .pipe(gulp.dest(config.static.test.dest))
      .on('end', function() {
        bundleLogger.end(config.static.test.outputName);
      });
  };

  if (global.isWatching) {
    testBundler = watchify(testBundler
      .transform('coffee-reactify')
      .transform('babelify', {
        stage: 0,
        ignore: /(node_modules|bower_components)/
      })
    );
    testBundler.on('update', rebundle);
  } else {
    testBundler
      .transform('coffee-reactify')
      .transform('babelify', {
        stage: 0,
        ignore: /(node_modules|bower_components)/
      });
  }

  return rebundle();
});

gulp.task('[Production] Scripts', () => {
  var appBundler = browserify({
    cache: {}, packageCache: {},
    entries: config.production.entries,
    extensions: config.production.extensions
  });

  Object.keys(dependencies).forEach((dep) => {
    if (nonProductionDependencies.indexOf(dep) == -1) {
      appBundler.require(dependencies[dep], { expose: dep });
    }
  });

  bundleLogger.start(config.production.outputName);

  return appBundler
    .transform('babelify', {
      stage: 0,
      ignore: /(node_modules|bower_components)/
    })
    .transform('coffee-reactify')
    .bundle()
    .on('error', handleErrors)
    .pipe(source(config.production.outputName))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.production.dest))
    .on('end', function() {
      bundleLogger.end(config.production.outputName);
    });
});