import React, { useState, useRef, useEffect } from 'react';
import { CgMenu } from 'react-icons/cg';
import { RiDashboardFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { BiSupport } from "react-icons/bi";

const SideDrawer = () => {
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative'>
      <button onClick={toggleDrawer} className='text-white p-4'>
        <CgMenu size={20} />
      </button>
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full bg-[#0f1b39] p-8 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
      >
        <button onClick={toggleDrawer} className='absolute top-0 right-0 text-white p-4'>
          <AiOutlineClose size={24}/>
        </button>
        <nav className="mt-20 flex flex-col space-y-8">
          <Link to="/dashboard" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
            <RiDashboardFill className='text-2xl'/>
            <span className='text-xl'>Dashboard</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
            <BsFillPersonFill className='text-2xl'/>
            <span className='text-xl'>Profile</span>
          </Link>
          <Link to="/support" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
            <BiSupport className='text-2xl'/>
            <span className='text-xl'>Support</span>
          </Link>
          <Link to="/wallet" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
            <SlWallet className='text-2xl'/>
            <span className='text-xl'>My Wallet</span>
          </Link>
          <Link to="/login" className="mt-auto pt-40 flex items-center space-x-3">
            <BiLogOut className='text-3xl'/>
            <span className='text-xl'>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
