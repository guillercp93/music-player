import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from './AppContainer';
import './styles/main.css';
import './styles/themes.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
