import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'lightblue' // Set background to light blue
    }}>
      <img
        src="/assets/logo.png"
        alt="Adam Joe"
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
