// Home.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { BsBellFill } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { TbMessage2Exclamation } from 'react-icons/tb';
import { RiSettings4Line } from 'react-icons/ri';
import Slide6 from '../components/Slide6';
import SupportMessage1 from '../components/SupportMessage1';
import Message from '../components/Message';
import StatusState from '../components/StatusState';
import LoadingSpinner from '../components/LoadingSpinner';
const UserSupport = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [Open, Close] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading to true

  useEffect(() => {
    // Simulate fetching data with a delay
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // After data is 'fetched', set isLoading to false
    }, 3000); // Replace with your actual data fetching logic

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => Close(!Open);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // If isLoading is true, show the spinner instead of the content
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
              <Slide6/>
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
        <div className='md:px-20 pl-14'>
            <body className='text-black space-y-8 pt-24 pb-20 min-h-screen'>
                 <SupportMessage1/>
            </body>
            <footer className='pr-5 md:pr-4 pt-0 md:pt-10 pl-10' >
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

export default UserSupport;
