// Home.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { BsBellFill } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { TbMessage2Exclamation } from 'react-icons/tb';
import { RiSettings4Line } from 'react-icons/ri';
import BalanceCard from '../components/BalanceCard';
import Card from '../components/Card';
import ThreeCards from '../components/Three Cards';
import RecentTransaction2 from '../components/RecentTransaction2';
import Chart from '../components/Chart';
import ProgressBar from '../components/ProgressBar';
import Slide from '../components/Slide';
import axios from 'axios';
import Time from '../components/Time';
import Status from '../components/StatusState';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Trade from '../components/Trade';
import Slide2 from '../components/Slide2';
import StatusState from '../components/StatusState';
import CurrencyConverter from '../components/CryptoCurrencyConverter';
import SmallScreenSidebar from '../components/SmallScreenSidebar';
import RecentTransactionSmall from '../components/RecentTransactionSmall';
const User = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
   // Retrieve user ID from session storage instead of local storage
   const userId = sessionStorage.getItem('userId');
    let intervalId = null;

    const fetchUserData = () => {
      if (userId) {
        axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`)
          .then(response => {
            setUserInfo(response.data);
          })
          .catch(error => {
            console.error('Error fetching user details:', error);
          });
      }
    };

    // Call fetchUserData immediately and then set up the interval
    fetchUserData();
    intervalId = setInterval(fetchUserData, 10000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empt
  

  const [isOpen, setIsOpen] = useState(true);
  const [Open, Close] = useState(false);


  const toggleDropdown = () => Close(!Open);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundImage: "url('assets/3.jpg')"}} className={`bg min-h-screen overflow-x-hidden bg-cover Home ${isOpen ? 'md:pl-20' : 'md:pl-44'}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div  className={`w-full h-full bg-black-600/50 backdrop-brightness-50 content ${isOpen ? '' : 'active-sidebar'}`}>
        {/* Main content goes here */}
        <head className="flex flex-col md:flex md:flex-row md:space-x-6 md:justify-between md:py-4 md:items-center">
       
            <div>
              <Slide/>
            </div>
           
            <div className="hidden justify-end md:flex flex-row items-center space-x-2 md:space-x-5 md:pr-6">
                <div className="p-2 bg-black md:p-4 rounded-lg text-white">
                <BsBellFill className="hover:animate-bounce"/>
                </div>
                
                <div>
                  <StatusState/>
                </div>
                <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button rounded-2xl">
                    <RiSettings4Line className="hover:animate-bounce text-2xl"/>
                </button>
                {Open && (
                    <div className="dropdown-content text-white">
                    <a href="/profile
">Profile</a>
                    <a href="#inbox">Inbox</a>
                    <a href="/login
">Logout</a>
                    </div>
                )}
                </div>
            </div>
        </head>
        <div className="px-6">
        <body className='text-black space-y-3 pt-6 pb-20 pl-10 md:pl-0'>
        <div className='flex flex-row justify-between  items-center'>
                      <div className='flex flex-col'>
                              <h1 className="text-[14px] md:text-[26px] font-bold text-white">Account Number</h1>
                              <h1 className="text-[14px] md:text-[19px] font-medium md:font-semibold text-white">{userInfo.accountNumber}</h1>
                          </div>
                        <div className='hidden md:flex flex-row'>
                        <Link to="/usertransfer" className="flex flex-col items-center p-4 rounded-2xl">
                                  <div className="p-3 rounded-full bg">
                                    <AiOutlineArrowUp className="text-white md:text-3xl" />
                                  </div>
                                   <p className="text-[14px] md:text-xl font-light text-white">Transfer</p>
                            </Link>
                            <Link to="/withdraw" className="flex flex-col items-center p-4 rounded-2xl">
                                  <div className="p-3 rounded-full bg">
                                    <AiOutlineArrowDown className="text-white md:text-3xl" />
                                  </div>
                                   <p className="text-[14px] md:text-xl font-light text-white">Receive</p>
                            </Link>
                        </div>
                        <div className='flex flex-col'>
                              <h1 className="text-[14px] md:text-[26px] font-bold text-white">Ledger</h1>
                              <h2 className="text-[14px] md:text-[19px] font-medium md:font-semibold text-white">ledger acc no</h2>
                          </div>
           </div> 
           <div className='flex flex-row justify-center md:hidden'>
                        <Link to="/usertransfer" className="flex flex-col items-center p-4 rounded-2xl">
                                  <div className="p-3 rounded-full bg">
                                    <AiOutlineArrowUp className="text-white md:text-3xl" />
                                  </div>
                                   <p className="text-[19px] md:text-xl font-light text-white">Transfer</p>
                            </Link>
                            <Link to="/withdraw" className="flex flex-col items-center p-4 rounded-2xl">
                                  <div className="p-3 rounded-full bg">
                                    <AiOutlineArrowDown className="text-white md:text-3xl" />
                                  </div>
                                   <p className="text-[19px] md:text-xl font-light text-white">Receive</p>
                            </Link>
                        </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row space-x-3 text-white items-center'>
              <div>
                <Time/>
              </div>
              <div className='text-2xl font-bold font'>
              {userInfo.firstName}
              </div>
            </div>
            
          </div>
            <div className='flex flex-col  space-y-4 md:flex md:flex-row md:space-x-5 '>
                <div>
                <BalanceCard/>
                </div>
                <div>
                    <ThreeCards/>
                </div>
                <div><Card/></div>
            </div>
            <div className='pb-5 pt-5'>
              <Slide2/>
            </div>
            <div className='flex flex-col space-y-3 md:flex md:flex-row md:justify-between space-x-6'>
                <div className='hidden md:block '>
                  <RecentTransaction2/>
                </div>
                <div>
                  <RecentTransactionSmall/>
                </div>
                <div>
                  <Chart/>
                </div>
            </div>
            
                
        </body>
        <footer className='md:pr-4  pl-20' >
                <div className='bg md:p-3  text-white rounded-tl-xl rounded-tr-xl'>
                  <div className='font-bold flex md:justify-center  text-[14px] md:text-xl p-4 md:p-0'>
                  @2024 All rights reserved Bitpay Payment Systems Limited
                  </div>
                </div>
        </footer>
        </div>
      </div>
    </div>
  );
};

export default User;
