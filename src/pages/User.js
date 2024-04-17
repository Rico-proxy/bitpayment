import React, { useState, useRef, useEffect } from 'react';
import { BiEnvelope, BiBitcoin } from "react-icons/bi";
import axios from 'axios';
import { BsBell, BsBoxArrowInDownLeft } from "react-icons/bs";
import Button from '../components/Button';
import TimeBasedGreeting from '../components/Time';
import { AiOutlineArrowDown, AiOutlineSend } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import Chart from '../components/Chart';
import Copy from '../components/Copy';
import Crypto from '../components/Crypto';
import Trade from '../components/Trade';
import Calender from '../components/MyCalender';
import { IoIosArrowDown } from "react-icons/io";
import SafeDeals from '../components/SafeDeals';
import Form from '../components/Form';
import Transfer from '../components/Transfer';
import WalletAddress from '../components/WalletAddress';
import CurrencyRate from '../components/CurrencyRate';
import Pin from '../components/Pin';
import Slide from '../components/Slide';
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaBitcoinSign } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PreventBackNavigation from '../components/PreventBackNavigation';
const User = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
   // Retrieve user ID from session storage instead of local storage
   const userId = sessionStorage.getItem('userId');
    let intervalId = null;

    const fetchUserData = () => {
      if (userId) {
        axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`)
          .then(response => {
            setUserInfo(response.data);
          })
          .catch(error => {
            console.error('Error fetching user details:', error);
          });
      }
    };

    // Call fetchUserData immediately and then set up the interval
    fetchUserData();
    intervalId = setInterval(fetchUserData, 10000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empt
  

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownVisible(prev => !prev);

  // Effect for handling clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  return (
    <div className='min-h-screen text-white'>
      <PreventBackNavigation/>
      <header className="h-16 fixed w-full bg-[#0f1b39] z-20">
        <div className='flex flex-row justify-between items-center text-center py-2 px-4 z-40'>
            <div className='flex flex-row items-center text-center space-x-5 '>
                <div>
                  <Button/>
                </div>
            </div>
            <div className='flex flex-row items-center space-x-4 relative' ref={dropdownRef}>
              <div>
                <BsBell className='text-xl'/>
              </div>
              <button className='flex flex-row items-center' onClick={toggleDropdown}>
                <p>{userInfo.fullName}</p>
                <IoIosArrowDown className='text-xl'/>
              </button>
              {/* Dropdown Menu */}
              {isDropdownVisible && (
                <div className='absolute top-6 right-5 bg-[#0f1b39] text-white p-2 rounded shadow '>
                  <ul>
                    <li className='hover:bg-gray-700 p-2 cursor-pointer'>Profile</li>
                    <li className='hover:bg-gray-700 p-2 cursor-pointer'>Settings</li>
                  </ul>
                </div>
                )}
              </div>
        </div>
      </header>
          <main className='pb-5 px-5 md:px-20 md:pb-20 md:flex md:flex-col text-black pt-24 bg-slate-200 min-h-screen'>
                  <Slide/>
                  
                <section className='flex flex-col pt-10'>
                        <div className='text-black text-2xl font-bold md:flex flex-row space-y-5 justify-between items-center '>
                           <div className='flex flex-row space-x-2 text-xl'>
                             <div className="flex flex-col text-black text-xl">
                                <span><TimeBasedGreeting/></span> 
                           </div>
                           <span>{userInfo.firstName}</span>
                            
                            </div>
                           <div className='flex flex-row justify-center'>
                           <Link to="/transfer" className="flex flex-col items-center p-4 rounded-2xl">
                                  <div className="p-3 rounded-full bg-black">
                                    <AiOutlineArrowUp className="text-white md:text-3xl" />
                                  </div>
                                   <p className="md:text-xl font-light">Transfer</p>
                            </Link>
                            <Link to="/transfer" className="flex flex-col items-center p-4 rounded-2xl">
                                  <div className="p-3 rounded-full bg-black">
                                    <AiOutlineArrowDown className="text-white md:text-3xl" />
                                  </div>
                                   <p className="md:text-xl font-light">Receive</p>
                            </Link>
                            </div> 
                           
                            
                            <div className='md:flex md:flex-row md:space-x-3 justify-between'>
                              <div>
                              <p className='text-[19px]'>Ledger Account Number</p>
                              
                              <Copy className="text-sm"/>
                              </div>
                             <div className='flex md:hidden'>
                             <span className='text-[19px] font-bold'>Account Number:  {userInfo.accountNumber}</span>
                             </div>
                             
                            </div>
                            
                            
                         </div>
                         <span className='hidden md:flex text-xl font-bold'>Account Number:  {userInfo.accountNumber}</span>
                         
                        <div className='pl-14 md:pl-0 grid grid-cols-1 gap-6  md:px-0 md:grid md:grid-cols-3 md:justify-center pt-20'>
                            <card data-aos="fade-left" className='  rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6  bg-[#0f1b39] text-white'>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6'>
                                      <div>
                                      <BsCurrencyDollar   className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl text-white space-y-2'>
                                             <p className=''>{userInfo.accountType}</p>
                                            <p className='pl-4 text-center justify-center flex flex-row space-x-3'>
                                              <span>
                                              {userInfo.usdAccountBalance}
                                                </span>
                                              <span>
                                                (USD)
                                              </span>
                                              </p>
                                            
                                      </div>
                                      
                                  </div>
                            </card>
                            <card data-aos="fade-up" className='  rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6  bg-[#0f1b39] text-white'>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6'>
                                      <div>
                                      <FaBitcoinSign    className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl text-white space-y-2'>
                                             <p className=''>Wallet Balance</p>
                                            <p className='pl-4 text-center justify-center flex flex-row space-x-3'>
                                              <span>
                                              {userInfo.walletBalance}
                                                </span>
                                              <span>
                                                (USDT)
                                              </span>
                                              </p>
                                            
                                      </div>
                                      
                                  </div>
                            </card>
                            <card data-aos="fade-right" className='  rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6  bg-[#0f1b39] text-white'>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6'>
                                      <div>
                                      <BsCurrencyDollar   className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl text-white space-y-2'>
                                             <p className=''>Ledger</p>
                                            <p className='pl-4 text-center justify-center flex flex-row space-x-3'>
                                              <span>
                                              {userInfo.ledgerAccountBalance}
                                                </span>
                                              <span>
                                                (USD)
                                              </span>
                                              </p>
                                            
                                      </div>
                                      
                                  </div>
                            </card>
                        </div>
                </section>
              
                <section className='grid grid-cols-1 md:flex md:flex-row md:justify-between pt-10 gap-5 '>
                        <div className='h-[26vh]  md:h-[64vh] md:w-[120vh] bg-white rounded-lg border-t-2 border-[#0f1b39]'> 
                          <div className='md:p-10'>
                           <Chart/>
                          </div>
                        </div>
                      <div className='h-full md:h-[62vh] md:w-[49vh] bg-[#0f1b39] rounded-lg'>
                            <Crypto/>
                          </div>
                       
                        
                </section>
                <section className=' md:flex md:flex-row  justify-between pt-10 gap-5'>
                        <div className='rounded-2xl'> 
                            <Trade/>
                        </div>
                       
                      
                </section>
                <section className='md:flex md:flex-row gap-12'>
                  <div className=''>
                      <Calender/>
                  </div>
                  <div className='pt-10'>
                  <SafeDeals totalDeals={500} activeDeals={445} btcAmount={5.6307173} />
        
                  </div>
                </section>
                <section className='pt-10 '>
                  <CurrencyRate/>
                  <div className='pt-6 md:pt-10 flex flex-col space-y-6 gap-10 md:flex md:flex-row justify-between md:gap-3'>
                              <div>
                              <Transfer/>
                              </div>
                              <div>
                              <WalletAddress/>
                              </div>
                        </div>
                </section>
                
                
          </main>
          <footer className="h-16  w-full bg-[#0f1b39] ">
            <div className='flex flex-row justify-between items-center text-center py-4 px-4 z-40'>
                <div className='flex flex-row items-center text-center space-x-5 '>
                    <div>
                      icon
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-4'>
                      <div>
                        <BsBell className='text-xl'/>
                      </div>
                      <p>Sam Wright</p>
                </div>
            </div>
          </footer>

    </div>
  )
}

export default User