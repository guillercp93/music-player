import React from 'react';
import moment from 'moment';
import {Row} from './elements';

const ipc = window.require("electron").ipcRenderer;

class TabSongs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
        const songs = ipc.sendSync('serve-songs', {});
        this.setState({ songs });

    }
    render() {
        return (
            <div className="tabs-vertical">
                {this.state.songs.map((value, index) => 
                    <Row key={`song${index}`} text1={value.title} text2={value.album}
                        text3={value.artists ? value.artists[0]: ""}
                        text4={moment(value.duration*1000).format('mm:ss')}
                        fn={() =>this.props.fn([value])} />)}
            </div>);
    }
}

export default TabSongs;