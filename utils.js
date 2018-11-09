const Discogs = require('disconnect').Client;
const fs = require('fs');
const path = require('path');
const {promisify} = require('util')

const dis = new Discogs({
    consumerKey: 'liSGMqzKsmcIttGqNAKL',
    consumerSecret: 'rCJZmeccznqzUGGkIjlGGocKZGyDfJTj'
});

const readDir = promisify(fs.readdir);

function uniqueList(list) {
    return list.reduce((r, i) =>
        !r.some(j => !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r, [])
}

function getArtistImage(nameArtist) {
    return dis.get(`https://api.discogs.com/database/search?artist=${nameArtist}&type=release`)
        .then((response) => {
            let { results } = response;
            if (results.length > 0) {
                return dis.get(`https://api.discogs.com/releases/${results[0].id}`);
            }
            throw Error("not release found");
        })
        .then((response) => {
            let { artists } = response;
            if (artists.length > 0) {
                return dis.get(`https://api.discogs.com/artists/${artists[0].id}`);
            }
            throw Error("not artists found");
        })
        .then((response) => {
            let { images } = response;
            if (images.length > 0) {
                return images[0].resource_url;
            }
            throw Error("No images found");
        });
}

async function scanDirectories(pathDir) {
    const directories = await readDir(pathDir, 'utf8');
    const listDirectories = [];
    let actualPath = "";
    for (let index = 0; index < directories.length; index++) {
        actualPath = path.join(pathDir, directories[index]);
        if (fs.lstatSync(actualPath).isFile()) {
            listDirectories.push(actualPath);
        }else{
            listDirectories.push(...await scanDirectories(actualPath));
        }
        
    }
    return listDirectories;
}

module.exports = {
    uniqueList,
    getArtistImage,
    scanDirectories
}