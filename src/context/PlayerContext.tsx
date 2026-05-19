import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Song } from '../Interfaces/Song';
import { songs as mockSongs } from '../utils/data-mock';

/**
 * Context interface defining the audio player playback state and actions.
 */
interface PlayerContextType {
  /** The song currently loaded or playing, or null if none is selected */
  currentSong: Song | null;
  /** True if the audio player is currently playing, false if paused or stopped */
  isPlaying: boolean;
  /** Current playback time in seconds */
  currentTime: number;
  /** Total duration of the current song in seconds */
  duration: number;
  /** Current volume level, bounded between 0.0 (muted) and 1.0 (maximum) */
  volume: number;
  /** The current playlist/playback queue of songs */
  queue: Song[];
  /** Index of the currentSong within the active queue, or -1 if queue is empty */
  currentQueueIndex: number;
  /**
   * Loads a specific song and begins playback. Optionally updates the current queue.
   *
   * @param song - The Song object to play.
   * @param customQueue - An optional array of songs to set as the active queue.
   */
  playSong: (song: Song, customQueue?: Song[]) => void;
  /** Toggles the playback state between playing and paused. */
  togglePlay: () => void;
  /** Advances playback to the next song in the queue (wrapping around if needed). */
  nextSong: () => void;
  /**
   * Navigates to the previous song in the queue.
   * Restarts the current song instead if more than 3 seconds of the track have played.
   */
  previousSong: () => void;
  /**
   * Seeks to a specific timestamp in the current song.
   *
   * @param time - Position in seconds to seek to.
   */
  seekTo: (time: number) => void;
  /**
   * Updates the volume, persists it to localStorage, and updates the active Audio element.
   *
   * @param vol - New volume level between 0.0 and 1.0.
   */
  setVolume: (vol: number) => void;
  /**
   * Appends a song to the active queue if it is not already present.
   *
   * @param song - The song to append to the queue.
   */
  addToQueue: (song: Song) => void;
}

const PlayerContext = createContext<PlayerContextType>({
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.8,
  queue: [],
  currentQueueIndex: -1,
  playSong: () => {},
  togglePlay: () => {},
  nextSong: () => {},
  previousSong: () => {},
  seekTo: () => {},
  setVolume: () => {},
  addToQueue: () => {},
});

/**
 * Global audio player provider component.
 * Wraps HTML5 Audio API to manage centralized media state, synchronize local state,
 * handle queue transitions, support desktop Media Session API controls, and persist
 * volume/history to localStorage.
 */
