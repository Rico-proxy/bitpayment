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
const UserProfile = () => {
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
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(amount);
  };
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
               <a href="#inbox">Inbox</a>
               <a href="/login
">Logout</a>
               </div>
           )}
           </div>
       </div>
   </head>
        <div className='px-6 pl-20 md:pl-0'>
            <body className='pb-20  min-h-screen '>
                    <div className='md:flex md:flex-row md:justify-around'>
                           <div>
                            <Profile1/>
                            </div>
                            <div className='flex flex-col space-x-4'>
                                <cardmain className='pt-10 md:pt-0 space-y-3 md:flex md:flex-row md:items-center md:space-x-4 md:pl-4 '>
                                <card className=" bg h-[27vh]  w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-4 items-center  shadow-lg">
                
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
                                    <card className="bg h-[27vh]  w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-4 items-center  shadow-lg">

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
                                 <div className='pt-2'>
                                <CryptoPrice2/>
                               
                                 </div>
                               
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

export default UserProfile;
