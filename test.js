const {synchronizeMusic} = require('./synchronize');
const nodeNotifier = require('node-notifier');
const path = require('path');
const {setAlbums, setArtists} = require('./database/index');
const {getArtistImage, uniqueList} = require('./utils');

const scan = synchronizeMusic(`E:/backup/2017-09-15_19-56-27/C/Users/Guiller/Music/`);
scan.then(response => {
    let options = {
        title: "Synchronized Files",
        message: response,
        icon: path.join(__dirname, 'build', 'images', 'icon.jpg'),
    };
    // new nodeNotifier.NotificationCenter(options).notify(options);
    // new nodeNotifier.NotifySend(options).notify(options);
    // new nodeNotifier.WindowsToaster(options).notify(options);
    // new nodeNotifier.WindowsBalloon(options).notify(options);
    new nodeNotifier.Growl(options).notify(options);
});

// setAlbums();
// setArtists();
// console.log('image', getArtistImage("Muse").then((r) => {
//     console.log(r)
// }));