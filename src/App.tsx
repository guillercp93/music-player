import React from 'react';
import { useTheme } from './context/ThemeContext';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Music Player</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};
