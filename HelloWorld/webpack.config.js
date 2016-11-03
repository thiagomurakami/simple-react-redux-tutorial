var webpack = require('webpack')
var path    = require('path')

module.exports = {
  devtool: 'inline-source-map', // This devtool enables source-maps in the browser!
  // Apps entry points
  entry: {
    bundle: ['./src/App.jsx'],
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)?$/,
      exclude: /node_modules/,
      loader: 'babel' // Presets are set in package.json "babel" entry
    }]
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
  ]
}
