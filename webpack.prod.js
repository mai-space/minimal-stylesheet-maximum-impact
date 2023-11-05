const { merge } = require('webpack-merge');

const base = require('./webpack/base');
const typescript = require('./webpack/typescript');
const scss = require('./webpack/scss');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');

module.exports = merge(base, typescript, scss, {
  mode: "production",
  plugins: [
    new WebpackBar(),
    new BundleAnalyzerPlugin()
  ],
});
