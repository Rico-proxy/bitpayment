import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button2 from './Button2';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`font-bold top-0 left-0 z-50 md:px-[80px] md:flex flex-row items-center text-center justify-around p-5 h-16 fixed w-full ${scrolled ? 'bg-white text-black'  : 'text-white'}`}>
      <div className="hidden text-[17px] font-bold md:flex md:flex-col">
        <img
          src="/assets/logo.svg"
          alt="Digital Currency"
          width={100}
          height={100}
        />
        <div>
          <p className=" italic">Payment Systems</p>
        </div>
      </div>
      <ul className="hidden md:flex space-x-6 text-[16px]">
        <li><a href="#home" className="hover-underline py-2 px-4 rounded-md">Home</a></li>
        <li><a href="#about" className="hover-underline py-2 px-4 rounded-md">About Us</a></li>
        <li><a href="#services" className="hover-underline py-2 px-4 rounded-md">Services</a></li>
        <li><a href="#contact" className="hover-underline py-2 px-4 rounded-md">Contact Us</a></li>
      </ul>
      <div className='hidden md:flex md:flex-row space-x-6 items-center text-center'>
        <Link className='hover:bg-[#2a3b64] text-[13px] hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl text-white font-bold py-4 px-8 rounded-lg' to='/login'>CLIENT LOGIN</Link>    
        <Link to="/website" className='text-2xl'>🇨🇦</Link>
        <Link to="/website" className='text-2xl'>🇬🇧</Link>
      </div>
      {/* Render Button2 only when scrolled is true */}
      {scrolled && (
        <div className='flex justify-end md:hidden'>
          <Button2/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
