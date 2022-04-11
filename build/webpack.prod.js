const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const config = {
  mode: 'production',
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
  },
};
const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;
