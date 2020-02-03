
const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new CleanWebpackPlugin()]
})
    // entry: "./src/index.js",
    // devtool: "none",
    // module: {
    //     rules: [
    //         {
    //             test: [/\.css$/i, /\.s[ac]ss$/i],
    //             use: [
    //                 // Creates `style` nodes from JS strings
    //                 'style-loader',
    //                 // Translates CSS into CommonJS
    //                 'css-loader',
    //                 // Compiles Sass to CSS
    //                 'sass-loader',
    //             ],
    //         },
    //     ],
    // },
    // plugins: [new HtmlWebpackPlugin({
    //     template: "./src/template.html"
    // })]
// }