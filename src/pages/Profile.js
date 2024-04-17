import React, { useState, useRef, useEffect } from 'react';
import { CgMenu } from 'react-icons/cg';
import { RiDashboardFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { BiBitcoin } from "react-icons/bi";
import UserProfile from '../components/UserProfile';
import Pin from '../components/Pin';
import TransferButton from '../components/TransferButton';

const Profile = () => {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    role: '',
    fullName: '',
    accountType: '',
    address: '',
    city: '',
    state: '',
    walletId: '',
    walletBalance: '',
    ledgerAccountId: '',
    ledgerAccountBalance: '',
    usdAccountId: '',
    usdAccountBalance: '',
    userId: '',
    // ... add other user properties as needed
  });

  useEffect(() => {
    // Assuming user information is stored in localStorage
    const userInformation = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      middleName: localStorage.getItem('middleName'),
      userName: localStorage.getItem('userName'),
      email: localStorage.getItem('email'),
      phoneNumber: localStorage.getItem('phoneNumber'),
      role: localStorage.getItem('role'),
      fullName: localStorage.getItem('fullName'),
      accountType: localStorage.getItem('accountType'),
      address: localStorage.getItem('address'),
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
      walletId: localStorage.getItem('walletId'),
      walletBalance: localStorage.getItem('walletBalance'),
      ledgerAccountId: localStorage.getItem('ledgerAccountId'),
      ledgerAccountBalance: localStorage.getItem('ledgerAccountBalance'),
      usdAccountId: localStorage.getItem('usdAccountId'),
      usdAccountBalance: localStorage.getItem('usdAccountBalance'),
      cryptoKey: localStorage.getItem('cryptoKey'),
      userId: localStorage.getItem('userId'),
      // ... add other fields as needed
    };

    // Update the state with the retrieved information
    setUserInfo(userInformation);
  }, []);
  

  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='min-h-screen flex bg-slate-200'>
        <header className='flex flex-col justify-between bg-black  h-full fixed z-40'>
            <div className='p-4'>
                <button onClick={toggleDrawer} className='text-white'>
                    <CgMenu size={20} />
                </button>
            </div>
            <div
              ref={drawerRef}
              className={`bg-[#0f1b39] p-8 transform top-0 left-0 absolute h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}
            >
              <button onClick={toggleDrawer} className='text-white pl-40 '>
                <AiOutlineClose size={24}/>
              </button>
              <nav className="mt-20 flex flex-col space-y-8">
                <Link to="/user" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <RiDashboardFill className='text-2xl text-white'/>
                  <span className='text-xl text-white'>Dashboard</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <BsFillPersonFill className='text-2xl text-white'/>
                  <span className='text-xl text-white'>Profile</span>
                </Link>
                <Link to="/faq" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <FaQuestion className='text-2xl text-white'/>
                  <span className='text-xl text-white'>FAQ's</span>
                </Link>
                <Link to="/wallet" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <SlWallet className='text-2xl text-white'/>
                  <span className='text-xl text-white'>My Wallet</span>
                </Link>
                <Link to="/login" className="mt-auto flex items-center space-x-3">
                  <BiLogOut className='text-3xl text-white'/>
                  <span className='text-xl text-white'>Logout</span>
                </Link>
              </nav>
            </div>
        </header>
        <div className={`flex-grow transition-margin duration-300 ease-in-out ${isOpen ? 'ml-40' : 'ml-0'}`}>
          <main className='pt-10 ml-20 flex flex-col px-10 '>
              <div>
                  <h1 className='text-2xl font-bold text-black'>User Profile</h1>
              </div>
              <section className='pt-10 gap-4 grid grid-cols-3'>
                 <div>
                 <UserProfile/>
                 </div>
                 <div>
                     <card className='   text-black '>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6 bg-white rounded-2xl'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col '>
                                            <p className='text-2xl font-bold'>Ledger</p>
                                            <span>{userInfo.usdAccountBalance}</span>
                                      </div>
                                      
                                  </div>
                      </card>
                      <Pin/>
                 </div>
                 <div>
                 <card className='   text-black '>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6 bg-white rounded-2xl'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col '>
                                            <p className='text-2xl font-bold'>Ledger</p>
                                            <span>user account</span>
                                      </div>
                                      
                                  </div>
                      </card>
                 </div>
              </section>
              <section>
              </section>
          </main>
        </div>
    </div>
  );
};

export default Profile;
