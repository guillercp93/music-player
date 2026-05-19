import React from 'react';
import { Song } from '../../Interfaces/Song';
import { Button } from './Button';
import { PlayerIcon } from '../icons';
import { usePlayer } from '../../context/PlayerContext';

/**
 * Props definition for the `InLineBox` component.
 */
interface InLineBoxProps {
  /** The Song item associated with this specific list row */
  song: Song;
  /** The list of songs that form the playback context queue for this item. Defaults to an empty list. */
  allSongs?: Song[];
  /** Custom CSS override styles to append to the row container. Optional. */
  customClass?: string;
}

/**
 * A highly refined list item component representing a single song row.
 * Offers reactive features: highlights dynamically with active gradients when selected,
 * displays a micro-animated mechanical visualizer waveform (equalizer bars) while playing,
 * supports cover-overlay play/pause buttons, and triggers context track queue updates.
 */
export const InLineBox = ({
  song,
  allSongs = [],
  customClass = '',
}: InLineBoxProps) => {
  const { currentSong, isPlaying, playSong, togglePlay } = usePlayer();

  /** Determines if this song is the one currently loaded in the global player */
  const isCurrent = currentSong?.id === song.id;

  /**
   * Dispatches song playback requests.
   * Toggles playback state if the track is already active, otherwise loads it as a new audio stream.
   */
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrent) {
      togglePlay();
    } else {
      playSong(song, allSongs);
    }
  };

  return (
    <div
      onClick={() => playSong(song, allSongs)}
      className={`group cursor-pointer select-none transition-all duration-300 rounded-2xl p-0.5 mb-2.5 ${
        isCurrent
          ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/10'
          : 'hover:bg-slate-200/20 dark:hover:bg-slate-800/30'
      } ${customClass}`}
    >
      <div className="flex flex-row items-center justify-between bg-[var(--bg-secondary)]/90 backdrop-blur-sm px-4 py-3 rounded-[14px]">
        {/* Cover Art and Animated Indicator */}
        <div className="relative w-12 h-12 mr-4 shrink-0 group">
          <img
            src={song.imageURL}
            alt={song.title}
            loading="lazy"
            className={`w-full h-full rounded-xl object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 ${
              isCurrent && isPlaying ? 'animate-[spin_12s_linear_infinite]' : ''
            }`}
          />

          {/* Cover Overlay Play Button or Waveform */}
          <div
            className={`absolute inset-0 flex items-center justify-center rounded-xl bg-black/45 transition-opacity duration-300 ${
              isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            {isCurrent && isPlaying ? (
              /* Premium Mini Equalizer Waveform Animation */
              <div className="flex items-end gap-0.5 h-4">
                <span
                  className="w-0.75 bg-blue-400 rounded-full animate-[bounce_0.8s_infinite_delay-100] h-3"
                  style={{ animationDelay: '0.1s' }}
                />
                <span
                  className="w-0.75 bg-indigo-400 rounded-full animate-[bounce_0.6s_infinite] h-4"
                  style={{ animationDelay: '0.3s' }}
                />
                <span
                  className="w-0.75 bg-purple-400 rounded-full animate-[bounce_0.7s_infinite_delay-200] h-2.5"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
            ) : (
              <Button
                icon={<PlayerIcon customClass="text-white h-5 w-5" />}
                aria-label="Play"
                onClick={handlePlayClick}
                className="p-0 bg-transparent hover:bg-transparent transform hover:scale-120 transition-transform flex items-center justify-center"
              />
            )}
          </div>
        </div>

        {/* Track Title and Artist */}
        <div className="flex-grow min-w-0 mr-4">
          <span
            className={`block font-bold truncate text-sm transition-colors duration-200 ${
              isCurrent
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-[var(--text-primary)]'
            }`}
          >
            {song.title}
          </span>
          <span className="block text-xs text-[var(--text-secondary)] opacity-80 truncate">
            {song.artistName} • {song.albumName}
          </span>
        </div>

        {/* Duration / Stats */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`text-xs font-semibold ${
              isCurrent ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400'
            }`}
          >
            {song.duration}
          </span>
        </div>
      </div>
    </div>
  );
};
