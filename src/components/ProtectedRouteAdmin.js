// src/components/ProtectedRouteAdmin.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAdmin = ({ children }) => {
    const authToken = sessionStorage.getItem('authToken');
    const userRole = sessionStorage.getItem('role');

    if (!authToken || userRole !== 'Admin') {
        return <Navigate to="/error" replace />;
    }

    return children;
};

export default ProtectedRouteAdmin;
