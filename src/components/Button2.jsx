import React, { useState, useRef, useEffect } from 'react';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

const Button2 = () => {
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
      <button onClick={toggleDrawer} className='text-black p-4'>
        {isOpen ? <AiOutlineClose size={24} /> : <CgMenu size={24} />}
      </button>
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full bg-[#0f1b39] p-8 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="mt-20 flex flex-col space-y-12">
          <Link to="/login" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
            <span className='text-xl'>Client Login</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
            <span className='text-xl'>Policy</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-3 border-b border-gray-700 pb-2">
            <span className='text-xl'>Terms</span>
          </Link>
          <Link to="/" className="mt-auto pt-40 flex items-center space-x-3">
            <BiLogOut className='text-3xl'/>
            <span className='text-xl'>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Button2;
