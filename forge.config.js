module.exports = {
    packagerConfig: {
        dir: '.webpack',
        icon: '.webpack/renderer/assets/favicon.png',
        darwinDarkModeSupport: true,
    },
    makers: [
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-dmg',
        },
        // {
        //     name: '@electron-forge/maker-flatpak',
        //     config: {
        //         categories: 'Utility',
        //     },
        // },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
        {
            name: '@electron-forge/maker-snap',
            config: {
                features: {
                    audio: true,
                    webgl: true,
                },
                summary: 'Generate OpenCore config.plist automatically',
            },
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: (arch) => {
                const installerConfig = {};
                if (process.env.WINDOWS_CERT_FILENAME) {
                    const pfx = path.resolve(
                        __dirname,
                        process.env.WINDOWS_CERT_FILENAME,
                    );
                    if (fs.existsSync(pfx)) {
                        installerConfig.signWithParams = `/a /f ${pfx}`;
                    }
                }

                return installerConfig;
            },
        },
        // {
        //     name: '@electron-forge/maker-squirrel',
        //     config: {
        //         name: 'GenZOC',
        //     },
        // },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin', 'linux', 'mas', 'win32'],
        },
    ],
    plugins: [
        [
            '@electron-forge/plugin-webpack',
            {
                mainConfig: './webpack.js',
                renderer: {
                    config: './webpack.renderer.js',
                    entryPoints: [
                        {
                            html: './src/index.html',
                            js: './src/renderer.js',
                            name: 'GenZOC',
                        },
                    ],
                },
            },
        ],
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    name: 'GenZOC',
                    owner: 'cokaps016',
                },
            },
        },
    ],
};
