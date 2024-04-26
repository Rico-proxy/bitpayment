import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#4c4cfe' /* Adjust the background color as needed */
    }}>
      <div style={{
        border: '5px solid #f3f3f3', /* Light grey */
        borderTop: '5px solid #3498db', /* Blue */
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 2s linear infinite'
      }} />
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
