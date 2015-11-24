var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var config = Object.create(baseConfig);

config.devtool = 'source-map';
config.output = {
  path: 'build/scripts',
  filename: '[name].js',
};
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"',
    'process.env.PUBLIC_API_URL': '"http://wannabe.vagrant.dev:3000/api"',
    'process.env.OPERATOR_API_URL': '"http://wannabe.vagrant.dev:3000/operator/api"',
  }),
];

module.exports = config;