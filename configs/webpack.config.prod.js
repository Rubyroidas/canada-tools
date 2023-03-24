const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const staticDir = path.resolve(__dirname, '../static');
const buildDir = path.resolve(__dirname, '../dist');

module.exports = {
    devtool: false,
    output: {
        clean: true,
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: staticDir,
                to: buildDir,
                noErrorOnMissing: true,
                globOptions: {
                    dot: false,
                }
            }],
            options: {
                concurrency: 10,
            },
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // prohibition of `<bundle_file_name.ext>.LICENSE.txt` file on the output
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
};
