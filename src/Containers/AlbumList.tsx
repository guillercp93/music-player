import React from 'react';
import { Layout } from './Layout';
import { Box } from '../components/UI/Box';
import { albums } from '../utils/data-mock';
/**
 * A React component that displays a list of albums.
 *
 * @returns {React.ReactElement} A React element for the album list.
 */

export const AlbumList = () => {
  return (
    <Layout title="Your Albums">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 h-[calc(100vh-285px)] overflow-y-auto">
        {albums.map((data) => (
          <Box
            key={data.id}
            image={data.imageURL}
            title={data.title}
            description={data.artistName}
            customClass="group relative bg-[var(--bg-secondary)] rounded-xl p-4 shadow-xl transition-all duration-300 transform cursor-pointer"
          />
        ))}
      </div>
    </Layout>
  );
};
