import React from 'react';

export const UI = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        zIndex: '100',
      }}
    >
      {children}
    </div>
  );
};
