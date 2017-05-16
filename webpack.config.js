var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    filename: './public/assets/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract('css!sass')
      }
    ],
    plugins: [
      new ExtractTextPlugin('public/style.css', {
          allChunks: true
      })
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
