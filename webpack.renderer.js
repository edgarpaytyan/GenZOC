// const nativeRules = require('./webpack.rules.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'development';

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader',
            },
            {
                test: /\.(m?js|node)$/,
                parser: { amd: false },
                use: {
                    loader: '@timfish/webpack-asset-relocator-loader',
                    options: {
                        outputAssetBase: 'native_modules',
                    },
                },
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    { loader: 'postcss-loader' },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                        },
                    },
                ],
            },
        ],
    },
    devtool: isDev ? 'inline-source-map' : false,
    optimization: {
        minimize: !isDev,
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                exclude: /(node_modules)/,
            }),
            new HtmlWebpackPlugin({
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        // runtimeChunk: 'single',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new FaviconsWebpackPlugin({
            logo: './src/logo.png',
            inject: true,
        }),
        new ImageMinimizerPlugin({
            loader: !isDev,
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    // Svgo configuration here https://github.com/svg/svgo#configuration
                    [
                        'svgo',
                        {
                            plugins: extendDefaultPlugins([
                                {
                                    name: 'removeViewBox',
                                    active: false,
                                },
                                {
                                    name: 'addAttributesToSVGElement',
                                    params: {
                                        attributes: [
                                            {
                                                xmlns: 'http://www.w3.org/2000/svg',
                                            },
                                        ],
                                    },
                                },
                            ]),
                        },
                    ],
                ],
            },
        }),
        // new FileManagerPlugin({
        //     events: {
        //         onStart: {
        //             copy: [
        //                 { source: './src/**/*.html', destination: './public/' },
        //                 { source: './src/icon/', destination: './public/' },
        //             ],
        //         },
        //     },
        // }),
    ],
};
