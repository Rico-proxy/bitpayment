import React from 'react';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreventBackNavigation2 from '../components/PreventBackNavigation2';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'https://api.nuhu.xyz/api/Auth/Login';
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(url, formData);
      const loginResponse = response.data.loginResponse;

      if (loginResponse && loginResponse.token) {
        sessionStorage.setItem('authToken', loginResponse.token);
        sessionStorage.setItem('userId', loginResponse.id);
        sessionStorage.setItem('email', loginResponse.email);
        sessionStorage.setItem('pin', loginResponse.pin);
        login();
        navigate(loginResponse.role === 'Admin' ? '/admin' : '/user');
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error('Login error:', error.response || error);
      toast.error('Incorrect login details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='overflow-y-hidden  min-h-screen bg-[#0f1b39]'>
      <PreventBackNavigation2/>
      <ToastContainer />
      <div className='flex justify-center pt-32 md:pt-20'>
        <div className='flex flex-col pt-10 md:pt-0'>
          <div className='font-bold'>
            <h1 className='text-2xl font-bold mb-10 text-white text-center'>Enter your Login Details</h1>
          </div>
          <div className='p-8 shadow-2xl bg-white border-4 rounded-2xl md:h-[79vh] md:p-16'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-5 md:space-y-12'>
                <div className='flex flex-col items-center'>
                    <img src="/assets/logo.svg" alt="Digital Currency" width={100} height={100} className='mx-auto' />
                    <h1 className='text-2xl italic text-blue-900 font-bold'>Payment System</h1>
                </div>
                <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                  <FiMail className="text-black font-bold font-xl" />
                  <input type="email" name='email' placeholder="Email" required className="pl-4 border-l-2 outline-none text-sm" />
                </div>
                <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                  <RiLockPasswordLine className="text-black font-bold font-xl" />
                  <input type="password" name='password' placeholder="Password" required className="pl-4 border-l-2 outline-none text-sm " />
                </div>
                <div>
                  <button type='submit' className='hover:bg-[#2a3b64] text-[13px] hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl text-white font-bold py-4 px-8 rounded-lg w-full'>LOGIN</button>
                </div>
            </form>
            <div className='pt-4 flex justify-end space-x-3'>
              <div>
                If Not Registered
              </div>
              <Link to='/register' className='text-blue-900 font-bold'>
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
