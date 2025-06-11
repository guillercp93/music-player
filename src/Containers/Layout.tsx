import React from 'react';
import { Button } from '../components/UI/Button';
import {
  AlbumIcon,
  BackIcon,
  DarkModeIcon,
  LightModeIcon,
  SingerIcon,
  SongListIcon,
} from '../components/icons';
import { Tooltip } from '../components/UI/Tooltip';
import { useTheme } from '../context/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Props for the `Layout` component.
 *
 * @prop {React.ReactNode} children - The content to be rendered within the
 * `Layout` component.
 */
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

/**
 * A React component that provides a layout structure for the application.
 *
 * @param {LayoutProps} props The properties for the component.
 * @param {React.ReactNode} [props.children] The content to be rendered within the
 *     `Layout` component.
 * @returns {React.ReactElement} A React element for the layout.
 */
export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}: LayoutProps): React.ReactElement => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isRootOr404 = location.pathname === '/' || location.pathname === '/404';
  console.log(location.pathname, isRootOr404);

  const handleBack = (): void => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.warn('No back history available');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary text-primary">
      <header className="bg-secondary p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Button
            icon={<BackIcon />}
            className="mr-2 rounded-full"
            aria-label="Go back"
            onClick={handleBack}
            disabled={isRootOr404}
          />
          <h1 className="text-xl font-bold">Music Player</h1>
          <Button onClick={toggleTheme} className="text-sm rounded-full">
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </div>
      </header>

      <div className="flex flex-grow">
        <aside className="bg-secondary shadow-md"></aside>
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              {title}
            </h1>
            {children || <p>No content available</p>}
          </div>
        </main>
      </div>
      <footer className="px-4 py-2 bg-[var(--bg-secondary)] shadow-md">
        <div className="container mx-auto flex justify-center items-center gap-4">
          <Tooltip text="Albums" position="top">
            <Button
              icon={<AlbumIcon />}
              aria-label="Albums"
              onClick={() => navigate('/albums')}
            />
          </Tooltip>
          <Tooltip text="Artists" position="top">
            <Button
              icon={<SingerIcon />}
              aria-label="Artists"
              onClick={() => navigate('/artists')}
            />
          </Tooltip>
          <Tooltip text="Songs" position="top">
            <Button
              icon={<SongListIcon />}
              aria-label="Songs"
              onClick={() => navigate('/songs')}
            />
          </Tooltip>
        </div>
        <p>Guillermo Castillo © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};
