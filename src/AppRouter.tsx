import React from 'react';
import { BrowserRouter as Router, Navigate, Route } from 'react-router-dom';
import { RoutesNotFound } from './components/RoutesNotFound/RoutesNotFound';
import { AlbumList, ArtistList, Player, SongList } from './Containers';

/**
 * The properties for the `AppRouter` component.
 *
 * @prop {React.ReactNode} children - The content to be rendered within the
 *     `AppRouter` component.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * A React component that provides a router for the application.
 *
 * The component is a context provider for the React Router v6 `HashRouter` and
 * uses the `RoutesNotFound` component to handle any routes that are not found.
 *
 * The component renders a set of routes for the main views of the application
 * (albums, artists, and songs) and also renders any children that are passed to
 * the component.
 *
 * @param {Props} props The properties for the component.
 * @returns {React.ReactElement} A React element for the router.
 */
export const AppRouter = ({ children }: Props) => {
  return (
    <Router>
      <RoutesNotFound>
        <Route path="/" element={<Navigate to="/albums" />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/artists" element={<ArtistList />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/player" element={<Player />} />
      </RoutesNotFound>
      {children}
    </Router>
  );
};
