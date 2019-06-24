console.log('dev.config.js');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        }
      })
    ]
  },
  plugins: []
});
