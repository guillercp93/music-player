import { combineReducers } from 'redux';
import { GET_SONGS, GET_ALBUMS, SYNCHRONIZE_SONGS, SET_PLAYLIST, ipc } from './actions';
import { initialStore } from './storage';

function songs(state = initialStore.songs, action) {
    switch (action.type) {
        case GET_SONGS:
            return ipc.sendSync('serve-songs', action.params);
        case SYNCHRONIZE_SONGS:
            ipc.send('synchronize-music', action.path);
            return state;
        default:
            return state;
    }
}

function albums(state = initialStore.albums, action) {
    switch (action.type) {
        case GET_ALBUMS:
            return ipc.sendSync('serve-albums', action.params);
        default:
            return state;
    }
}

function playlist(state = initialStore.playlist, action) {
    switch (action.type) {
        case SET_PLAYLIST:
            return ipc.sendSync('serve-songs', action.filter);
        default:
            return state;
    }
}

const MusicApp = combineReducers({
    albums,
    playlist,
    songs,
})

export default MusicApp;