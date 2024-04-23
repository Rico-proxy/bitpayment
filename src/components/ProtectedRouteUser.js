// src/components/ProtectedRouteUser.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteUser = ({ children }) => {
    const authToken = sessionStorage.getItem('authToken');
    const userRole = sessionStorage.getItem('role');

    if (!authToken || userRole !== 'User') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRouteUser;
