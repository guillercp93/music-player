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
import { MiniPlayer } from '../components/MiniPlayer/MiniPlayer';

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

  const handleBack = (): void => {
    if (window.history.length > 1 && location.pathname !== '/') {
      navigate(-1);
    }
  };

  const handleNavigate = (path: string): void => {
    navigate(path, { viewTransition: true });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] text-[var(--text-primary)] transition-all duration-300 relative overflow-hidden">
      {/* Premium Background Ambient Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      {/* Main Header */}
      <header className="sticky top-0 z-30 bg-[var(--bg-secondary)]/60 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-800/50 px-4 py-3 shadow-sm transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button
              icon={<BackIcon />}
              className={`rounded-full p-2.5 flex items-center justify-center transition-all duration-200 ${
                isRootOr404
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/80 active:scale-95'
              }`}
              aria-label="Go back"
              onClick={handleBack}
              disabled={isRootOr404}
            />
            <div
              className="flex items-center gap-2"
              onClick={() => handleNavigate('/albums')}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-md shadow-purple-500/20 cursor-pointer">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                AetherMusic
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-200/30 dark:bg-slate-800/40 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 active:scale-90 transition-all duration-200 border border-slate-200/20 dark:border-slate-800/50"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
          </div>
        </div>
      </header>

      {/* App Content Body */}
      <div className="flex flex-grow relative">
        {/* Sleek Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-[var(--bg-secondary)]/40 backdrop-blur-sm border-r border-slate-200/20 dark:border-slate-800/30 p-6 gap-6 shrink-0 transition-all duration-300">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3">
              Library
            </p>

            <button
              onClick={() => handleNavigate('/albums')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-left ${
                isActive('/albums')
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-500 dark:text-purple-400 border-l-4 border-blue-500'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/40 dark:hover:bg-slate-800/30 hover:text-[var(--text-primary)]'
              }`}
            >
              <AlbumIcon />
              <span>Albums</span>
            </button>

            <button
              onClick={() => handleNavigate('/artists')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-left ${
                isActive('/artists')
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-500 dark:text-purple-400 border-l-4 border-blue-500'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/40 dark:hover:bg-slate-800/30 hover:text-[var(--text-primary)]'
              }`}
            >
              <SingerIcon />
              <span>Artists</span>
            </button>

            <button
              onClick={() => handleNavigate('/songs')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-left ${
                isActive('/songs')
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-500 dark:text-purple-400 border-l-4 border-blue-500'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/40 dark:hover:bg-slate-800/30 hover:text-[var(--text-primary)]'
              }`}
            >
              <SongListIcon />
              <span>Songs</span>
            </button>

            <button
              onClick={() => handleNavigate('/player')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-left ${
                isActive('/player')
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-500 dark:text-purple-400 border-l-4 border-blue-500'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/40 dark:hover:bg-slate-800/30 hover:text-[var(--text-primary)]'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center text-current">
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
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <span>Now Playing</span>
            </button>
          </div>

          {/* Quick Stats / Info Widget */}
          <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-slate-200/10 dark:border-slate-800/20 text-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Designed By
            </h4>
            <a
              href="https://github.com/guillercp93"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              @guillercp93
            </a>
            <p className="text-[10px] text-slate-500 mt-1">
              &copy; {new Date().getFullYear()} AetherMusic
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow overflow-x-hidden flex flex-col min-h-0">
          <div className="flex-grow container mx-auto px-4 md:px-8 py-6 pb-32">
            {title && (
              <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">
                  {title}
                </h1>
              </div>
            )}
            {children || (
              <div className="flex items-center justify-center h-64 text-slate-400">
                <p>No content available</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Floating MiniPlayer */}
      <MiniPlayer />

      {/* Sleek Mobile Bottom Navigation */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[var(--bg-secondary)]/90 backdrop-blur-md border-t border-slate-200/20 dark:border-slate-800/40 py-2 px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] flex justify-between items-center transition-all duration-300">
        <Tooltip text="Albums" position="top">
          <Button
            icon={<AlbumIcon />}
            aria-label="Albums"
            onClick={() => handleNavigate('/albums')}
            className={`p-3 rounded-2xl flex items-center justify-center transition-all duration-200 ${
              isActive('/albums')
                ? 'bg-blue-500 text-white scale-110 shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-[var(--text-primary)] hover:bg-slate-200/30 dark:hover:bg-slate-800/40'
            }`}
          />
        </Tooltip>
        <Tooltip text="Artists" position="top">
          <Button
            icon={<SingerIcon />}
            aria-label="Artists"
            onClick={() => handleNavigate('/artists')}
            className={`p-3 rounded-2xl flex items-center justify-center transition-all duration-200 ${
              isActive('/artists')
                ? 'bg-blue-500 text-white scale-110 shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-[var(--text-primary)] hover:bg-slate-200/30 dark:hover:bg-slate-800/40'
            }`}
          />
        </Tooltip>
        <Tooltip text="Songs" position="top">
          <Button
            icon={<SongListIcon />}
            aria-label="Songs"
            onClick={() => handleNavigate('/songs')}
            className={`p-3 rounded-2xl flex items-center justify-center transition-all duration-200 ${
              isActive('/songs')
                ? 'bg-blue-500 text-white scale-110 shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-[var(--text-primary)] hover:bg-slate-200/30 dark:hover:bg-slate-800/40'
            }`}
          />
        </Tooltip>
        <Tooltip text="Player" position="top">
          <Button
            icon={
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
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            }
            aria-label="Player"
            onClick={() => handleNavigate('/player')}
            className={`p-3 rounded-2xl flex items-center justify-center transition-all duration-200 ${
              isActive('/player')
                ? 'bg-blue-500 text-white scale-110 shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-[var(--text-primary)] hover:bg-slate-200/30 dark:hover:bg-slate-800/40'
            }`}
          />
        </Tooltip>
      </footer>
    </div>
  );
};
