import React from 'react';
import { Layout } from './Layout';
import { songs } from '../utils/data-mock';
import { InLineBox } from '../components/UI/InLineBox';
/**
 * A React component that displays a list of songs.
 *
 * @returns {React.ReactElement} A React element for the song list.
 */

export const SongList = () => {
  return (
    <Layout title="Your Songs">
      <div className="grid grid-cols-1 h-[calc(100vh-285px)] overflow-y-auto">
        {songs
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((data) => (
            <InLineBox key={data.id} song={data} customClass="" />
          ))}
      </div>
    </Layout>
  );
};
