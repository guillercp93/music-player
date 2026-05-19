import React, { useState, useMemo } from 'react';
import { Layout } from './Layout';
import { songs } from '../utils/data-mock';
import { InLineBox } from '../components/UI/InLineBox';

/**
 * SongList container component.
 * Displays all available tracks in alphabetical order. Features a responsive real-time search engine
 * filtering songs by title, artist, or album. Automatically hooks into InLineBox items to establish
 * dynamic playback context queues loaded with the matching set.
 */
export const SongList = () => {
  /** The text string inputted in search to filter displayed tracks */
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Memoized Alphabetical Sorter.
   * Compiles and caches a copy of track listings sorted alphabetically by song title.
   */
  const sortedSongs = useMemo(() => {
    return [...songs].sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  /**
   * Memoized Search Filter.
   * Matches tracks against the active search query checking song titles, artist names, or album titles.
   */
  const filteredSongs = useMemo(() => {
    if (!searchQuery.trim()) return sortedSongs;
    const query = searchQuery.toLowerCase();
    return sortedSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(query) ||
        song.artistName.toLowerCase().includes(query) ||
        song.albumName.toLowerCase().includes(query)
    );
  }, [searchQuery, sortedSongs]);

  return (
    <Layout title="Your Songs">
      {/* Sleek Search Bar */}
      <div className="mb-6 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search songs, artists, albums..."
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

      <div className="grid grid-cols-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((data) => (
            <InLineBox
              key={data.id}
              song={data}
              allSongs={filteredSongs}
              customClass="transition-transform duration-300 active:scale-99"
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400 bg-white/5 dark:bg-black/10 rounded-2xl border border-slate-200/10 dark:border-slate-800/10">
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
            <p className="text-sm">No songs match your search</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
