const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new ESLintWebpackPlugin(options)
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(p ng|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?.js/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
    }
};