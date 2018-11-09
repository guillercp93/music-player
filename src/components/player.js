import React from "react";
import moment from 'moment';
import default_image from './default_image';
import './player.css';
class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            currentSong: {
                title: "",
                artists: "",
                album: "",
                picture: default_image,
                path: "",
            }
        }
    }

    componentDidMount() {
        const player = document.getElementById("audio");

        if (player) {
            this.setState({
                player
            });
            player.load();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentSong: nextProps.playlist[0],
            index: 0,
        });
        try {
            this.state.player.load();
            this.playSound();
        } catch (error) {
            console.log("componentWillReceiveProps");
            console.error(error);
        }
    }

    playSound() {
        const { player } = this.state;
        if (player.paused || player.ended) {
            player.play();
        } else {
            player.pause();
        }
    }

    setVolume() {
        const { player } = this.state;
        switch (player.volume) {
            case 0:
                player.volume = 0.5;
                break;
            case 0.5:
                player.volume = 1;
                break;
            default:
                player.volume = 0;
                break;
        }
    }

    nextSong() {
        const {index, player} = this.state;
        if (index < this.props.playlist.length - 1) {
            this.setState({
                currentSong: this.props.playlist[index + 1],
                index: index + 1,
            });
            player.load();
            this.playSound();
        }
    }

    prevSong() {
        const {index, player} = this.state;
        if (index > 0) {
            this.setState({
                currentSong: this.props.playlist[index - 1],
                index: index - 1,
            });
            player.load();
            this.playSound();
        }
    }

    render() {
        return (
            <div className="player">
                <audio id="audio" onPlay={() => this.setState({ isPlaying: true })}
                    onPause={() => this.setState({ isPlaying: false })}
                    onEnded={() => this.nextSong()}
                    onTimeUpdate={() => this.setState({ currentTime: (this.state.player.currentTime / this.state.player.duration) * 100 })}>
                    <source src={this.state.currentSong.path}></source>
                </audio>
                <div className="player-top">
                    <img src={`data:image/png;base64, ${ this.state.currentSong.picture || default_image }`} alt="imageAlbum" />
                </div>
                <div className="player-middle">
                    <div className="progress">
                        <div className="progress-current" style={{ width: this.state.currentTime + '%' }}></div>
                    </div>
                    <div className="time">
                        <span>{this.state.player ?
                            moment(this.state.player.currentTime * 1000 || 0).format('mm:ss') :
                            0}</span>
                        <span>{this.state.player ?
                            moment(this.state.player.duration * 1000 || 0).format('mm:ss') :
                            0}</span>
                    </div>
                </div>
                <div className="player-bottom">
                    <div className="controls">
                        <button type="button" onClick={() => this.prevSong()}>
                            <i className="fa fa-2x fa-backward"></i>
                        </button>
                        <button type="button" onClick={() => this.playSound()}>
                            {
                                !this.state.isPlaying ?
                                    <i className="fa fa-2x fa-play"></i> :
                                    <i className="fa fa-2x fa-pause"></i>
                            }
                        </button>
                        <button type="button" onClick={() => this.nextSong()}>
                            <i className="fa fa-2x fa-forward"></i>
                        </button>
                        {this.state.player ? <button type="button" onClick={() => this.setVolume()}>
                            {this.state.player.volume === 0.5 ?
                                <i className="fa fa-2x fa-volume-down"></i> :
                                this.state.player.volume === 1 ?
                                    <i className="fa fa-2x fa-volume-up"></i> :
                                    this.state.player.volume === 0 ?
                                        <i className="fa fa-2x fa-volume-off"></i> :
                                        <i className="fa fa-2x fa-volume-mute"></i>}
                        </button> : null}
                    </div>
                    <div className="details">
                        <h2>{this.state.currentSong.title}</h2>
                        <h4>{this.state.currentSong.album}</h4>
                        <h4>{this.state.currentSong.artists}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;