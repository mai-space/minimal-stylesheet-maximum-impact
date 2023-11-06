const { merge } = require('webpack-merge');

const base = require('./.webpack/base');
const handlebars = require('./.webpack/handlebars');
const typescript = require('./.webpack/typescript');
const scss = require('./.webpack/scss');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(base, handlebars, typescript, scss, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin()
  ],
});
