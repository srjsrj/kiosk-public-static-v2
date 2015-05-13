var gulp = require('gulp'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    configStatic = require('../config').scripts.static,
    configProduction = require('../config').scripts.production;

// External dependencies we do not want to rebundle while developing,
// but include in our dist bundle

var dependencies = {
  'jquery': './node_modules/jquery/dist/jquery',
  'jquery.mmenu': './app/bower_components/jQuery.mmenu/src/js/jquery.mmenu.min.all',
  'jquery.role': './app/bower_components/jquery.role/lib/jquery.role',
  'bootstrapSass': './app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
  'react': './node_modules/react',
  'reactUjs': './app/scripts/resources/react_ujs',
  'eventEmitter': './app/bower_components/eventEmitter/EventEmitter',
  'owlCarousel': './app/bower_components/OwlCarousel/owl-carousel/owl.carousel',
  'fancybox': './app/bower_components/fancybox/source/jquery.fancybox',
  'fancybox.wannabe': './app/bower_components/fancybox-wannabe-fix/index',
  'accounting': './app/bower_components/accounting.js/accounting',
  'lodash': './node_modules/lodash',
  'nouislider': './app/bower_components/nouislider/distribute/jquery.nouislider.all'
};

var nonProductionDependencies = ['react', 'reactUjs'];

gulp.task('[Static] Scripts', function(cb) {

  /*==========  Client scripts  ==========*/

  var bundleQueue = 1;
  var clientBundler = browserify({
    cache: {}, packageCache: {},
    entries: configStatic.client.entries,
    extensions: configStatic.client.extensions
  });

  Object.keys(dependencies).forEach(function(key) {
    clientBundler.external(key);
  });

  var rebundle = function() {
    bundleLogger.start(configStatic.client.outputName);

    clientBundler.bundle()
      .on('error', handleErrors)
      .pipe(source(configStatic.client.outputName))
      .pipe(gulp.dest(configStatic.client.dest))
      .on('end', function() {
        bundleLogger.end(configStatic.client.outputName);
        bundleQueue--;
        if (bundleQueue === 0) { cb(); }
      });
  };

  clientBundler
    .transform('coffee-reactify')
    .transform('babelify');

  if (global.isWatching) {
    clientBundler = watchify(clientBundler);
    clientBundler.on('update', rebundle);
  }

  rebundle();

  /*==========  Vendor scripts  ==========*/

  var vendorBundler = browserify({
    cache: {}, packageCache: {},
    entries: configStatic.vendor.entries,
    extensions: configStatic.vendor.extensions
  });

  Object.keys(dependencies).forEach(function(key) {
    vendorBundler.require(dependencies[key], {expose: key});
  });

  bundleLogger.start(configStatic.vendor.outputName);

  vendorBundler
    .transform('coffee-reactify')
    .bundle()
    .on('error', handleErrors)
    .pipe(source(configStatic.vendor.outputName))
    .pipe(gulp.dest(configStatic.vendor.dest))
    .on('end', function() {
      bundleLogger.end(configStatic.vendor.outputName);
    });
});

gulp.task('[Production] Scripts', function() {
  var appBundler = browserify({
    cache: {}, packageCache: {},
    entries: configProduction.entries,
    extensions: configProduction.extensions
  });

  Object.keys(dependencies).forEach(function(key) {
    if (nonProductionDependencies.indexOf(key) == -1) {
      appBundler.require(dependencies[key], {expose: key});
    }
  });

  bundleLogger.start(configProduction.outputName);

  return appBundler
    .transform('babelify', {ignore: /(node_modules|bower_components)/})
    .transform('coffee-reactify')
    .bundle()
    .on('error', handleErrors)
    .pipe(source(configProduction.outputName))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(configProduction.dest))
    .on('end', function() {
      bundleLogger.end(configProduction.outputName);
    });
});