/* eslint-disable require-jsdoc */
const {
    app,
    BrowserWindow,
    Menu /* ipcMain, nativeTheme*/,
} = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';
const appMenu = require('./menu');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    // eslint-disable-line global-require
    app.quit();
}

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        },
    });

    // and load the index.html of the app.
    // mainWindow.loadFile('public/index.html');

    // and load the index.html of the app.
    mainWindow.loadURL(GENZOC_WEBPACK_ENTRY);
    // Open the DevTools.
    isDev
        ? mainWindow.webContents.openDevTools()
        : console.log('Currently Production');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    app.applicationMenu = Menu.buildFromTemplate(appMenu);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (!isMac) app.quit();
});
