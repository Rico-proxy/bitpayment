// Home.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { BsBellFill } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { TbMessage2Exclamation } from 'react-icons/tb';
import { RiSettings4Line } from 'react-icons/ri';
import BalanceCard from '../components/BalanceCard';
import Card from '../components/CryptoSlide';
import ThreeCards from '../components/Three Cards';
import RecentTransaction from '../components/RecentTransaction';
import Chart from '../components/Chart';
import ProgressBar from '../components/ProgressBar';
import Slide4 from '../components/Slide4';
import axios from 'axios';
import Time from '../components/Time';
import Transactions from '../components/Transactions';
import StatusState from '../components/StatusState';
import LoadingSpinner from '../components/LoadingSpinner';
const UserTransaction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [Open, Close] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add this loading state
  const toggleDropdown = () => Close(!Open);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Here you should fetch the actual transaction data
    // For now, we will simulate fetching data with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate data fetching completion
    }, 3000); // This simulates a fetch taking 3 seconds

    return () => clearTimeout(timer); // Clean up the timeout if the component unmounts
  }, []);

  // Early return if data is still loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ backgroundImage: "url('assets/3.jpg')"}} className={`bg min-h-screen overflow-x-hidden bg-cover Home ${isOpen ? 'md:pl-20' : 'md:pl-44'}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`w-full h-full bg-black-600/50 backdrop-brightness-50 content ${isOpen ? '' : 'active-sidebar'}`}>
        {/* Main content goes here */}
        <head className="flex flex-col md:flex md:flex-row md:space-x-6 md:justify-between md:py-4 md:items-center">
       
       <div>
         <Slide4/>
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
               <a href="/support">Support</a>
               <a href="/login
">Logout</a>
               </div>
           )}
           </div>
       </div>
   </head>
        <div className='md:px-20 pl-20'>
            <body className='text-black space-y-8 pt-24 pb-20 min-h-screen'>
                  <Transactions/>
            </body>
          <footer className='pr-4  w-full justif-end' >
                <div className='bg p-3  text-white rounded-tl-xl rounded-tr-xl'>
                  <div className='flex justify-center font-bold text-[9px] md:text-xl'>
                  @2024 All rights reserved Bitpay Payment Systems Limited

                  </div>
                </div>
          </footer>
        </div>
        
      </div>
    </div>
  );
};

export default UserTransaction;
