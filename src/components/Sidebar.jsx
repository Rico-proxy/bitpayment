// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { FaWallet } from "react-icons/fa";
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi';
import { ImProfile } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { FcSupport } from "react-icons/fc";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Define the menu items array
  const menus = [
    { name: "Dashboard", link: "/user", icon: MdSpaceDashboard },
    { name: "Balance", link: "/balance", icon: FaWallet },
    { name: "Transfer History", link: "/usertransaction", icon: FiMessageSquare },
    { name: "Profile", link: "/profile", icon: ImProfile },
    { name: "Support", link: "/support", icon: FcSupport },
  ];

  return (
    <div
      style={{
        transition: 'width 0.3s',
        width: isOpen ? '4rem' : '10rem', // Adjust the width as necessary
        backgroundImage: "url('assets/3.jpg')",
      }}
      className={`min-h-screen bg-black fixed top-0 left-0 z-40 rounded-tr-3xl`}
    >
      <button
        onClick={toggleSidebar}
        className="text-white absolute top-5 left-full -ml-10 z-50"
        style={{ transition: 'left 0.5s' }}
      >
        {isOpen ? <AiOutlineArrowRight size={20} /> : <AiOutlineArrowLeft size={20} />}
      </button>
      <div className="flex flex-col justify-between h-full pt-24">
        <Link to='/'>
      <img 
          src="/assets/logo.png" 
          alt="Adam Joe" 
          className="rounded-full mx-auto" 
          style={{ 
            width: isOpen ? 50 : 70, 
            transition: 'width 0.3s'
          }}
        />
        </Link>
      
        <div>
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.link}
              className="flex items-center space-x-2   p-4 hover:bg-gray-800"
            >
              <menu.icon size="24" className="text-white" />
              {!isOpen && <span className="text-white fade-in-right">{menu.name}</span>}
            </Link>
          ))}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
