import React from 'react';
import { HashRouter, Navigate, Route } from 'react-router-dom';
import { Playlists } from './components/Library/Playlists';
import { Albums } from './components/Library/albums';
import { Cassette } from './components/Player/Cassette';
import { SongCover } from './components/Player/Conver';
import { RoutesNotFound } from './components/RoutesNotFound/RoutesNotFound';

interface Props {
  children: React.ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <HashRouter>
      <RoutesNotFound>
        <Route path="/" element={<Navigate to="/albums" />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/player" element={<SongCover coverUrl={''} isPlaying={false} title={''} artist={''} />} />
        <Route path="/cassette" element={<Cassette />} />
      </RoutesNotFound>
      {children}
    </HashRouter>
  );
};
