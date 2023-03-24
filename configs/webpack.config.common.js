const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');
const getGlobalVars = require('./globalVars');

module.exports = (_, baseConfig) => {
    const development = baseConfig.mode === 'development';
    const config = {
        entry: './src/index.tsx',
        output: {
            publicPath: '/',
            filename: 'main.js',
            path: path.resolve(__dirname, '../dist'),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.svg$/i,
                    type: 'asset/inline',
                    resourceQuery: /base64/,
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    resourceQuery: { not: [/base64/] },
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/inline', // TODO: investigate possibility to extract and cache images
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin(getGlobalVars(development)),
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
                inject: true,
                filename: 'index.html',
                publicPath: '/',
            }),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    };

    return merge(config, development ? devConfig : prodConfig);
};
