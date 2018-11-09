import React from 'react';
const electron = window.require("electron");

const ipc = electron.ipcRenderer;

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: "",
        };
        this.getPath = this.getPath.bind(this);
        this.synchronizeMusic = this.synchronizeMusic.bind(this);
    }
    getPath(event) {
        const textRoute = document.getElementById("text-route");
        const path = event.target.files[0].path;
        textRoute.innerHTML = path;
        this.setState({
            path
        });
    }

    synchronizeMusic() {
        ipc.send('synchronizeMusic', this.state.path);
    }

    render() {

        return (
            <div className="tabs-vertical">
                <h2>Where to find my music?</h2>
                <form>
                    <div className="input-group">
                        <label className="input-label" htmlFor="directory">
                            <span>Choose directory</span>
                            <i className="fa fa-file-upload"></i>
                        </label>
                        <input type="file" id="directory" name="directory"
                            webkitdirectory="true" multiple={false}
                            onChange={this.getPath} />
                        <span id="text-route"></span>
                    </div>
                    <div className="input-group">
                        <button type="button" onClick={this.synchronizeMusic}>Synchronize</button>
                    </div>
                </form>
            </div>);
    }
}

export default Settings;