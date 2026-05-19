import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../UI/Button';
import { usePlayer } from '../../context/PlayerContext';
import {
  NextSongIcon,
  PauseSongIcon,
  PlaySongIcon,
  PreviousSongIcon,
  VolumeFullIcon,
  VolumeOffIcon,
} from '../icons';

export const MiniPlayer = () => {
  const { pathname } = useLocation();
  const {
    currentSong,
    isPlaying,
    togglePlay,
    nextSong,
    previousSong,
    volume,
    setVolume,
  } = usePlayer();

  if (pathname === '/player') return null;
  if (!currentSong) return null;

  const handleVolumeToggle = () => {
    setVolume(volume > 0 ? 0 : 0.8);
  };

  return (
    <section className="fixed bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] z-40 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/5 p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="flex flex-row items-center justify-between gap-3">
        {/* Album Art Link */}
        <Link
          to="/player"
          viewTransition={true}
          className="shrink-0 group relative"
        >
          <img
            src={currentSong.imageURL}
            alt="current-album"
            style={{ viewTransitionName: 'album-cover' }}
            className={`w-12 h-12 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105 ${
              isPlaying ? 'animate-[spin_20s_linear_infinite]' : ''
            }`}
          />
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </div>
          )}
        </Link>

        {/* Track Title and Artist */}
        <div className="flex flex-col h-full flex-grow min-w-0">
          <Link to="/player" className="hover:underline">
            <span className="block text-sm font-bold truncate text-[var(--text-primary)]">
              {currentSong.title}
            </span>
          </Link>
          <span className="block text-xs text-[var(--text-secondary)] truncate opacity-80">
            {currentSong.artistName}
          </span>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-1 shrink-0">
          <Button
            icon={<PreviousSongIcon />}
            aria-label="Previous"
            onClick={previousSong}
            className="p-2 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/50 text-[var(--text-primary)] transition-transform active:scale-90"
          />

          <Button
            icon={isPlaying ? <PauseSongIcon /> : <PlaySongIcon />}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 transition-transform active:scale-90"
          />

          <Button
            icon={<NextSongIcon />}
            aria-label="Next"
            onClick={nextSong}
            className="p-2 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/50 text-[var(--text-primary)] transition-transform active:scale-90"
          />

          <Button
            icon={volume > 0 ? <VolumeFullIcon /> : <VolumeOffIcon />}
            aria-label="Volume"
            onClick={handleVolumeToggle}
            className="p-2 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/50 text-[var(--text-primary)] transition-transform active:scale-90 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};
