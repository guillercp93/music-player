import React from 'react';
import { Song } from '../../Interfaces/Song';

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
        <img src={song.imageURL} alt={song.title} className="w-12 h-12 mr-3" />
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
