const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [ './polyfill/index.js', './polyfill/fetch.js', './src/index.js'],
  cache: false,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'bin')
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      options: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.css$/,

      use: [ {
        loader: 'css-loader',

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: false,
        comments: false,
        sourceMap: true,
        parse: {},
        compress: {},
        mangle: true,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_fnames: false,
      },
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /uk/),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: "gzip",
    })
  ]
}
