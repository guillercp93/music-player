import React from 'react';
import {Avatar} from './elements';

const ipc = window.require("electron").ipcRenderer;

class TabArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        };
    }

    componentDidMount() {
        const artists = ipc.sendSync('serve-artists', {});
        this.setState({ artists });
    }
    render() {
        return (
            <div className="tabs-horizontal">
                {
                    this.state.artists.map((artist, index) => {
                        return <Avatar key={`artist${index}`}
                                image={artist.image} title={artist.name}
                                subtitle={""} />
                    }
                    )
                }
            </div>);
    }
}

export default TabArtists;