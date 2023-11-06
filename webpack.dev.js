const { merge } = require('webpack-merge');
const path = require("path");

const base = require('./.webpack/base');
const handlebars = require('./.webpack/handlebars');
const typescript = require('./.webpack/typescript');
const scss = require('./.webpack/scss');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');

module.exports = merge(base, handlebars, typescript, scss, {
  mode: "development",
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist/StyleSheets/'),
        publicPath: '/StyleSheets',
      },
      {
        directory: path.join(__dirname, 'dist/JavaScripts/'),
        publicPath: '/JavaScripts',
      },
    ],
    compress: false,
    liveReload: true,
  },
  plugins: [
    new WebpackBar(),
  ],
});
