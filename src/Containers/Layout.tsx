import React from 'react';
import { Menu } from '../components/Menu/Menu';
import { Player } from '../components/Player/Player';
import { Button } from '../components/UI/Button';
import { BackIcon, DarkModeIcon, LightModeIcon } from '../components/icons';
import { useTheme } from '../context/ThemeContext';

/**
 * Props for the `Layout` component.
 *
 * @prop {React.ReactNode} children - The content to be rendered within the
 * `Layout` component.
 */
interface LayoutProps {
  children: React.ReactNode;
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
}: LayoutProps): React.ReactElement => {
  const { theme, toggleTheme } = useTheme();

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
          />
          <h1 className="text-xl font-bold">Music Player</h1>
          <Button onClick={toggleTheme} className="text-sm rounded-full">
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </div>
      </header>

      <div className="flex flex-grow">
        <aside className="bg-secondary shadow-md">
          <Menu className="h-full" />
        </aside>
        <main className="flex-grow container mx-auto p-4">
          {children || <p>No content available</p>}
        </main>
      </div>
      <footer className="px-4 py-2 bg-[var(--bg-secondary)] shadow-md">
        <Player className="w-full" />
      </footer>
    </div>
  );
};
