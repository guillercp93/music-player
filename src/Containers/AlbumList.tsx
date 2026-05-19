import React, { useState, useMemo } from 'react';
import { Layout } from './Layout';
import { Box } from '../components/UI/Box';
import { albums, songs } from '../utils/data-mock';
import { usePlayer } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';

/**
 * AlbumList container component.
 * Renders all available music albums in a premium grid layout.
 * Features an instantaneous search function matching query terms against album titles or artist names.
 * When playing an album, automatically loads all corresponding album tracks into the playback queue
 * and smoothly redirects the viewport to the main Player container.
 */
export const AlbumList = () => {
  const { playSong } = usePlayer();
  const navigate = useNavigate();
  /** Holds the active search query to filter displayed albums */
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Memoized Search Filter.
   * Compiles and caches a list of albums matching the search query against album titles or artist names.
   */
  const filteredAlbums = useMemo(() => {
    if (!searchQuery.trim()) return albums;
    const query = searchQuery.toLowerCase();
    return albums.filter(
      (album) =>
        album.title.toLowerCase().includes(query) ||
        album.artistName.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  /**
   * Queries and compiles all songs belonging to a specified album ID,
   * configures them as the current active playlist queue, triggers playing the first song,
   * and navigates to the core media player screen.
   *
   * @param albumId - The ID of the album to load and play.
   */
  const handlePlayAlbum = (albumId: number) => {
    const albumSongs = songs.filter((s) => s.albumID === albumId);
    if (albumSongs.length > 0) {
      playSong(albumSongs[0], albumSongs);
      navigate('/player');
    }
  };

  return (
    <Layout title="Your Albums">
      {/* Sleek Search Bar */}
      <div className="mb-6 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search albums by name or artist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 pl-12 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-slate-200/10 dark:border-slate-800/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm transition-all duration-300 shadow-lg text-[var(--text-primary)] placeholder-slate-400"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[var(--text-primary)] p-1 rounded-full hover:bg-slate-200/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((data) => (
            <Box
              key={data.id}
              image={data.imageURL}
              title={data.title}
              description={data.artistName}
              onClick={() => handlePlayAlbum(data.id)}
              customClass="bg-[var(--bg-secondary)]/50 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-slate-400 bg-white/5 dark:bg-black/10 rounded-2xl border border-slate-200/10 dark:border-slate-800/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 mb-3 opacity-60"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <p className="text-sm">No albums match your search</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
