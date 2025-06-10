import React from 'react';
import { HashRouter, Navigate, Route } from 'react-router-dom';
import { RoutesNotFound } from './components/RoutesNotFound/RoutesNotFound';
import { AlbumList } from './Containers/AlbumList';

interface Props {
  children: React.ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <HashRouter>
      <RoutesNotFound>
        <Route path="/" element={<Navigate to="/albums" />} />
        <Route path="/albums" element={<AlbumList />} />
      </RoutesNotFound>
      {children}
    </HashRouter>
  );
};
