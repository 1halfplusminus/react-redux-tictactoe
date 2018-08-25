const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'index.html'
    }),
  ],
};