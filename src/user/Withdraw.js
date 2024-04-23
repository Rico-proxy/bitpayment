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
import Transactions from '../components/Transactions';
import TransferType from '../components/TransferType';
const Withdraw = () => {
  
  

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
                <h1 className="text-[16px] font-semibold text-white">Transaction Details</h1>
               
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
        <div className='px-20'>
            <body className='text-black space-y-8  min-h-screen'>
            <main className='pt-10 ml-20 flex flex-col px-10 '>
              <div>
                  <h1 className='text-2xl font-bold text-black'>Withdrawal</h1>
              </div>
              <section className='pt-10 '>
              <div className='flex flex-col items-center'>
                  <img
                          src="/assets/logo.svg"
                          alt="Digital Currency"
                          width={200}
                          height={200}
                          className='mx-auto'
                        />
                        <h1 className='text-2xl  italic text-blue-900 font-bold'>Payment System</h1>
                </div> 
                          <div className='pt-20 flex flex-col justify-center items-center text-center space-y-3 '>
                              
                                 <img src="/assets/qr.png" alt="Withdraw" width={300} height={300} className='mx-auto' />
                                 <p className='text-white'>Please scan the code to make a Withdrawal</p>
                          </div>
              </section>
              <section>
              </section>
          </main>
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

export default Withdraw;
