import React from 'react';
import Library from './components/library';
import Player from './components/player';
import './App.css';

const electron = window.require("electron");
const {app} = electron.remote;

const App = (props) => (
    <div className="App">
        <div className="close" onClick={() => app.quit()}>
            <i className="fa fa-window-close"></i>
        </div>
        <Library />
        <Player />
    </div>
);

export default App;
