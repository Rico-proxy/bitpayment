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
import Slide5 from '../components/Slide5';
import axios from 'axios';
import Time from '../components/Time';
import WalletCard from '../components/WalletCard';
import MainBalance from '../components/MainBalance';
import Three from '../components/Three';
import PiChart from '../components/PiChart';
import WeeklySummary from '../components/WeeklySummary';
import Profile1 from '../components/Profile1';
import Circle5 from '../components/Circle5';
import { Link } from 'react-router-dom';
import { AiOutlineArrowUp } from 'react-icons/ai';
import SpecificsComponent from '../components/SpecificsComponent';
import User from './User';
import MovingLineChart from '../components/MovingLineChart';
import LiveClock from '../components/Clock';
import CryptoPrice2 from '../components/CryptoPrice2';
import StatusState from '../components/StatusState';
import Slide2 from '../components/Slide2';
import LoadingSpinner from '../components/LoadingSpinner';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [isOpen, setIsOpen] = useState(true); // State for sidebar open status
  const [Open, Close] = useState(false); // State for dropdown open status

  useEffect(() => {
      const userId = sessionStorage.getItem('userId');
      let intervalId = null;

      const fetchUserData = () => {
          if (userId) {
              axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`)
                  .then(response => {
                      setUserInfo(response.data);
                      setIsLoading(false); // Set loading to false on successful fetch
                  })
                  .catch(error => {
                      console.error('Error fetching user details:', error);
                      setIsLoading(false); // Ensure loading is set to false on error too
                  });
          } else {
              setIsLoading(false); // No userId means nothing to load
          }
      };

      fetchUserData();
      intervalId = setInterval(fetchUserData, 10000);

      return () => clearInterval(intervalId);
  }, []);

  const toggleDropdown = () => Close(!Open);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2, // Always display at least two decimal places
      maximumFractionDigits: 2  // Never display more than two decimal places
    }).format(amount);
  };

  if (isLoading) {
      return <LoadingSpinner />; // Show loading spinner while data is fetching
  }
  return (
    <div style={{ backgroundImage: "url('assets/3.jpg')"}} className={`bg min-h-screen overflow-x-hidden bg-cover Home ${isOpen ? 'md:pl-20' : 'md:pl-44'}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`w-full h-full bg-black-600/50 backdrop-brightness-50 content ${isOpen ? '' : 'active-sidebar'}`}>
        {/* Main content goes here */}
        <head className="flex flex-col md:flex md:flex-row md:space-x-6 md:justify-between md:py-4 md:items-center">
       
       <div>
         <Slide5/>
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
        <div className='px-6 pl-20 md:pl-0'>
            <body className='pb-20  min-h-screen '>
                    <div className='md:flex md:flex-row md:justify-around pt-10'>
                           <div>
                            <Profile1/>
                            </div>
                            <div className='flex flex-col space-x-4'>
                                <cardmain className='pt-10 md:pt-0 space-y-3 md:space-y-0  md:flex md:flex-row md:items-center '>
                                <card className=" bg md:h-[27vh]  md:w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-4 items-center  shadow-lg">
                
                                    <div className="p-2 flex space-x-12 items-center">
                                        <div className='flex flex-col'>
                                                <h1>
                                                    Ledger Account
                                                </h1>
                                                <span>
                                                ${formatCurrency(userInfo.ledgerAccountBalance)}
                                                </span>
                                        </div>
                                        <Link to='/usertransfer' className='flex flex-col'>
                                            <div className="bg-black p-3 rounded-lg text-white">
                                            <AiOutlineArrowUp  className="mx-auto hover:animate-bounce text-xl"/>
                                            </div>
                                            <div className='pt-2 text-white font text-sm'>Transfer</div>
                                        </Link>                                
                                    </div>
                                    <div className='flex items-center space-x-12'>
                                       
                                       <div className='flex flex-col'>
                                           <h1 className='text-sm font font-light'>ACCOUNT HOLDER</h1>
                                           <span>{userInfo.fullName}</span>
                                       </div>
                                   </div>
                                    
                                    </card>  
                                    <card className="bg md:h-[27vh]  md:w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-4 items-center  shadow-lg">

                                    <div className="p-2 flex space-x-12 items-center">
                                        <div className='flex flex-col'>
                                                <h1>
                                                    USD Balance
                                                </h1>
                                                <span>
                                                ${formatCurrency(userInfo.usdAccountBalance)}
                                                </span>
                                        </div>
                                        <Link to='/usertransfer' className='flex flex-col'>
                                            <div className="bg-black p-3 rounded-lg text-white">
                                            <AiOutlineArrowUp  className="mx-auto hover:animate-bounce text-xl"/>
                                            </div>
                                            <div className='pt-2 text-white font text-sm'>Transfer</div>
                                        </Link>                                
                                    </div>
                                    <div className='flex items-center space-x-12'>
                                       
                                        <div className='flex flex-col'>
                                            <h1 className='text-sm font font-light'>ACCOUNT HOLDER</h1>
                                            <span>{userInfo.fullName}</span>
                                        </div>
                                    </div>
                                    
                                    </card>
                                </cardmain>
                                 <div className='pt-4 md:pt-2'>
                                <CryptoPrice2/>
                               
                                 </div>
                               
                             </div>
                    </div>
                    <div className='hidden md:block'>
                    <Slide2/>
                      </div>
            </body>
            <footer className=' md:pr-4 pt-0 md:pt-10 pl-10' >
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

export default UserProfile;
