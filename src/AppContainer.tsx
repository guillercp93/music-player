import { App } from './App';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from './context/ThemeContext';
import { PlayerProvider } from './context/PlayerContext';

export const AppContainer = () => {
  return (
    <ThemeProvider>
      <PlayerProvider>
        <AppRouter>
          <App />
        </AppRouter>
      </PlayerProvider>
    </ThemeProvider>
  );
};
