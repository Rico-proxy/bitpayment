import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRouteUser = ({ children }) => {
    const authToken = sessionStorage.getItem('authToken');
    const userRole = sessionStorage.getItem('role');
    const navigate = useNavigate();

    useEffect(() => {
        const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

        const resetTimeout = () => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(logout, 1800000); // 1800000 ms = 30 minutes
        };

        const logout = () => {
            sessionStorage.removeItem('authToken'); // Clear the authToken from session storage
            sessionStorage.removeItem('role'); // Optionally clear other auth related session storage
            navigate('/login', { replace: true }); // Redirect to login page
        };

        let timeout = setTimeout(logout, 1800000); // Set initial timeout to 30 minutes
        events.forEach(event => window.addEventListener(event, resetTimeout));

        return () => {
            clearTimeout(timeout); // Clear timeout on component unmount
            events.forEach(event => window.removeEventListener(event, resetTimeout));
        };
    }, [navigate]);

    if (!authToken || userRole !== 'User') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRouteUser;
