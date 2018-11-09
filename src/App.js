import React, { Component } from 'react';
import Library from './components/library';
import Player from './components/player';
import './App.css';

const electron = window.require("electron");
const {app} = electron.remote;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: []
        };
        this.setPlayList = this.setPlayList.bind(this);
    }

    setPlayList(newPlayList) {
        this.setState({
            playlist: newPlayList
        })
    }
    render() {
        return (
            <div className="App">
                <div className="close" onClick={() => app.quit()}>
                    <i className="fa fa-window-close"></i>
                </div>
                <Library fn={this.setPlayList}/>
                <Player playlist={this.state.playlist}/>
            </div>
        );
    }
}

export default App;
