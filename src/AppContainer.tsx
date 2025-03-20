import React from 'react';
import { App } from './App';
import { ThemeProvider } from './context/ThemeContext';

export const AppContainer = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
