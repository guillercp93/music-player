import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Layout } from './Layout';
import { Button, Tooltip, Vinyl } from '../components/UI';
import {
  PreviousSongIcon,
  PauseSongIcon,
  PlaySongIcon,
  NextSongIcon,
  TranscriptIcon,
} from '../components/icons';
import { SearchTranscriptIcon } from '../components/icons/search-transcript-icon';

// Constants
const DEFAULT_DURATION = 180; // 3 minutes in seconds
const VINYL_SIZE = 349;
const ROTATION_SPEED = 40;

interface TrackInfo {
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  duration: number;
  lyrics: string;
}

export const Player = () => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);
  const [trackInfo] = useState<TrackInfo>({
    title: 'Title Song',
    artist: 'Artist Name',
    album: 'Album Name',
    coverUrl: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    duration: DEFAULT_DURATION,
    lyrics: Array.from({ length: 20 })
      .map(
        (_, i) =>
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
        ultrices nibh. Sed nec tellus vel erat malesuada ultricies. Nulla
        facilisi. Sed euismod, erat et ullamcorper auctor, nunc ex suscipit
        lectus, sed maximus nunc nunc in nibh. ${i + 1}`
      )
      .join('\n'),
  });

  // Refs
  const animationFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  // Memoized values
  const progressPercentage = (currentTime / trackInfo.duration) * 100;

  // Handlers
  const togglePlay = useCallback(() => {
    if (!isPlaying) {
      startTimeRef.current = Date.now() - currentTime * 1000;
      startProgressAnimation();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying, currentTime]);

  const selectCurrentTime = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = Math.max(
        0,
        Math.min(clickPosition * trackInfo.duration, trackInfo.duration)
      );

      setCurrentTime(newTime);
      if (isPlaying) {
        startTimeRef.current = Date.now() - newTime * 1000;
      }
    },
    [isPlaying, trackInfo.duration]
  );

  // Animation
  const startProgressAnimation = useCallback(() => {
    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      if (elapsed >= trackInfo.duration) {
        setCurrentTime(trackInfo.duration);
        setIsPlaying(false);
        return;
      }
      setCurrentTime(elapsed);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [trackInfo.duration]);

  // Effects
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Utility functions
  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }, []);

  function selectPreviousSong(
    event: React.MouseEvent<HTMLButtonElement>
  ): void {
    event.preventDefault();
  }

  function selectNextSong(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
  }

  function toggleTranscript(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setIsTranscriptVisible((prev) => !prev);
  }

  return (
    <Layout title="Now Playing">
      <div className="flex flex-col items-center justify-center p-8 gap-8">
        {isTranscriptVisible ? (
          <div className="w-full max-w-md">
            <textarea
              value={trackInfo.lyrics}
              readOnly
              className={`w-full h-[calc(${VINYL_SIZE}px * 10)] p-2 border border-[var(--accent-color)] rounded-lg resize-none`}
            />
          </div>
        ) : (
          <Vinyl
            imageURL={trackInfo.coverUrl}
            isPlaying={isPlaying}
            title={trackInfo.title}
            size={VINYL_SIZE}
            rotationSpeed={ROTATION_SPEED}
          />
        )}

        <div className="text-center w-full max-w-md">
          <h2
            className="text-3xl font-bold text-[var(--text-primary)] mb-2 truncate"
            title={trackInfo.title}
          >
            {trackInfo.title}
          </h2>
          <p
            className="text-xl text-[var(--text-secondary)] mb-1 truncate"
            title={trackInfo.album}
          >
            {trackInfo.album}
          </p>
          <p
            className="text-lg text-[var(--text-secondary)] truncate opacity-80"
            title={trackInfo.artist}
          >
            {trackInfo.artist}
          </p>
        </div>

        <div className="relative w-full max-w-md">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-[var(--text-secondary)]">
              {formatTime(currentTime)}
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              {formatTime(trackInfo.duration)}
            </span>
          </div>
          <div
            className="relative h-2 bg-[var(--accent-color)] rounded-full cursor-pointer overflow-hidden group"
            onClick={selectCurrentTime}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-white rounded-full transform -translate-y-1/2 translate-x-1/2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full max-w-md mt-4">
          <Button
            icon={<PreviousSongIcon />}
            aria-label="Previous"
            onClick={selectPreviousSong}
            className="group hover:scale-130 transition-transform"
          />
          <Button
            icon={<PauseSongIcon />}
            aria-label="Pause"
            onClick={togglePlay}
            className={`${isPlaying ? '' : 'hidden'} group hover:scale-130 transition-transform`}
          />
          <Button
            icon={<PlaySongIcon />}
            aria-label="Play"
            onClick={togglePlay}
            className={`${isPlaying ? 'hidden' : ''} group hover:scale-130 transition-transform`}
          />
          <Button
            icon={<NextSongIcon />}
            aria-label="Next"
            onClick={selectNextSong}
            className="group hover:scale-130 transition-transform"
          />
        </div>
        <div className="flex flex-row gap-4">
          <Tooltip text="Show transcript">
            <Button
              icon={<TranscriptIcon />}
              aria-label="Show transcript"
              onClick={toggleTranscript}
              className="group hover:scale-130 transition-transform"
            />
          </Tooltip>
          <Tooltip text="Search transcript">
            <Button
              icon={<SearchTranscriptIcon />}
              aria-label="Search transcript"
              onClick={() => null}
              className="group hover:scale-130 transition-transform"
            />
          </Tooltip>
        </div>
      </div>
    </Layout>
  );
};
