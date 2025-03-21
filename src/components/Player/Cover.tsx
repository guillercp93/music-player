import React from 'react';
import { Layout } from '../../Containers/Layout';

interface SongCoverProps {
  coverUrl: string;
  isPlaying: boolean;
  title: string;
  artist: string;
}

export const SongCover: React.FC<SongCoverProps> = ({
  coverUrl,
  isPlaying,
  title,
  artist,
}) => {
  return (
    <Layout>
      <div className="song-turntable relative">
        <div
          className={`turntable-base rounded-full bg-gray-800 p-1 shadow-lg ${isPlaying ? 'animate-spin' : ''}`}
          style={{ animationDuration: '3s' }}
        >
          <div className="song-cover rounded-full overflow-hidden aspect-square">
            <img
              src={coverUrl}
              alt={`${title} by ${artist}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://t2.genius.com/unsafe/938x0/https%3A%2F%2Fimages.genius.com%2Ff586fdb2d9e5f53f0fe0390b53782c1c.1000x1000x1.png';
              }}
            />
          </div>
          <div className="turntable-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-200"></div>
        </div>
        <div className="turntable-arm absolute top-0 right-0 h-1/2 w-4 bg-gray-600 origin-bottom-left transform rotate-45"></div>
      </div>
    </Layout>
  );
};
