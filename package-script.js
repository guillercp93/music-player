const packager = require('electron-packager');
const path = require('path');
console.log(process.argv, __dirname);
const options = {
    dir: __dirname,
    all: false,
    appVersion: "1.0.0",
    arch: process.argv[2],
    asar: false,
    executableName: 'music-player',
    name: 'music-player',
    icon: path.join(__dirname, 'public', 'images', 'icon.ico'),
    out: path.join(__dirname, 'release-builds'),
    overwrite: true,
    prune: true,
    platform: process.argv[3],
    ignore: [/public/, /src/]
};

packager(options)
.then(appPaths => console.log(appPaths))
.catch(err => console.error(err));