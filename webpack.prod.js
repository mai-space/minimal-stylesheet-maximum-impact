const { merge } = require('webpack-merge');

const base = require('./webpack/base');
const handlebars = require('./webpack/handlebars');
const typescript = require('./webpack/typescript');
const scss = require('./webpack/scss');

const WebpackBar = require('webpackbar');

module.exports = merge(base, handlebars, typescript, scss, {
  mode: "production",
  plugins: [
    new WebpackBar(),
  ],
});
