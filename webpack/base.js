const path = require("path");
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'service-worker': "../assets/JavaScripts/01-generic/service-worker.ts",
    'bundle': [
      path.resolve(__dirname, '../assets/JavaScripts/index.ts'),
      path.resolve(__dirname, '../assets/StyleSheets/bundle.scss')
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
    modules: [
      'node_modules',
    ],
  },
  optimization: {
    chunkIds: 'named',
    moduleIds: 'named',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebPackPlugin({
      filename: 'MarkUp/index.html',
      template: path.resolve(__dirname, '../assets/MarkUp/05-pages/index.hbs')
    }),
    new MiniCssExtractPlugin({
      filename: 'StyleSheets/[name].min.css',
      chunkFilename: '[name].min.css'
    })
  ],
  output: {
    filename: "JavaScripts/[name].min.js",
    path: path.resolve(__dirname, "../dist/")
  },
}
