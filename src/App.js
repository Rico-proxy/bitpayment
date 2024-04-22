// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
function App() {
  return (
    <StyledEngineProvider injectFirst>
    <Router>
         <Routes>
          <Route path="/" element={<Access />} />
          <Route path="/website" element={<Website />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/support" element={<UserSupport />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/balance" element={<UserBalance />} />
          <Route path='/profile'  element={<UserProfile/>}/>
          <Route path='/usertransaction'  element={<UserTransaction/>}/>
          <Route path='/register2'  element={<Register2/>}/>
          <Route path='/status'  element={<Status/>}/>
          <Route path='/usertransfer'  element={<UserTransfer/>}/>
        </Routes>
    </Router>
    </StyledEngineProvider>
  );
}

export default App;
