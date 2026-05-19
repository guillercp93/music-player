import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { Layout } from './Layout';
import { Button, Tooltip, Vinyl } from '../components/UI';
import { usePlayer } from '../context/PlayerContext';
import {
  PreviousSongIcon,
  PauseSongIcon,
  PlaySongIcon,
  NextSongIcon,
  TranscriptIcon,
  VolumeFullIcon,
  VolumeOffIcon,
} from '../components/icons';
import { SearchTranscriptIcon } from '../components/icons/search-transcript-icon';

// Constants
const VINYL_SIZE = 280;
const ROTATION_SPEED = 25;

/**
 * Struct representing a parsed lyric line with a specific timestamp.
 */
interface LyricLine {
  /** Timestamp in seconds when this lyric line starts, or -1 if static plain text */
  time: number;
  /** Text content of the lyric line */
  text: string;
}

/**
 * Interactive Now Playing / Player screen component.
 * Displays details of the current track, features an interactive track progress bar,
 * audio navigation options (skip, play, pause, volume, mute), and a premium rotating vinyl disc wrapper.
 * Integrates an advanced scrolling lyrics parser with built-in text search highlighting and autoscrolling focus.
 */
export const Player = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    nextSong,
    previousSong,
    seekTo,
    volume,
    setVolume,
  } = usePlayer();

  // State
  /** Controls toggling between the rotating Vinyl cover view and the scrolling Lyrics view */
  const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);
  /** Stores the active search text entered by the user to query text within the lyrics */
  const [searchLyricsQuery, setSearchLyricsQuery] = useState('');
  /** Toggles search panel inputs visibility */
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Refs
  /** Reference attached to the scrollable container displaying parsed lyrics */
  const lyricContainerRef = useRef<HTMLDivElement | null>(null);
  /** Reference pointing to the currently active lyric paragraph element to calculate offsets */
  const activeLyricRef = useRef<HTMLParagraphElement | null>(null);

  // Memoized values
  /** Computes active percentage to fill the audio timeline track */
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  /**
   * Memoized Lyric Parser.
   * Scans raw timed string data formatted as `[mm:ss] lyric text` and transforms them
   * into a sorted list of objects containing time in seconds and matching texts.
   */
  const parsedLyrics = useMemo<LyricLine[]>(() => {
    if (!currentSong?.lyrics) return [];

    const lines = currentSong.lyrics.split('\n');
    const result: LyricLine[] = [];
    const timeRegex = /\[(\d{2}):(\d{2})\](.*)/;

    lines.forEach((line) => {
      const match = line.match(timeRegex);
      if (match) {
        const mins = parseInt(match[1], 10);
        const secs = parseInt(match[2], 10);
        const time = mins * 60 + secs;
        const text = match[3].trim();
        result.push({ time, text });
      } else if (line.trim()) {
        result.push({ time: -1, text: line.trim() });
      }
    });

    return result.sort((a, b) => a.time - b.time);
  }, [currentSong]);

  /**
   * Memoized Active Index Selector.
   * Pinpoints the exact index of the active lyric sentence by matching `currentTime`
   * against the parsed lyrics list timestamps.
   */
  const activeLyricIndex = useMemo(() => {
    if (parsedLyrics.length === 0) return -1;

    // Find the latest lyric that is <= currentTime
    let index = -1;
    for (let i = 0; i < parsedLyrics.length; i++) {
      if (parsedLyrics[i].time !== -1 && parsedLyrics[i].time <= currentTime) {
        index = i;
      } else if (parsedLyrics[i].time > currentTime) {
        break;
      }
    }
    return index;
  }, [parsedLyrics, currentTime]);

  /**
   * Autoscroll Effect.
   * Whenever `activeLyricIndex` transitions, calculates the relative container viewport offsets
   * and scrolls the active paragraph container perfectly into visual focus.
   */
  useEffect(() => {
    if (activeLyricRef.current && lyricContainerRef.current) {
      const container = lyricContainerRef.current;
      const element = activeLyricRef.current;

      const containerHeight = container.clientHeight;
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.clientHeight;

      container.scrollTo({
        top: elementOffsetTop - containerHeight / 2 + elementHeight / 2,
        behavior: 'smooth',
      });
    }
  }, [activeLyricIndex]);

  /**
   * Audio Timeline Click Handler.
   * Pinpoints mouse coordinate clicks on the slider element to calculate target seconds
   * and dispatches play-seek actions to the playback controller.
   */
  const handleProgressBarClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (duration === 0) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = Math.max(0, Math.min(clickPosition * duration, duration));
      seekTo(newTime);
    },
    [duration, seekTo]
  );

  /**
   * Utility helper to convert raw total seconds into clean structured minutes/seconds representation (e.g. 3:45).
   */
  const formatTime = useCallback((seconds: number): string => {
    if (isNaN(seconds) || seconds === null) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }, []);

  /**
   * Dispatches volume updates based on slider coordinates.
   */
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  /**
   * Toggles audio output between absolute mute (0.0) and comfortable audible state (0.8).
   */
  const handleVolumeIconClick = () => {
    setVolume(volume > 0 ? 0 : 0.8);
  };

  if (!currentSong) {
    return (
      <Layout title="Now Playing">
        <div className="flex flex-col items-center justify-center h-96 text-slate-400">
          <p className="text-xl">No song selected</p>
          <p className="text-sm mt-2">
            Go to Albums, Artists, or Songs to choose a track!
          </p>
        </div>
      </Layout>
    );
  }

  /**
   * Rich Highlighter.
   * Injects highlighted `<mark>` nodes dynamically inside sentences that match
   * the queried `searchLyricsQuery` values.
   *
   * @param text - The original lyric line text to inspect and highlight.
   */
  const highlightLyrics = (text: string) => {
    if (!searchLyricsQuery) return text;
    const parts = text.split(new RegExp(`(${searchLyricsQuery})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === searchLyricsQuery.toLowerCase() ? (
            <mark
              key={i}
              className="bg-yellow-400 dark:bg-yellow-600 text-black px-1 rounded-sm"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <Layout title="Now Playing">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto px-4 py-6">
        {/* Left Side: Disc/Vinyl or Lyrics */}
        <div className="relative w-full max-w-md flex flex-col items-center justify-center shrink-0">
          {isTranscriptVisible ? (
            <div className="w-full flex flex-col gap-3 bg-[var(--bg-secondary)]/50 backdrop-blur-md border border-slate-200/10 dark:border-slate-800/30 rounded-3xl p-6 shadow-2xl h-[380px]">
              <div className="flex items-center justify-between border-b border-slate-200/10 dark:border-slate-800/30 pb-3">
                <span className="text-sm font-extrabold tracking-wider uppercase text-slate-400">
                  Lyrics / Letra
                </span>
                <div className="flex items-center gap-2">
                  {isSearchActive && (
                    <input
                      type="text"
                      placeholder="Search lyric..."
                      value={searchLyricsQuery}
                      onChange={(e) => setSearchLyricsQuery(e.target.value)}
                      className="text-xs px-2.5 py-1 bg-white/10 dark:bg-black/20 border border-slate-200/10 dark:border-slate-800/30 rounded-lg focus:outline-none focus:border-blue-500 w-32 transition-all duration-300"
                    />
                  )}
                  <Button
                    icon={<SearchTranscriptIcon />}
                    onClick={() => {
                      setIsSearchActive(!isSearchActive);
                      if (isSearchActive) setSearchLyricsQuery('');
                    }}
                    className="p-1.5 rounded-lg hover:bg-slate-200/40 dark:hover:bg-slate-800/50"
                  />
                </div>
              </div>

              {/* Scrollable Lyrics Container */}
              <div
                ref={lyricContainerRef}
                className="flex-grow overflow-y-auto pr-2 space-y-4 scroll-smooth"
              >
                {parsedLyrics.length > 0 ? (
                  parsedLyrics.map((lyric, idx) => {
                    const isLineActive = idx === activeLyricIndex;
                    const matchesSearch =
                      searchLyricsQuery &&
                      lyric.text
                        .toLowerCase()
                        .includes(searchLyricsQuery.toLowerCase());
                    return (
                      <p
                        key={idx}
                        ref={isLineActive ? activeLyricRef : null}
                        onClick={() => lyric.time !== -1 && seekTo(lyric.time)}
                        className={`text-base md:text-lg text-center cursor-pointer py-1.5 rounded-xl transition-all duration-300 ${
                          isLineActive
                            ? 'text-blue-500 dark:text-blue-400 font-extrabold scale-102 bg-blue-500/5 dark:bg-blue-500/10 px-4'
                            : matchesSearch
                              ? 'text-yellow-500 font-bold bg-yellow-500/5 px-2'
                              : 'text-[var(--text-secondary)] opacity-50 hover:opacity-100 hover:scale-101'
                        }`}
                      >
                        {highlightLyrics(lyric.text)}
                      </p>
                    );
                  })
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    <p className="text-sm">No lyrics available for this song</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full border border-slate-200/10 dark:border-slate-800/20 shadow-2xl relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <Vinyl
                imageURL={currentSong.imageURL}
                isPlaying={isPlaying}
                title={currentSong.title}
                size={VINYL_SIZE}
                rotationSpeed={ROTATION_SPEED}
              />
            </div>
          )}
        </div>

        {/* Right Side: Track details & controls */}
        <div className="w-full max-w-lg flex flex-col gap-6">
          <div className="text-center lg:text-left">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 bg-blue-500/10 rounded-full inline-block mb-3">
              {currentSong.albumName}
            </span>
            <h2 className="text-4xl font-black text-[var(--text-primary)] truncate tracking-tight mb-2">
              {currentSong.title}
            </h2>
            <p className="text-2xl text-[var(--text-secondary)] font-medium opacity-90 truncate">
              {currentSong.artistName}
            </p>
          </div>

          {/* Progress Slider */}
          <div className="relative w-full bg-[var(--bg-secondary)]/50 backdrop-blur-md border border-slate-200/10 dark:border-slate-800/20 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[var(--text-secondary)] opacity-85">
                {formatTime(currentTime)}
              </span>
              <span className="text-xs font-semibold text-[var(--text-secondary)] opacity-85">
                {formatTime(duration)}
              </span>
            </div>

            {/* Slider progress track */}
            <div
              className="relative h-2 bg-slate-200 dark:bg-slate-700/80 rounded-full cursor-pointer group transition-all duration-200 hover:h-2.5 overflow-hidden"
              onClick={handleProgressBarClick}
              role="progressbar"
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
              <div
                className="absolute w-3 h-3 bg-white rounded-full border-2 border-indigo-500 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                style={{ left: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Player controls */}
          <div className="flex flex-col items-center gap-4 bg-[var(--bg-secondary)]/50 backdrop-blur-md border border-slate-200/10 dark:border-slate-800/20 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-center gap-8 w-full">
              <Button
                icon={<PreviousSongIcon />}
                aria-label="Previous"
                onClick={previousSong}
                className="p-3 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:scale-110 active:scale-95 transition-all text-[var(--text-primary)]"
              />

              <Button
                icon={isPlaying ? <PauseSongIcon /> : <PlaySongIcon />}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                onClick={togglePlay}
                className="p-4 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:scale-115 active:scale-90 transition-all border border-blue-400/20"
              />

              <Button
                icon={<NextSongIcon />}
                aria-label="Next"
                onClick={nextSong}
                className="p-3 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:scale-110 active:scale-95 transition-all text-[var(--text-primary)]"
              />
            </div>

            {/* Volume slider & quick toggles */}
            <div className="flex items-center justify-between w-full border-t border-slate-200/10 dark:border-slate-800/30 pt-3 mt-1">
              <div className="flex items-center gap-3 w-1/2">
                <Button
                  icon={volume > 0 ? <VolumeFullIcon /> : <VolumeOffIcon />}
                  onClick={handleVolumeIconClick}
                  className="p-2 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/50 text-[var(--text-primary)] active:scale-95"
                />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full accent-blue-500 h-1 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer transition-all focus:outline-none"
                  aria-label="Volume Slider"
                />
              </div>

              {/* View options (Lyrics vs Vinyl) */}
              <div className="flex items-center gap-2">
                <Tooltip
                  text={isTranscriptVisible ? 'Show Vinyl' : 'Show Lyrics'}
                >
                  <Button
                    icon={<TranscriptIcon />}
                    onClick={() => setIsTranscriptVisible(!isTranscriptVisible)}
                    className={`p-2.5 rounded-full transition-all duration-200 ${
                      isTranscriptVisible
                        ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
                        : 'hover:bg-slate-200/40 dark:hover:bg-slate-800/50 text-[var(--text-primary)]'
                    }`}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
