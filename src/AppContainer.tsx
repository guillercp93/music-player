import React from 'react';
import { App } from './App';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from './context/ThemeContext';

export const AppContainer = () => {
  return (
    <ThemeProvider>
      <AppRouter>
        <App />
      </AppRouter>
    </ThemeProvider>
  );
};
