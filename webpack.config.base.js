var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var widgetsPath = './app/scripts/embeddable/widgets';

module.exports = {
  entry: {
    'widgets/ProductCard': widgetsPath + '/ProductCard',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?stage=0',
        exclude: /(node_modules|bower_components)/
      },
    ],
  },
  resolve: {
    alias: {
      'fancybox': 'fancybox/source/jquery.fancybox',
      'fancybox.wannabe': 'fancybox-wannabe-fix/index',
      'i18next': 'i18next-client',
      'jquery': 'jquery/dist/jquery',
      'owlCarousel': 'OwlCarousel/owl-carousel/owl.carousel',
    },
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'app/bower_components'),
    ],
  },
};