import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      position: 'fixed',  // Use 'fixed' instead of 'absolute' to make sure it covers all content
      top: 0,  // Start from the very top of the page
      left: 0,  // Start from the very left of the page
      width: '100%',  // Cover the full width of the viewport
      height: '100%',  // Cover the full height of the viewport
      backgroundColor: 'lightblue',  // Set background to light blue
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999  // Make sure it's on top of all other content
    }}>
      <img
        src="/assets/logo.png"
        alt="Loading"
        className="rounded-full mx-auto"
        style={{
          width: '50px',
          height: '50px',
          animation: 'spin 2s linear infinite'
        }}
      />
      <style>
        {`@keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  );
};

export default LoadingSpinner;
