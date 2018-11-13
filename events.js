const { ipcMain } = require('electron');
const { Growl, notify, WindowsToaster } = require('node-notifier');
const os = require("os");
const path = require('path');
const { getSongs, getArtists, getAlbums } = require('./database/index');
const {synchronizeMusic} = require('./synchronize');

ipcMain.on('serve-songs', (event, args) => {
    getSongs(args, (err, documents) => {
        if (err) {
            event.returnValue = [];
            return;
        }
        event.returnValue = documents;
    });
});

ipcMain.on('serve-albums', (event, args) => {
    getAlbums(args, (err, documents) => {
        event.returnValue = documents;
    });
});

ipcMain.on('serve-artists', (event, args) => {
    getArtists({}, (err, documents) => {
        event.returnValue = documents;
    });
});

ipcMain.on('synchronize-music', (event, args) => {
    if (os.platform("win32")) {
        const notifier = new WindowsToaster();
        notifier.notify({
            title: "Synchronized Files",
            message: "Starting synchronization!",
            icon: path.join(__dirname, 'build', 'images', 'icon.jpg'),
        });
    } else {
        notify({
            title: "Synchronized Files",
            message: "Starting synchronization!",
            icon: path.join(__dirname, 'build', 'images', 'icon.jpg'),
        });
    }
    synchronizeMusic(args).then(message => {
        if (os.platform("win32")) {
            const notifier = new WindowsToaster();
            notifier.notify({
                title: "Synchronized Files",
                message,
                icon: path.join(__dirname, 'build', 'images', 'icon.jpg'),
            });
        } else {
            notify({
                title: "Synchronized Files",
                message,
                icon: path.join(__dirname, 'build', 'images', 'icon.jpg'),
            });
        }
    }).catch(err => {
        const notifier = new Growl();
        notifier.notify({
            title: "Synchrinized Files",
            message: "An error has occurred while synchronizing!",
            icon: path.join(__dirname, 'build', 'images', 'icon.jpg'),
        });
    }).finally(() => event.sender.send('can-get-songs'));
});