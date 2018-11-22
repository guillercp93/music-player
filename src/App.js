import React from 'react';
import Library from './components/library';
import Player from './components/player';
import './App.css';

const electron = window.require("electron");
const {app, BrowserWindow} = electron.remote;

const App = (props) => (
    <div className="App">
        <div className="minimize" onClick={() => BrowserWindow.getFocusedWindow().minimize()}>
            <i className="fa fa-minus-square"></i>
        </div>
        <div className="close" onClick={() => app.quit()}>
            <i className="fa fa-window-close"></i>
        </div>
        <Library />
        <Player />
    </div>
);

export default App;
