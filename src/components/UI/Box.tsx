import React from 'react';
import { PlayerIcon } from '../icons';
import { Button } from './Button';
/**
 * Props for the `Box` UI layout component.
 */
interface BoxProps {
  /** The source URL of the background album or artist image */
  image: string;
  /** The primary title text to display */
  title: string;
  /** The secondary details text (e.g. artist name, album type). Optional. */
  description?: string;
  /** Custom CSS utility classes to apply to the root wrapper container. Optional. */
  customClass?: string;
  /** Callback triggered when the entire card container is clicked. Optional. */
  onClick?: () => void;
  /**
   * Callback triggered when the hover overlay Play button is explicitly clicked.
   * If not provided, will automatically fall back to invoking `onClick`. Optional.
   */
  onPlayClick?: (e: React.MouseEvent) => void;
}

/**
 * A highly interactive card grid component displaying a prominent squared cover image,
 * text details, and a floating glassmorphic play button overlay visible on cursor hover.
 * Commonly used in lists of Albums, Artists, or Playlists.
 *
 * @param props - Component props containing content metadata and interaction handlers.
 */
export const Box = ({
  image,
  title,
  description,
  customClass = '',
  onClick,
  onPlayClick,
}: BoxProps) => {
  /**
   * Handles click events on the hover overlay play button.
   * Stops event propagation to prevent triggering the outer container's onClick handler twice.
   */
  const handlePlayClick = (e: React.MouseEvent) => {
    if (onPlayClick) {
      e.stopPropagation();
      onPlayClick(e);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      className={`group select-none relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 active:scale-97 cursor-pointer hover:shadow-2xl border border-slate-200/5 dark:border-slate-800/10 ${customClass}`}
    >
      <div className="aspect-square bg-gradient-to-br from-purple-600/30 to-blue-500/30 rounded-2xl mb-3 overflow-hidden shadow-inner relative">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          alt={title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
      </div>
      <h2
        className="text-sm font-bold text-[var(--text-primary)] truncate"
        title={title}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-[var(--text-secondary)] text-xs truncate mt-0.5 opacity-80"
          title={description}
        >
          {description}
        </p>
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45 rounded-xl">
        <Button
          icon={<PlayerIcon customClass="text-white h-10 w-10 animate-pulse" />}
          aria-label="Play"
          onClick={handlePlayClick}
          className="text-2xl rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-120 bg-blue-500 text-white p-3 shadow-lg shadow-blue-500/30"
        />
      </div>
    </div>
  );
};
