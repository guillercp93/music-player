import React, { useState, useMemo } from 'react';
import { Layout } from './Layout';
import { Box } from '../components/UI/Box';
import { artists, songs } from '../utils/data-mock';
import { usePlayer } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';

/**
 * ArtistList container component.
 * Renders all music artists in an interactive card grid.
 * Features alphabetical sorting and dynamic text-filtering based on real-time search queries.
 * Clicking to play an artist gathers all of their songs as the new playback queue context,
 * plays the first track immediately, and navigates seamlessly to the Now Playing screen.
 */
export const ArtistList = () => {
  const { playSong } = usePlayer();
  const navigate = useNavigate();
  /** The text string inputted in search to filter displayed artists */
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Memoized Alphabetical Sorter.
   * Compiles and caches a copy of the artists list sorted alphabetically by name.
   */
  const sortedArtists = useMemo(() => {
    return [...artists].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  /**
   * Memoized Search Filter.
   * Compiles and caches a list of artists whose names match the current search query.
   */
  const filteredArtists = useMemo(() => {
    if (!searchQuery.trim()) return sortedArtists;
    const query = searchQuery.toLowerCase();
    return sortedArtists.filter((artist) =>
      artist.name.toLowerCase().includes(query)
    );
  }, [searchQuery, sortedArtists]);

  /**
   * Locates and gathers all tracks belonging to a given artist ID,
   * configures them as the new global playback queue, starts playing the first track,
   * and navigates to the active media player screen.
   *
   * @param artistId - The ID of the artist to load and play.
   */
  const handlePlayArtist = (artistId: number) => {
    const artistSongs = songs.filter((s) => s.artistID === artistId);
    if (artistSongs.length > 0) {
      playSong(artistSongs[0], artistSongs);
      navigate('/player');
    }
  };

  return (
    <Layout title="Your Artists">
      {/* Sleek Search Bar */}
      <div className="mb-6 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search artists..."
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
        {filteredArtists.length > 0 ? (
          filteredArtists.map((data) => (
            <Box
              key={data.id}
              image={data.imageURL}
              title={data.name}
              onClick={() => handlePlayArtist(data.id)}
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
            <p className="text-sm">No artists match your search</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
