// src/components/Menu/Menu.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlbumIcon,
  SidebarLeftIcon,
  SidebarRightIcon,
  SongListIcon,
  PlayerIcon,
  CassetteIcon,
} from '../icons';
import { Button } from '../UI/Button';

/**
 * Props for the `Menu` component.
 *
 * @prop {string} [className=''] The CSS class name to apply to the container
 *     element.
 */
interface MenuProps {
  className?: string;
}

/**
 * A React component that displays a menu with links to the Albums, Songs Lists,
 * Player, and Visual Cassette pages.
 *
 * @param {MenuProps} props The properties for the component.
 * @param {string} [props.className=''] The CSS class name to apply to the
 *     container element.
 * @returns {React.ReactElement} A React element for the menu.
 */
export const Menu: React.FC<MenuProps> = ({
  className = '',
}: MenuProps): React.ReactElement => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav
      className={`menu ${className} transition-all duration-200 ${isCollapsed ? 'w-16' : 'w-48'}`}
    >
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4 px-2">
        <Button
          className="rounded w-full flex items-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
        >
          {isCollapsed ? <SidebarLeftIcon /> : <SidebarRightIcon />}
          {!isCollapsed && <h3 className="ml-2 font-medium">Menu</h3>}
        </Button>
      </div>
      <ul className="flex flex-col py-4 px-2">
        <li key="albums">
          <Button className="rounded w-full" asChild={true}>
            <Link to="/albums" title="Albums" className="flex items-center">
              <AlbumIcon />
              {!isCollapsed && <text className="ml-2">Albums</text>}
            </Link>
          </Button>
        </li>
        <li key="playlists">
          <Button className="rounded w-full" asChild={true}>
            <Link
              to="/playlists"
              title="Songs Lists"
              className="flex items-center"
            >
              <SongListIcon />
              {!isCollapsed && <text className="ml-2">Songs Lists</text>}
            </Link>
          </Button>
        </li>
        <li key="player">
          <Button className="rounded w-full" asChild={true}>
            <Link to="/player" title="Player" className="flex items-center">
              <PlayerIcon />
              {!isCollapsed && <text className="ml-2">Player</text>}
            </Link>
          </Button>
        </li>
        <li key="cassette">
          <Button className="rounded w-full" asChild={true}>
            <Link
              to="/cassette"
              title="Visual Cassette"
              className="flex items-center"
            >
              <CassetteIcon />
              {!isCollapsed && <text className="ml-2">Cassette</text>}
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
