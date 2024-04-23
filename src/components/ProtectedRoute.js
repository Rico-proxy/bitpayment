// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Replace 'isAccessGranted' with the key you use to store access status in session storage
  const isAccessGranted = sessionStorage.getItem('isAccessGranted') === 'true';

  if (!isAccessGranted) {
    // If the user has not been granted access, redirect them to the '/' page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
