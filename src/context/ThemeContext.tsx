/**
 * Provides a theme context to the application.
 *
 * The theme context stores the current theme of the application, which can be
 * either 'light' or 'dark'. It also provides a function to toggle the theme.
 *
 * This context is used by the `ThemeProvider` component to set the theme of the
 * application.
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ELECTRON_API } from '../utils/constants';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

/**
 * A React component that provides a theme context to the application.
 *
 * @param {React.ReactNode} children - The content to be rendered within the
 *     `ThemeProvider` component.
 * @returns {React.ReactElement} A React element for the theme provider.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Get default theme from Electron
    ELECTRON_API?.getDefaultTheme().then((theme) => setTheme(theme));
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
