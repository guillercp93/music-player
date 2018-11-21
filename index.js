const electron = require('electron');
const path = require('path');
require('./events');

const { app, BrowserWindow } = electron;
let mainWindow;

function createWindow() {
    const mainScreen = electron.screen.getPrimaryDisplay();

    mainWindow = new BrowserWindow({
        width: mainScreen.size.width,
        height: mainScreen.size.height,
        frame: false,
        transparent: true,
        fullscreenable: true,
        icon: path.join(__dirname, 'public', 'images', 'icon.png')
        // fullscreen: true,
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