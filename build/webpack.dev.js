const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: path.resolve(__dirname, '../dist'),
  },
};
const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;
