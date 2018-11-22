const electron = require('electron');
const path = require('path');
const url = require('url');
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
        icon: path.join(__dirname, 'public', 'images', 'icon.png'),
        show: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'build', 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // mainWindow.webContents.openDevTools();

    mainWindow.on('ready-to-show', () => mainWindow.show());

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

if (process.platform === 'win32') {
    app.commandLine.appendSwitch('high-dpi-support', 'true');
    app.commandLine.appendSwitch('force-device-scale-factor', '1');
}