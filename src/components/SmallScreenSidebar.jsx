import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { MdSpaceDashboard, MdContactSupport } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FiMessageSquare } from 'react-icons/fi';
import { CgLogOut } from "react-icons/cg";

const SmallScreenSidebar = ({ sidebarVisible, handleSidebarToggle }) => {
  const menus = [
    { name: "Dashboard", link: "/user", icon: MdSpaceDashboard },
    { name: "Balance", link: "/balance", icon: FaWallet },
    { name: "Profile", link: "/profile", icon: ImProfile },
    { name: "Transfers ", link: "/usertransaction", icon: FiMessageSquare },
    { name: "Support", link: "/support", icon: MdContactSupport },
    { name: "Logout", link: "/login", icon: CgLogOut }
  ];

  const buttonHeight = '50px'; // Adjust button height as needed

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 50 }}>
      {/* Toggle Button */}
      <button
        onClick={handleSidebarToggle}
        className="text-white p-2   flex md:hidden"
        style={{ height: buttonHeight, width: '100%', position: 'relative' }}
      >
        {sidebarVisible ? <AiOutlineArrowLeft size={20} /> : <AiOutlineArrowRight size={20} />}
      </button>

      {/* Sidebar Menu */}
      {sidebarVisible && (
        <div
          style={{
            width: '50vw', // Half of the viewport width
            height: '100vh',
            transition: 'width 0.3s',
            backgroundImage: "url('assets/3.jpg')",
            backgroundColor: 'black',
            position: 'fixed',
            top: buttonHeight, // Start the sidebar below the button
            left: 0,
            zIndex: 40,
            overflowY: 'auto' // Add scroll if the content overflows
          }}
          className="rounded-tr-3xl"
        >
          <div className="flex flex-col justify-between ">
            <Link to='/user'>
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="rounded-full mx-auto"
                style={{
                  width: 50,
                  transition: 'width 0.3s'
                }}
              />
            </Link>
        
            <div className='space-y-3 pt-5 font-bold items-center'>
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  to={menu.link}
                  className="flex items-center space-x-2 p-4 hover:bg-gray-800"
                >
                  <menu.icon size="24" className="text-white" />
                  <span className="text-white">{menu.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallScreenSidebar
