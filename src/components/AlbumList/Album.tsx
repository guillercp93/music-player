import React from 'react';
import { PlayerIcon } from '../icons';

interface AlbumProps {
  image: string;
  title: string;
  artistName: string;
  customClass?: string;
}

export const Album = ({
  image,
  title,
  artistName,
  customClass,
}: AlbumProps) => {
  return (
    <div className={customClass}>
      <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg mb-4 overflow-hidden">
        <img
          srcSet={image}
          className="w-full h-full flex items-center justify-center text-4xl font-bold opacity-90"
          alt={title}
        />
      </div>
      <h2 className="text-lg font-semibold text-[var(--text-primary)] truncate">
        {title}
      </h2>
      <p className="text-[var(--text-secondary)] text-sm mt-1">{artistName}</p>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-xl">
        <button className="w-7 h-7 bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-full flex items-center justify-center text-white transform transition-all duration-200 hover:scale-110">
          <PlayerIcon customClass="h-7 w-7" />
        </button>
      </div>
    </div>
  );
};
