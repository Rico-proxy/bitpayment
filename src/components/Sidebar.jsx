import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { MdSpaceDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FiMessageSquare } from 'react-icons/fi';
import { MdContactSupport } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menus = [
    { name: "Dashboard", link: "/user", icon: MdSpaceDashboard },
    { name: "Balance", link: "/balance", icon: FaWallet },
    { name: "Profile", link: "/profile", icon: ImProfile },
    { name: "Transfers ", link: "/usertransaction", icon: FiMessageSquare },
    { name: "Support", link: "/support", icon: MdContactSupport },
    { name: "Logout", link: "/login", icon: CgLogOut }
  ];

  return (
    <div
      style={{
        transition: 'width 0.3s',
        width: isOpen ? '4rem' : '10rem', // Adjust the width as necessary
        backgroundImage: "url('assets/3.jpg')",
      }}
      className={` md:flex min-h-screen bg-black fixed top-0 left-0 z-40 rounded-tr-3xl`}
    >
      {/* Toggle Button always visible */}
      <button
        onClick={toggleSidebar}
        className="text-white absolute top-5 left-full -ml-10 z-50"
        style={{ transition: 'left 0.5s' }}
      >
        {isOpen ? <AiOutlineArrowRight size={20} /> : <AiOutlineArrowLeft size={20} />}
      </button>

      {/* Menu items */}
      <div className="flex flex-col justify-between h-full pt-24">
        <Link to='/user'>
          <img 
            src="/assets/logo.png" 
            alt="Logo" 
            className="rounded-full mx-auto" 
            style={{ 
              width: isOpen ? 50 : 70, 
              transition: 'width 0.3s'
            }}
          />
        </Link>
      
        <div className='space-y-4 pt-5 font-bold items-center'>
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.link}
              className="flex items-center space-x-2 p-4 hover:bg-gray-800"
            >
              <menu.icon size="24" className="text-white" />
              {!isOpen && <span className="text-white fade-in-right">{menu.name}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
