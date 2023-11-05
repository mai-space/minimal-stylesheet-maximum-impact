const path = require("path");
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.sass$/,
                include: [
                    path.resolve(__dirname, '../assets/StyleSheets')
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
};
