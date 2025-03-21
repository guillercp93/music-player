import React from 'react';
import { Layout } from '../../Containers/Layout';

export const Playlists = () => {
  return (
    <Layout>
      <div className="p-6 bg-[var(--bg-secondary)]">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Playlists
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for playlists */}
          <div className="p-4 rounded-lg bg-[var(--bg-primary)] shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              Favorites
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">15 songs</p>
          </div>

          <div className="p-4 rounded-lg bg-[var(--bg-primary)] shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              Workout Mix
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">8 songs</p>
          </div>

          <div className="p-4 rounded-lg bg-[var(--bg-primary)] shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              Chill Vibes
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">12 songs</p>
          </div>
        </div>

        <button className="mt-6 px-4 py-2 bg-[var(--accent-color)] text-white rounded-md hover:opacity-90 transition-opacity">
          Create New Playlist
        </button>
      </div>
    </Layout>
  );
};
