
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    // devtool: "none",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            inject: true
        })
    ],
    module: {
        rules: [
            {   // css sass loader
                test: [/\.css$/i, /\.s[ac]ss$/i],
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {   // html loader
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href']
                    },
                }
            },
            {   // file loader
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'imgs',
                        esModule: false
                    },
                }
            },
            // {
            //     test: /\.(js|jsx)$/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env', '@babel/react']


            //         }
            //     },
            //     resolve: { extensions: [".js", ".jsx"] }
            // }
        ]
    },
    // prevent bundle duplication
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}