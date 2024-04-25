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
const UserBalance = () => {
  
  

  const [isOpen, setIsOpen] = useState(true);
  const [Open, Close] = useState(false);


  const toggleDropdown = () => Close(!Open);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
               <a href="#inbox">Inbox</a>
               <a href="/login
">Logout</a>
               </div>
           )}
           </div>
       </div>
   </head>
        <div className='mx-14 md:mx-6'>
            <body className='pb-20 pt-10 md:pt-0  min-h-screen md:flex md:flex-row '>
                    <div className='md:flex flex-col justify-between'>
                        <div className='md:grid md:grid-cols-2 md:gap-2'>
                            <div className='w-[36vh] md:w-[40vh]'>
                                <WalletCard/>
                            </div>
                            <div className='w-[60vh] pt-3 hidden md:block'>
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
                        <div className=' hidden md:block'>
                          <BalanceSlide/>
                        </div>
                    </div>
                    <div className='pt-5 md:pt-0 md:pl-[190px] flex flex-col space-y-5'>
                    <WeeklySummary/>      
                    <div className=''>
                      <CryptoPrices/>
                    </div>
                      </div>
                     
                  
                   
            </body>
          <footer className='pr-4  w-full justif-end' >
                <div className='bg p-3  text-white rounded-tl-xl rounded-tr-xl'>
                  <div className='flex justify-center'>
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