export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(0.8);
  const [queue, setQueue] = useState<Song[]>(mockSongs);
  const [currentQueueIndex, setCurrentQueueIndex] = useState<number>(-1);

  /** Ref to hold the HTMLAudioElement instance */
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /**
   * Audio Initialization Lifecycle Effect.
   * Configures HTMLAudioElement instance, reads persisted volume and song settings,
   * registers core audio event listeners (timeupdate, loadedmetadata, ended),
   * and disposes of event listeners on component unmount.
   */
  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume;
    audioRef.current = audio;

    // Load persisted state if exists
    const persistedVolume = localStorage.getItem('player-volume');
    if (persistedVolume !== null) {
      const vol = parseFloat(persistedVolume);
      setVolumeState(vol);
      audio.volume = vol;
    }

    const persistedSongId = localStorage.getItem('player-current-song-id');
    if (persistedSongId !== null) {
      const id = parseInt(persistedSongId, 10);
      const song = mockSongs.find((s) => s.id === id);
      if (song) {
        setCurrentSong(song);
        const idx = mockSongs.findIndex((s) => s.id === id);
        setCurrentQueueIndex(idx);
        audio.src =
          song.audioUrl ||
          `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(song.id % 7) + 1}.mp3`;
      }
    } else if (mockSongs.length > 0) {
      setCurrentSong(mockSongs[0]);
      setCurrentQueueIndex(0);
      audio.src =
        mockSongs[0].audioUrl ||
        `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(mockSongs[0].id % 7) + 1}.mp3`;
    }

    // Audio Event Listeners
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 180);
    };

    const onEnded = () => {
      nextSongRef.current();
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Mutable reference pointing to nextSong to bypass stale closures inside the HTMLAudioElement 'ended' event listener */
  const nextSongRef = useRef<() => void>(() => {});

  /**
   * Sets up a song for active playback, updates the track indices and queues,
   * stores history parameters, and initiates native audio device playback.
   */
  const playSong = (song: Song, customQueue?: Song[]) => {
    if (!audioRef.current) return;

    const newQueue = customQueue || queue.length > 0 ? queue : mockSongs;
    if (customQueue) {
      setQueue(customQueue);
    }

    const songIndex = newQueue.findIndex((s) => s.id === song.id);
    setCurrentQueueIndex(songIndex !== -1 ? songIndex : 0);
    setCurrentSong(song);
    localStorage.setItem('player-current-song-id', song.id.toString());

    audioRef.current.src =
      song.audioUrl ||
      `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(song.id % 7) + 1}.mp3`;
    audioRef.current.currentTime = 0;

    // Play with error handling
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          updateMediaSession(song);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.warn('Playback prevented or interrupted:', err);
          setIsPlaying(false);
        });
    }
  };

  /**
   * Toggles audio stream state between play and pause. Resolves promise blockages on browsers that restrict autoplay.
   */
  const togglePlay = () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            updateMediaSession(currentSong);
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.warn('Playback prevented:', err);
          });
      }
    }
  };

  /**
   * Triggers playback for the next track in sequence. Loops back to start when reaching the queue boundary.
   */
  const nextSong = () => {
    if (queue.length === 0) return;
    const nextIdx = (currentQueueIndex + 1) % queue.length;
    playSong(queue[nextIdx]);
  };

  /**
   * Triggers playback for the previous song in queue.
   * If current track duration elapsed is > 3 seconds, restarts the current track instead.
   */
  const previousSong = () => {
    if (queue.length === 0) return;
    // If song played for more than 3 seconds, restart it. Otherwise go to previous
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    const prevIdx =
      currentQueueIndex - 1 < 0 ? queue.length - 1 : currentQueueIndex - 1;
    playSong(queue[prevIdx]);
  };

  // Sync the nextSongRef whenever the queue composition or track index updates.
  useEffect(() => {
    nextSongRef.current = nextSong;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQueueIndex, queue]);

  /**
   * Adjusts the current playback pointer in seconds.
   */
  const seekTo = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  /**
   * Sets the volume, updates localStorage persistence registry, and updates the target HTMLAudioElement.
   */
  const setVolume = (vol: number) => {
    const normalizedVol = Math.max(0, Math.min(1, vol));
    setVolumeState(normalizedVol);
    localStorage.setItem('player-volume', normalizedVol.toString());
    if (audioRef.current) {
      audioRef.current.volume = normalizedVol;
    }
  };

  /**
   * Dynamically registers a track to the bottom of the active playlist queue.
   */
  const addToQueue = (song: Song) => {
    if (queue.some((s) => s.id === song.id)) return;
    setQueue((prev) => [...prev, song]);
  };

  /**
   * Integrates local state attributes with the native OS Media Session API.
   * Maps playing details, track images, and key keyboard triggers (play, pause, skip).
   */
  const updateMediaSession = (song: Song) => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: song.title,
        artist: song.artistName,
        album: song.albumName,
        artwork: [
          { src: song.imageURL, sizes: '96x96', type: 'image/jpeg' },
          { src: song.imageURL, sizes: '128x128', type: 'image/jpeg' },
          { src: song.imageURL, sizes: '192x192', type: 'image/jpeg' },
          { src: song.imageURL, sizes: '256x256', type: 'image/jpeg' },
          { src: song.imageURL, sizes: '384x384', type: 'image/jpeg' },
          { src: song.imageURL, sizes: '512x512', type: 'image/jpeg' },
        ],
      });

      navigator.mediaSession.setActionHandler('play', () => togglePlay());
      navigator.mediaSession.setActionHandler('pause', () => togglePlay());
      navigator.mediaSession.setActionHandler('previoustrack', () =>
        previousSong()
      );
      navigator.mediaSession.setActionHandler('nexttrack', () => nextSong());
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        queue,
        currentQueueIndex,
        playSong,
        togglePlay,
        nextSong,
        previousSong,
        seekTo,
        setVolume,
        addToQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

/**
 * Custom React hook to consumer-access the PlayerContext values.
 * Must be used inside components wrapped in PlayerProvider.
 *
 * @returns The global audio state attributes and dispatch actions.
 */
export const usePlayer = () => useContext(PlayerContext);
