// src/components/Library/Library.tsx
import React from 'react';
import { Layout } from '../../Containers/Layout';

interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  year: number;
}

const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    coverUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png',
    year: 2013,
  },
  {
    id: '2',
    title: 'Abbey Road',
    artist: 'The Beatles',
    coverUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
    year: 1969,
  },
  {
    id: '3',
    title: 'Dark Side of the Moon',
    artist: 'Pink Floyd',
    coverUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
    year: 1973,
  },
];

export const Albums: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Music Library</h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {mockAlbums.map((album) => (
            <div
              key={album.id}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 mb-3">
                <img
                  src={album.coverUrl}
                  alt={`${album.title} album cover`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://t2.genius.com/unsafe/938x0/https%3A%2F%2Fimages.genius.com%2Ff586fdb2d9e5f53f0fe0390b53782c1c.1000x1000x1.png';
                  }}
                />
              </div>
              <h3 className="font-semibold text-base">{album.title}</h3>
              <p className="text-secondary text-sm">{album.artist}</p>
              <p className="text-xs text-secondary mt-1">{album.year}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
