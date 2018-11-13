import React from 'react';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { setPlaylist, synchronizeSongs } from '../store_manager/actions'
import TabAlbums from './tab.albums';
// import TabArtists from './tab.artists';
import TabSettings from './tab.settings';
import TabSongs from './tab.songs';
import './library.css';

const mapToStateToProps = (state) => {
    return {
        songs: state.songs,
        albums: state.albums,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayList: (filter) => dispatch(setPlaylist(filter)),
        setSynchro: (path) => dispatch(synchronizeSongs(path))
    }
}

const Library = (props) => {
    const {songs, albums, setPlayList, setSynchro} = props;

    return (
        <BrowserRouter>
            <div className="library">
                <div className="nav-tabs">
                    <NavLink activeClassName="active" to="/songs">Songs</NavLink>
                    <NavLink activeClassName="active" to="/albums">Albums</NavLink>
                    {/* <NavLink activeClassName="active" to="/artists">Artists</NavLink> */}
                    <NavLink activeClassName="active" to="/settings">Settings</NavLink>
                </div>
                <Switch>
                    <Route path="/songs" render={(props) => <TabSongs fn={setPlayList} songs={songs} />} />
                    <Route path="/albums" render={(props) => <TabAlbums fn={setPlayList} albums={albums} />} />
                    {/* <Route path="/artists" component={TabArtists} /> */}
                    <Route path="/settings" render={(props) => <TabSettings fn={setSynchro} />} />
                    <Redirect to="/songs" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default connect(mapToStateToProps, mapDispatchToProps)(Library);