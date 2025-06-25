import React from 'react';
import { Song } from '../../Interfaces/Song';
import { Button } from './Button';
import { PlayerIcon } from '../icons';
/**
 * A React component that displays a song in an in-line box, with the album art,
 * title, artist name, and duration.
 *
 * @param {Song} song - The song to be displayed in the in-line box.
 * @param {string} [customClass] - An optional custom CSS class for the component.
 * @returns {React.ReactElement} A React element for the in-line box.
 */
export const InLineBox = ({
  song,
  customClass,
}: {
  song: Song;
  customClass?: string;
}) => {
  return (
    <div className={customClass}>
      <div className="flex flex-row items-center justify-between bg-[var(--bg-secondary)] px-3 py-2 rounded-xl">
        <div className="relative w-12 h-12 mr-3 group">
          <img
            srcSet={song.imageURL}
            alt={song.title}
            loading="lazy"
            className="w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-lg">
            <Button
              icon={<PlayerIcon customClass="text-white h-6 w-6" />}
              aria-label="Play"
              className="rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-transparent p-0"
            />
          </div>
        </div>
        <span className="font-semibold truncate whitespace-nowrap w-70">
          {song.title}
        </span>
        <span className="text-sm text-gray-500 truncate whitespace-nowrap w-50">
          {song.artistName}
        </span>
        <span className="text-sm text-gray-500 whitespace-nowrap w-10 ml-3">
          {song.duration}
        </span>
      </div>
    </div>
  );
};
