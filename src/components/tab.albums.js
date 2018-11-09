import React from 'react';
import {Card} from './elements';

const ipc = window.require("electron").ipcRenderer;

class TabAlbums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        const albums = ipc.sendSync('serve-albums', {});
        this.setState({ albums });
    }

    setPlaylist(album) {
        const songs = ipc.sendSync('serve-songs', {album});
        this.props.fn(songs);
    }

    render() {
        return (
            <div className="tabs-horizontal">
                {this.state.albums.map((value, index) => {
                return <Card key={`album${index}`} image={value.picture}
                            title={value.album}
                            subtitle={value.artists ? value.artists[0]: ""}
                            fn={() => this.setPlaylist(value.album)} />}
            )}
            </div>);
    }
}

export default TabAlbums;