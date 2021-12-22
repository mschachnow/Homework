const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PCS Webpack Demo',
            year: new Date().getFullYear(),
            template: './src/index.html'
        }),
        new webpack.BannerPlugin('This is my banner!'),
        new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            /*{
              test: /\.html$/i,
              loader: "html-loader",
            },*/
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset'/*,
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          }
        }*/
            }

        ]
    }
};