import React, { useEffect } from 'react';

interface VinylProps {
  /** URL of the album art to display */
  imageURL: string;
  /** Whether the vinyl is currently playing */
  isPlaying: boolean;
  /** Optional title to display on the center label */
  title?: string;
  /** Size of the vinyl in pixels */
  size?: number;
  /** Rotation speed in seconds for a full rotation */
  rotationSpeed?: number;
}

const VinylGrooves = () => (
  <>
    <div className="absolute inset-0 rounded-full border-2 border-gray-700 opacity-30" />
    <div className="absolute inset-2 rounded-full border border-gray-600 opacity-20" />
    <div className="absolute inset-4 rounded-full border border-gray-500 opacity-20" />
  </>
);

const VinylCenterLabel = ({ title = 'Title Song' }: { title?: string }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-1/4 h-1/4 rounded-full bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center">
      <div className="w-1/2 h-1/2 rounded-full bg-black flex items-center justify-center text-white text-xs text-center p-2">
        <span className="transform -rotate-12 truncate" title={title}>
          {title}
        </span>
      </div>
    </div>
  </div>
);

const VinylBorders = () => (
  <>
    <div className="absolute inset-0 rounded-full border-8 border-gray-800 opacity-70" />
    <div className="absolute inset-0 rounded-full border-2 border-gray-700 opacity-50" />
    <div className="absolute inset-4 rounded-full border-2 border-gray-600 opacity-30" />
  </>
);

export const Vinyl: React.FC<VinylProps> = ({
  imageURL,
  isPlaying,
  title,
  size = 384, // Default to 24rem (384px)
  rotationSpeed = 40,
}) => {
  useEffect(() => {
    return () => {
      const img = document.getElementById(
        'current-album-cover'
      ) as HTMLImageElement;
      if (img) {
        img.style.viewTransitionName = '';
      }
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: `spin ${rotationSpeed}s linear infinite`,
        animationPlayState: isPlaying ? 'running' : 'paused',
      }}
      role="img"
      aria-label={isPlaying ? 'Vinyl record spinning' : 'Vinyl record paused'}
    >
      <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black shadow-[0_0_50px_rgba(0,0,0,0.7)]">
        <VinylBorders />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-gray-800 to-black">
            <VinylGrooves />
            <VinylCenterLabel title={title} />

            {/* Album art */}
            <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={imageURL}
                  className="w-full h-full object-cover"
                  alt="Album cover"
                  style={{ viewTransitionName: 'album-cover' }}
                  onError={(e) => {
                    // Fallback in case the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      'https://via.placeholder.com/500/333/666?text=No+Image';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
