import React from 'react';
import { Layout } from './Layout';
import { Box } from '../components/UI/Box';
import { artists } from '../utils/data-mock';
/**
 * A React component that displays a list of artists.
 *
 * @returns {React.ReactElement} A React element for the artist list.
 */

export const ArtistList = () => {
  return (
    <Layout title="Your Artists">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 h-[calc(100vh-285px)] overflow-y-auto">
        {artists
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((data) => (
            <Box
              key={data.id}
              image={data.imageURL}
              title={data.name}
              customClass="group relative bg-[var(--bg-secondary)] rounded-xl p-4 shadow-xl transition-all duration-300 transform cursor-pointer"
            />
          ))}
      </div>
    </Layout>
  );
};
