const FileManagerPlugin = require('filemanager-webpack-plugin');
module.exports = {
    entry: {
        main: './src/main/main.js',
    },
    module: {
        rules: require('./webpack.rules'),
    },
    plugins: [
        new FileManagerPlugin({
            events: {
                onStart: {
                    copy: [
                        {
                            source: './package.json',
                            destination: './.webpack/main/package.json',
                        },
                        {
                            source: './src/logo.png',
                            destination: './.webpack/main/logo.png',
                        },
                    ],
                },
            },
        }),
    ],
};
