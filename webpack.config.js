const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/client'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/,query: {presets: ['es2015','react']} },
      // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
}