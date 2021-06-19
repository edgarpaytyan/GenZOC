const openAboutWindow = require('about-window').default;
const { shell } = require('electron');
const isMac = process.platform === 'darwin';
const path = require('path');
module.exports = [
    ...(isMac
        ? [
              {
                  label: app.name,
                  submenu: [
                      { role: 'about' },
                      { type: 'separator' },
                      { role: 'services' },
                      { type: 'separator' },
                      { role: 'hide' },
                      { role: 'hideothers' },
                      { role: 'unhide' },
                      { type: 'separator' },
                      { role: 'quit' },
                  ],
              },
          ]
        : []),
    {
        label: 'File',
        submenu: [isMac ? { role: 'close' } : { role: 'quit' }],
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac
                ? [
                      { role: 'pasteAndMatchStyle' },
                      { role: 'delete' },
                      { role: 'selectAll' },
                      { type: 'separator' },
                      {
                          label: 'Speech',
                          submenu: [
                              { role: 'startSpeaking' },
                              { role: 'stopSpeaking' },
                          ],
                      },
                  ]
                : [
                      { role: 'delete' },
                      { type: 'separator' },
                      { role: 'selectAll' },
                  ]),
        ],
    },
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'quit' },
            { role: 'togglefullscreen' },
        ],
    },
    // { role: 'windowMenu' }
    {
        label: 'Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac
                ? [
                      { type: 'separator' },
                      { role: 'front' },
                      { type: 'separator' },
                      { role: 'window' },
                  ]
                : [{ role: 'close' }]),
        ],
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Repo',
                click: async () => {
                    await shell.openExternal(
                        'https://github.com/cokaps016/GenZOC',
                    );
                },
            },
            {
                label: 'About This App',
                click: () => {
                    openAboutWindow({
                        bug_report_url:
                            'https://github.com/cokaps016/GenZOC/issues',
                        product_name: 'GenZOC',
                        homepage: 'https://github.com/cokaps016/GenZOC/',
                        description:
                            'Generate OpenCore config.plist automatically',
                        bug_link_text: 'Report Bug',
                        icon_path: path.join(__dirname, './logo.png'),
                        copyright: 'Copyright (c) MIT LICENSE 2021 Cokaps016',
                        open_devtools: process.env.NODE_ENV !== 'production',
                        use_version_info: [
                            ['my version entry 1', '0.0.1'],
                            ['my version entry 2', 'x.y.z'],
                        ],
                    });
                },
            },
        ],
    },
];
