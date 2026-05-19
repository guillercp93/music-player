import React from 'react';

export const App = () => {
  if (!!document.startViewTransition) {
    // eslint-disable-next-line no-console
    console.debug('Yess, Your browser support View Transitions API');
  } else {
    // eslint-disable-next-line no-console
    console.debug("Opss, Your browser doesn't support View Transitions API");
  }
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
