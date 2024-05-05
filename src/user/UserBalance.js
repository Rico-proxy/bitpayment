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
import Slide3 from '../components/Slide3';
import axios from 'axios';
import Time from '../components/Time';
import WalletCard from '../components/WalletCard';
import MainBalance from '../components/MainBalance';
import MainBalance2 from '../components/MainBalance2';
import Three from '../components/Three';
import PiChart from '../components/PiChart';
import WeeklySummary from '../components/WeeklySummary';
import StatusState from '../components/StatusState';
import CryptoCurrencyConverter from '../components/CryptoCurrencyConverter';
import CryptoPrices from '../components/Crypto';
import Slide2 from '../components/Slide2';
import RecentTransactionSmall from '../components/RecentTransactionSmall';
import BalanceSlide from '../components/BalanceSlide';
import LoadingSpinner from '../components/LoadingSpinner';
import WeeklySummarySmall from '../components/WeeklySummarySmall';
const UserBalance = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [Open, Close] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Fetch data here with useEffect
  useEffect(() => {
    // Simulate data fetching with setTimeout
    // Replace this with your actual data fetching logic
    const timer = setTimeout(() => {
      setIsLoading(false); // Data has finished loading
    }, 3000); // Simulate a 3 second loading time
    
    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  const toggleDropdown = () => Close(!Open);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return <LoadingSpinner />; // Show the loading spinner while data is loading
  }


  return (
    <div style={{ backgroundImage: "url('assets/3.jpg')"}} className={`bg min-h-screen overflow-x-hidden bg-cover Home ${isOpen ? 'md:pl-20' : 'md:pl-44'}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`w-full h-full bg-black-600/50 backdrop-brightness-50 content ${isOpen ? '' : 'active-sidebar'}`}>
        {/* Main content goes here */}
        <head className="flex flex-col md:flex md:flex-row md:space-x-6 md:justify-between md:py-4 md:items-center">
       
       <div>
         <Slide3/>
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
        <div className='mx-14 md:mx-6'>
            <body className=''>
              <div className='pb-20 pl-10 pt-10 md:pt-0  min-h-screen md:flex md:flex-row '>
                    <div className='md:flex flex-col justify-between'>
                        <div className='md:grid md:grid-cols-2 md:gap-2'>
                            <div className=''>
                                <WalletCard/>
                            </div>
                            <div className='w-[60vh] pt-3 hidden md:block '>
                                    <MainBalance/>
                      
                            </div>
                            <div className='w-[60vh] pt-3  md:hidden pb-10'>
                                    <MainBalance2/>
                      
                            </div>
                         <div className='hidden md:block'>
                         <RecentTransaction/>
                          </div>
                          <div className=' md:hidden'>
                            <RecentTransactionSmall/>
                            </div>   
                       
                        </div>
                       
                    </div>
                    <div className='pt-5 md:pt-0 md:pl-[50px] flex flex-col space-y-5'>
                    <div className='hidden md:block'>
                    <WeeklySummary/>
                      </div>      
                  <div className=' md:hidden'>
                    <WeeklySummarySmall/>
                  </div>
                      </div>
                     
                  
                      </div>  
                      <div className='hidden md:block'>
                        <BalanceSlide/>
                        </div> 
            </body>
            <footer className=' md:pr-4 pt-0 md:pt-10 pl-20' >
                <div className='bg md:p-3  text-white rounded-tl-xl rounded-tr-xl'>
                  <div className='font-bold flex md:justify-center  text-[10px] md:text-xl p-4 md:p-0'>
                  @2024 All rights reserved Bitpay Payment Systems Limited
                  </div>
                </div>
        </footer>
        </div>
        
      </div>
    </div>
  );
};

export default UserBalance;
