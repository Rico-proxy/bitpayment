// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRouteAdmin from './components/ProtectedRouteAdmin';
import ProtectedRouteUser from './components/ProtectedRouteUser';
import ProtectedRoute from './components/ProtectedRoute';
import Access from './pages/Access';
import Admin from './admin/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './user/User';
import Website from './pages/Website';
import Dashboard from './pages/Dashboard';
import Activity from './admin/Activity';
import Transaction from './admin/Transaction';
import './App.css';
import Withdraw from './user/Withdraw';
import Policy from './pages/Policy';
import Cookies from './pages/Cookies';
import Legal from './pages/Legal';
import UserBalance from './user/UserBalance';
import UserProfile from './user/UserProfile';
import UserTransaction from './user/UserTransaction';
import { StyledEngineProvider } from '@mui/material';
import UserSupport from './user/UserSupport';
import Register2 from './pages/Register2';
import Status from './admin/Status';
import UserTransfer from './user/UserTransfer';
import Error from './pages/Error';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/" element={<Access />} />
          <Route path='/website' element={<ProtectedRoute><Website /></ProtectedRoute>} />
         
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
          <Route path="/register2" element={<ProtectedRoute><Register2 /></ProtectedRoute>} />
          <Route path="/policy" element={<ProtectedRoute><Policy /></ProtectedRoute>} />
          <Route path="/cookies" element={<ProtectedRoute><Cookies /></ProtectedRoute>} />
          <Route path="/legal" element={<ProtectedRoute><Legal /></ProtectedRoute>} />
            
          // Admin routes
          <Route path="/admin" element={<ProtectedRouteAdmin><Admin /></ProtectedRouteAdmin>} />
          <Route path="/activity" element={<ProtectedRouteAdmin><Activity /></ProtectedRouteAdmin>} />
          <Route path="/transaction" element={<ProtectedRouteAdmin><Transaction /></ProtectedRouteAdmin>} />
          <Route path="/status" element={<ProtectedRouteAdmin><Status /></ProtectedRouteAdmin>} />

          // User routes
          <Route path="/user" element={<ProtectedRouteUser><User /></ProtectedRouteUser>} />
          <Route path="/dashboard" element={<ProtectedRouteUser><Dashboard /></ProtectedRouteUser>} />
          <Route path="/withdraw" element={<ProtectedRouteUser><Withdraw /></ProtectedRouteUser>} />
          <Route path="/balance" element={<ProtectedRouteUser><UserBalance /></ProtectedRouteUser>} />
          <Route path="/profile" element={<ProtectedRouteUser><UserProfile /></ProtectedRouteUser>} />
          <Route path="/usertransaction" element={<ProtectedRouteUser><UserTransaction /></ProtectedRouteUser>} />
          <Route path="/support" element={<ProtectedRouteUser><UserSupport /></ProtectedRouteUser>} />
          <Route path="/usertransfer" element={<ProtectedRouteUser><UserTransfer /></ProtectedRouteUser>} />
        </Routes>
      </Router>
    </StyledEngineProvider>
  );
}

export default App;
