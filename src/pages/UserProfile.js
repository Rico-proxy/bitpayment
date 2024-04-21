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
import Slide from '../components/Slide';
import axios from 'axios';
import Time from '../components/Time';
import WalletCard from '../components/WalletCard';
import MainBalance from '../components/MainBalance';
import Three from '../components/Three';
import PiChart from '../components/PiChart';
import WeeklySummary from '../components/WeeklySummary';
import Profile1 from '../components/Profile1';
import Circle5 from '../components/Circle5';
import { AiOutlineArrowUp } from 'react-icons/ai';
import SpecificsComponent from '../components/SpecificsComponent';
const UserProfile = () => {
  
  

  const [isOpen, setIsOpen] = useState(true);
  const [Open, Close] = useState(false);


  const toggleDropdown = () => Close(!Open);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundImage: "url('assets/3.jpg')"}} className={`bg min-h-screen overflow-x-hidden bg-cover Home ${isOpen ? 'pl-20' : 'pl-44'}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`w-full h-full bg-black-600/50 backdrop-brightness-50 content ${isOpen ? '' : 'active-sidebar'}`}>
        {/* Main content goes here */}
        <head className="flex flex-row space-x-6 justify-between py-4 items-center">
            <div className='flex flex-col'>
                <h1 className="text-[16px] font-semibold text-white">Profile</h1>
               
            </div>
            <div>
              <Slide/>
            </div>
            <div className="flex flex-row items-center space-x-5 pr-6">
                <div className="bg-black p-4 rounded-2xl text-white">
                <BsBellFill className="hover:animate-bounce"/>
                </div>
                <div className="bg-black p-4 rounded-2xl text-white">
                <TbMessage2Exclamation className="hover:animate-bounce"/>
                </div>
                <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button rounded-2xl">
                    <RiSettings4Line className="hover:animate-bounce text-2xl"/>
                </button>
                {Open && (
                    <div className="dropdown-content text-white">
                    <a href="#profile">Profile</a>
                    <a href="#inbox">Inbox</a>
                    <a href="#logout">Logout</a>
                    </div>
                )}
                </div>
            </div>
        </head>
        <div className='px-6'>
            <body className='pb-20  min-h-screen '>
                    <div className='flex flex-row justify-around'>
                           <div>
                            <Profile1/>
                            </div>
                            <div className='flex flex-col space-x-4'>
                                <cardmain className='flex flex-row space-x-4'>
                                <card className="bg h-[27vh]  w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-4 items-center  shadow-lg">
                
                                    <div className="p-2 flex space-x-12 items-center">
                                        <div className='flex flex-col'>
                                                <h1>
                                                    Main Balance
                                                </h1>
                                                <span>
                                                    $5,412
                                                </span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className="bg-black p-3 rounded-lg text-white">
                                            <AiOutlineArrowUp  className="mx-auto hover:animate-bounce text-xl"/>
                                            </div>
                                            <div className='pt-2 text-white font text-sm'>Transfer</div>
                                        </div>                                
                                    </div>
                                    <div className='flex items-center space-x-12'>
                                        <div className='flex flex-col'>
                                            <h1 className='text-sm font font-light'>VALID THRU</h1>
                                            <span>08/21</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h1 className='text-sm font font-light'>CARD HOLDER</h1>
                                            <span>Thmas Khun</span>
                                        </div>
                                    </div>
                                    
                                    </card>  
                                    <card className="bg h-[27vh]  w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-4 items-center  shadow-lg">

                                    <div className="p-2 flex space-x-12 items-center">
                                        <div className='flex flex-col'>
                                                <h1>
                                                    Main Balance
                                                </h1>
                                                <span>
                                                    $5,412
                                                </span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className="bg-black p-3 rounded-lg text-white">
                                            <AiOutlineArrowUp  className="mx-auto hover:animate-bounce text-xl"/>
                                            </div>
                                            <div className='pt-2 text-white font text-sm'>Transfer</div>
                                        </div>                                
                                    </div>
                                    <div className='flex items-center space-x-12'>
                                        <div className='flex flex-col'>
                                            <h1 className='text-sm font font-light'>VALID THRU</h1>
                                            <span>08/21</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h1 className='text-sm font font-light'>CARD HOLDER</h1>
                                            <span>Thmas Khun</span>
                                        </div>
                                    </div>
                                    
                                    </card>
                                </cardmain>
                                 <div className='pt-16'>
                                 <SpecificsComponent/>
                                 </div>
                               
                             </div>
                    </div>
            </body>
          <footer className='pr-4  w-full justif-end' >
                <div className='bg p-3  text-white rounded-tl-xl rounded-tr-xl'>
                  <div className='flex justify-center'>
                  @2021 All rights reserved Bitpayment Systems Limited
                  </div>
                </div>
          </footer>
        </div>
        
      </div>
    </div>
  );
};

export default UserProfile;
