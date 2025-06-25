import React from 'react';
import { songs } from '../../utils/data-mock';
import { Button } from '../UI/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  NextSongIcon,
  PauseSongIcon,
  PlaySongIcon,
  PreviousSongIcon,
  VolumeFullIcon,
} from '../icons';

export const MiniPlayer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/player') return null;

  const song = songs[0];

  return (
    <section className="container bg-secondary p-2 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <Link to="/player" viewTransition={true}>
          <img
            src={song.imageURL}
            alt="current-album"
            style={{ viewTransitionName: 'album-cover' }}
            className="w-12 h-12 rounded-lg"
          />
        </Link>
        <div className="flex flex-col h-full w-1/2 overflow-hidden">
          <span
            className={`text-lg font-semibold whitespace-nowrap text-ellipsis ${song.title.length > 30 ? 'animate-scroll-text' : ''}`}
          >
            {song.title}
          </span>
          <span
            className={`text-sm font-italic whitespace-nowrap text-ellipsis ${song.artistName.length > 30 ? 'animate-scroll-text' : ''}`}
          >
            {song.artistName}
          </span>
        </div>
        <Button icon={<PreviousSongIcon />} aria-label="Previous" />
        <Button icon={<PlaySongIcon />} aria-label="Play" />
        <Button
          icon={<PauseSongIcon />}
          aria-label="Pause"
          className="hidden"
        />
        <Button icon={<NextSongIcon />} aria-label="Next" />
        <Button icon={<VolumeFullIcon />} aria-label="Volume" />
      </div>
    </section>
  );
};
