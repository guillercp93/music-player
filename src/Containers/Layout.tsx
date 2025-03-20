import React from 'react';
import { Menu } from '../components/Menu/Menu';
import { useTheme } from '../context/ThemeContext';
import { Player } from '../components/Player/Player';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-primary text-primary">
      <header className="bg-secondary p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Music Player</h1>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded button-secondary text-sm"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </header>

      <div className="flex flex-grow">
        <aside className="w-fit bg-secondary shadow-md">
          <Menu className="h-full" />
        </aside>
        <main className="flex-grow container mx-auto p-4">{children}</main>
      </div>
      <footer className="bg-secondary p-4 mt-auto">
        <Player />
      </footer>
    </div>
  );
};
