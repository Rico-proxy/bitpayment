// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
    const authToken = sessionStorage.getItem('authToken');
    const userRole = sessionStorage.getItem('role');

    // If no authToken, redirect to login
    if (!authToken) {
        return <Navigate to="/login" />;
    }

    // Check if required role matches the user's role
    if (role && userRole !== role) {
        return <Navigate to="/error" />;
    }

    return children;
};

export default ProtectedRoute;