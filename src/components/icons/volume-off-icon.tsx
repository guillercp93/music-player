import React from 'react';
export const VolumeOffIcon = ({ customClass }: { customClass?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={customClass}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
    <path d="M16 10l4 4m0 -4l-4 4" />
  </svg>
);
