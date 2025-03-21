import React from 'react';

export const App = () => {
  return (
    <>
      <div className="hidden text-sm text-gray-600 dark:text-gray-400">
        <p>
          Screen dimensions: {window.innerWidth} x {window.innerHeight}px
        </p>
      </div>
    </>
  );
};
