import React from 'react';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TabAlbums from './tab.albums';
// import TabArtists from './tab.artists';
import TabSettings from './tab.settings';
import TabSongs from './tab.songs';
import './library.css'

const Library = (props) => {
    const {fn} = props;

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
                    <Route path="/songs" render={(props) => <TabSongs fn={fn} />} />
                    <Route path="/albums" render={(props) => <TabAlbums fn={fn} />} />
                    {/* <Route path="/artists" component={TabArtists} /> */}
                    <Route path="/settings" component={TabSettings} />
                    <Redirect to="/songs" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Library;