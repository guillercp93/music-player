export const GET_SONGS = 'GET_SONGS';
export const GET_ALBUMS = 'GET_ALBUMS';
export const SYNCHRONIZE_SONGS = 'SYNCHRONIZE_SONGS';
export const SET_PLAYLIST = 'SET_PLAYLIST';

export const ipc = window.require('electron').ipcRenderer;
export function getSongs(params={}) {
    return {
        type: GET_SONGS,
        params
    };
}

export function getAlbums() {
    return {
        type: GET_ALBUMS
    };
}

export function synchronizeSongs(path) {
    return {
        type: SYNCHRONIZE_SONGS,
        path
    };
}

export function setPlaylist(filter) {
    return {
        type: SET_PLAYLIST,
        filter
    };
}

export function canGetSongs() {
    return (dispatch, getState) => {
        ipc.on('can-get-songs', (event, args) => {
            dispatch(getSongs({}));
            dispatch(getAlbums());
        })
    }
}