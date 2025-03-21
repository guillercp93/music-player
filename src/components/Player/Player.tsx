import React, { useState } from 'react';
import {
  PreviousSongIcon,
  PauseSongIcon,
  PlaySongIcon,
  NextSongIcon,
} from '../icons';
import { Button } from '../UI/Button';

interface PlayerProps {
  className?: string;
}

/**
 * A React component that displays a music player.
 *
 * @param {PlayerProps} props
 * @prop {string} className? The CSS class name to apply to the container element.
 * @returns {React.ReactElement} A React element for the player.
 */
export const Player: React.FC<PlayerProps> = ({
  className = '',
}: PlayerProps): React.ReactElement => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const togglePlay = (): void => {
    setIsPlaying((prev) => !prev);
  };

  const formatTime = (seconds: number): string => {
    if (!seconds && seconds !== 0) {
      return '00:00';
    }

    try {
      const date = new Date(seconds * 1000);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      return date.toISOString().substring(14, 19);
    } catch (error) {
      console.error('Error formatting time:', error);
      return '00:00';
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    setCurrentTime((clickX / rect.width) * duration);
  };

  return (
    <div className={`${className} flex flex-col h-full w-full`}>
      <div className="flex justify-between items-center px-2 py-1">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Song Title</h3>
          <p className="text-sm text-gray-500">Album Name</p>
        </div>
        <div className="flex space-x-4">
          <Button
            icon={<PreviousSongIcon customClass="w-6 h-6" />}
            className="rounded-full"
          />
          <Button
            icon={
              isPlaying ? (
                <PauseSongIcon customClass="w-6 h-6" />
              ) : (
                <PlaySongIcon customClass="w-6 h-6" />
              )
            }
            onClick={togglePlay}
            className="rounded-full"
          />
          <Button
            icon={<NextSongIcon customClass="w-6 h-6" />}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 px-2 py-1">
        <span className="text-sm text-gray-500">{formatTime(currentTime)}</span>
        <div
          className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700"
          onClick={handleSeek}
        >
          <div
            className="h-1.5 rounded-full"
            style={{
              width: `${(currentTime / duration) * 100}%`,
              backgroundColor: 'var(--accent-color)',
            }}
          ></div>
        </div>
        <span className="text-sm text-gray-500">{formatTime(duration)}</span>
      </div>
    </div>
  );
};
