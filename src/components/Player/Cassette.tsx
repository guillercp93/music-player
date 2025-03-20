// src/components/Player/Cassette.tsx
import React, { useState, useEffect } from 'react';

export const Cassette: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  
  // Simulate tape rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cassette-container flex flex-col items-center p-4">
      <div className="cassette-info mb-4 text-center">
        <h3 className="song-title text-lg font-bold">Song Title</h3>
        <p className="artist-name text-sm text-gray-500">Artist Name</p>
      </div>
      
      <div className="cassette-body relative bg-gray-800 rounded-lg p-4 w-64 h-40">
        <div className="cassette-label bg-white rounded p-2 mx-auto w-48 h-16 flex items-center justify-center">
          <span className="text-black text-xs">Side A</span>
        </div>
        
        <div className="cassette-reels flex justify-between mt-4 px-8">
          <div className="reel left-reel w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center">
            <div 
              className="reel-center w-8 h-8 bg-gray-600 rounded-full" 
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="reel-hole w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          
          <div className="reel right-reel w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center">
            <div 
              className="reel-center w-8 h-8 bg-gray-600 rounded-full"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="reel-hole w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
