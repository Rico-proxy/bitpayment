// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';

import Access from './pages/Access';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import Website from './pages/Website';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Transaction from './pages/Transaction';
import TransferType from './pages/TransferType';
import Revert from './pages/Revert';
import './App.css';
import Withdraw from './pages/Withdraw';
import Policy from './pages/Policy';
import Cookies from './pages/Cookies';
import Legal from './pages/Legal';
import UserBalance from './pages/UserBalance';
import UserProfile from './pages/UserProfile';
import UserTransaction from './pages/UserTransaction';
import { StyledEngineProvider } from '@mui/material';
import UserSupport from './pages/UserSupport';
function App() {
  return (
    <StyledEngineProvider injectFirst>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Access />} />
          <Route path="/website" element={<Website />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/activity" element={<ProtectedRoute><Activity /></ProtectedRoute>} />
          <Route path="/transaction" element={<ProtectedRoute><Transaction /></ProtectedRoute>} />
          <Route path="/transfer" element={<ProtectedRoute><TransferType /></ProtectedRoute>} />
          <Route path="/revert" element={<ProtectedRoute><Revert /></ProtectedRoute>} />
          <Route path="/support" element={<UserSupport />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/balance" element={<UserBalance />} />
          <Route path='/profile'  element={<UserProfile/>}/>
          <Route path='/usertransaction'  element={<UserTransaction/>}/>
        </Routes>
      </AuthProvider>
    </Router>
    </StyledEngineProvider>
  );
}

export default App;
