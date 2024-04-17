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
import UserList from '../components/UserList';
import TransactionActivity from '../components/TransactionActivity';


const Transaction = () => {

  
  

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
                <Link to="/admin" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <RiDashboardFill className='text-2xl text-white'/>
                  <span className='text-xl text-white'>User List</span>
                </Link>
                <Link to="/activity" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <BsFillPersonFill className='text-2xl text-white'/>
                  <span className='text-xl text-white'>User Activity</span>
                </Link>
                <Link to="/transaction" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
                  <FaQuestion className='text-2xl text-white'/>
                  <span className='text-xl text-white'>User Transaction</span>
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
          <main className='pt-10  flex flex-col  bg-slate-200 '>
              
              <div className='px-20'>
              <TransactionActivity/>
              </div>
          </main>
        </div>
    </div>
  );
};

export default Transaction;
