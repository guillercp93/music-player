// src/components/Menu/Menu.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlbumIcon } from '../icons/album-icon';
import { SidebarLeftIcon } from '../icons/sidebar-left-icon';
import { SidebarRightIcon } from '../icons/sidebar-right-icon';
import { SongListIcon } from '../icons/song-list-icon';
import { PlayerIcon } from '../icons/player-icon';
import { CassetteIcon } from '../icons/cassette-icon';

interface MenuProps {
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ className = '' }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav
      className={`menu ${className} transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed && <h3 className="font-medium">Menu</h3>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-secondary dark:hover:bg-gray-700 ml-auto"
          aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
        >
          {isCollapsed ? <SidebarLeftIcon /> : <SidebarRightIcon />}
        </button>
      </div>
      <ul className="flex flex-col p-2">
        <li>
          <Link
            to="/albums"
            className="flex items-center p-2 rounded hover:bg-secondary dark:hover:bg-gray-700"
            title="Albums"
          >
            <AlbumIcon />
            {!isCollapsed && <span className="ml-2">Albums</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/playlists"
            className="flex items-center p-2 rounded hover:bg-secondary dark:hover:bg-gray-700"
            title="Songs Lists"
          >
            <SongListIcon />
            {!isCollapsed && <span className="ml-2">Songs Lists</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/player"
            className="flex items-center p-2 rounded hover:bg-secondary dark:hover:bg-gray-700"
            title="Player"
          >
            <PlayerIcon />
            {!isCollapsed && <span className="ml-2">Player</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/cassette"
            className="flex items-center p-2 rounded hover:bg-secondary dark:hover:bg-gray-700"
            title="Visual Cassette"
          >
            <CassetteIcon />
            {!isCollapsed && <span className="ml-2">Visual Cassette</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
