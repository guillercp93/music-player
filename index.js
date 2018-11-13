const {app, BrowserWindow} = require('electron');
const path = require('path');
require('./events');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        transparent: true,
        fullscreen: true,
    });

    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));

    // mainWindow.webContents.openDevTools();

    mainWindow.on('close', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('before-quit', () => {
    if (mainWindow) {
        mainWindow.removeAllListener('close');
        mainWindow.close();
    }
});