var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var config = Object.create(baseConfig);

config.output = {
  path: 'dist/scripts',
  filename: '[name].js',
};
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
    'process.env.PUBLIC_API_URL': '"http://wannabe.kiiiosk.ru/api"',
    'process.env.OPERATOR_API_URL': '"http://wannabe.kiiiosk.ru/operator/api"',
    'process.env.KIOSK_CSS_PREFIX': '"mrch-"',
  }),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      screw_ie8: true,
      warnings: false,
    },
  })
];

module.exports = config;