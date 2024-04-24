import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAccessGranted = sessionStorage.getItem('isAccessGranted') === 'true';
  const navigate = useNavigate();

  useEffect(() => {
    const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

    const resetTimeout = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(logout, 300000); // 300000 ms = 5 minutes
    };

    const logout = () => {
      sessionStorage.removeItem('isAccessGranted'); // Clear the access status from session storage
      navigate('/', { replace: true }); // Redirect to login page
    };

    let timeout = setTimeout(logout, 300000); // Set initial timeout
    events.forEach(event => window.addEventListener(event, resetTimeout));

    return () => {
      clearTimeout(timeout); // Clear timeout on component unmount
      events.forEach(event => window.removeEventListener(event, resetTimeout));
    };
  }, [navigate]);

  if (!isAccessGranted) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
