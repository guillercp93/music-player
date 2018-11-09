const DataStore = require('nedb');
const path = require('path');
const { uniqueList } = require('../utils')

const songs = new DataStore({
    filename: path.join(__dirname, 'songs.db'),
    autoload: true,
});

songs.ensureIndex({fieldName: 'title', unique: true}, (err) => {
    if (err) {
        process.exit(1);
    }
});

songs.persistence.compactDatafile();

const albums = new DataStore({
    filename: path.join(__dirname, 'albums.db'),
    autoload: true,
});

albums.ensureIndex({fieldName: 'album', unique: true}, (err) => {
    if (err) {
        process.exit(1);
    }
});

albums.persistence.compactDatafile()

const artists = new DataStore({
    filename: path.join(__dirname, 'artists.db'),
    autoload: true,
});

artists.ensureIndex({fieldName: 'title', unique: true}, (err) => {
    if (err) {
        process.exit(1);
    }
});

artists.persistence.compactDatafile();
/**
 * Get songs from database, filter for params
 * @param {JSON} params 
 * @param {Function} callback 
 */
function getSongs(params, callback) {
    return songs.find(params).sort({album: 1, title: 1}).exec(callback);
}

function getAlbums(params, callback) {
    return albums.find(params).sort({album:1}).exec(callback);
}

function getArtists(params, callback) {
    return artists.find(params, callback);
}

function setSongs(data) {
    return songs.insert(data);
}

function setAlbums() {
    songs.find({}, {
        _id: 0,
        album: 1,
        artists:1,
        picture: 1
    }, (err, documents) => {
        if (err) {
            return;
        }
        const albumsData = uniqueList(documents);
        for (let index = 0; index < albumsData.length; index++) {
            try {
                albums.insert(albumsData[index]);
            }catch(err) {
                console.log(err);
            }
        }
    })
}

module.exports = {
    getSongs,
    getAlbums,
    getArtists,
    setAlbums,
    setSongs
}