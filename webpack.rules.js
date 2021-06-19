module.exports = [
    // Add support for native node modules
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
];
