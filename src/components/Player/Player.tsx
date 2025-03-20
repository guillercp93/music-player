import React, { useState } from 'react';
import { PreviousSongIcon } from '../icons/previous-song-icon';
import { PauseSongIcon } from '../icons/pause-song-icon';
import { PlaySongIcon } from '../icons/play-song-icon';
import { NextSongIcon } from '../icons/next-song-icon';

interface PlayerProps {
  className?: string;
}

export const Player: React.FC<PlayerProps> = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  return (
    <div className={`player ${className || ''}`}>
      <div className="player-info">
        <div className="song-details">
          <h3 className="song-title">Song Title</h3>
          <p className="artist-name">Artist Name</p>
        </div>
      </div>

      <div className="player-controls">
        <button className="control-button previous">
          <PreviousSongIcon />
        </button>

        <button className="control-button play-pause" onClick={togglePlay}>
          {isPlaying ? <PauseSongIcon /> : <PlaySongIcon />}
        </button>

        <button className="control-button next">
          <NextSongIcon />
        </button>
      </div>

      <div className="progress-container">
        <span className="time current">{formatTime(currentTime)}</span>
        <input
          type="range"
          className="progress-bar"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleTimeChange}
        />
        <span className="time duration">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};
