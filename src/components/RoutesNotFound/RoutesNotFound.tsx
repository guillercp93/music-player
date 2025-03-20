import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../../Containers/Layout';

interface Props {
  children: React.ReactNode;
}

/**
 * `RoutesNotFound` is a component that wraps a set of child routes and provides a fallback
 * route that redirects to a "Page not found!" message when no other routes match.
 *
 * @param {Props} children - The child routes to be rendered within the `Routes` component.
 */
export const RoutesNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route
        path="/404"
        element={
          <Layout>
            <h1>Page not found!</h1>
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
