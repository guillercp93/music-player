const {scanDirectories} = require('./utils');
const {setAlbums, setSongs} = require('./database/index');
const metadata = require('music-metadata');
const path = require('path');

exports.synchronizeMusic = async (pathDir) => {
    const files = await scanDirectories(pathDir);
    const musicFiles = files.filter(ele => ele.match(/\.(?:mp3|wav|ogg|m4a|wma)$/i))
    for (let index = 0; index < musicFiles.length; index++) {
        await metadata.parseFile(musicFiles[index], {duration: true})
            .then(data => {
                const songData = {
                    title: data.common.title || path.basename(musicFiles[index]),
                    album: data.common.album,
                    artists: data.common.artists,
                    duration: data.format.duration,
                    picture: data.common.picture ? data.common.picture[0].data.toString('base64') : null,
                    path: musicFiles[index],
                };
                return setSongs(songData);
            });
    }
    setAlbums();
    return `${musicFiles.length} files have been synchronized.`;
}