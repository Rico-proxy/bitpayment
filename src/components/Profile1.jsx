import {React, useState, useEffect} from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaCreditCard, FaCalendarAlt, FaMoneyBillAlt, FaClock } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { GrLocation } from "react-icons/gr";
import { BsGlobeAmericas } from "react-icons/bs";
import SetPinComponent from './SetPin';
import axios from 'axios';
import TotalBalance from './Total';
import StatusState from './StatusState';
const Profile1 = () => {
 
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // Use AM/PM; set to false for 24-hour format
  });
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
 
  return (
    <div className="bg text-white px-2 md:px-0 md:p-6 rounded-xl shadow-lg ">
      <div className="flex justify-between items-center">
        <div className='flex flex-row space-x-1'>
        <span className="text-sm font-semibold">ID:</span>
        <div className="text-sm font-bold ">{userInfo.accountNumber}</div>
        </div>
        <SetPinComponent/>
      </div>
      
      <div className="space-y-3 text-center md:text-start md:flex md:justify-between md:items-center pt-10">
        <img className="h-20 w-20 rounded-full md:mr-3 mx-auto md:mx-2" src="assets/logo.png" alt="Bitpayemnt Systems Limited" />
        <div>
          <div className="font-bold text-xl">{userInfo.fullName}</div>
          <div className="text-purple-300">{userInfo.email}</div>
        </div>
        <div className="flex fex-row items-center justify-center md:flex md:items-center ml-auto">
          <FaMoneyBillAlt className="mr-1" />
          <span className='text-xl font-serif'><TotalBalance/></span>
        </div>
      </div>
      <div className="  md:flex md:flex-row md:space-x-14  md:justify-between md:items-center mt-6">
       <div className='flex flex-col'>
            <div className="bg-black flex items-center mt-2 bg p-4 rounded-lg">
                <FaPhone className="mr-1 font-bold text-xl" />
                <div className='flex flex-row  space-x-2 items-center text-center'>
                  <span className=''>Phone</span>
                  <span className='text-sm'>+{userInfo.phoneNumber}</span>
                </div>
              </div>
              <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <FaEnvelope className="mr-1 font-bold text-xl" />
                <div className='flex flex-row  space-x-2 items-center text-center'>
                  <span className=''>Email</span>
                  <span className='text-sm'>{userInfo.email}</span>
                </div>
              </div>
       </div> 
       <div className='flex flex-col'>
            <div className="bg-black  flex flex-row items-center mt-2 bg p-4 rounded-lg">
                <GrLocation  className="mr-1 font-bold text-xl" />
                <div className='flex flex-row  space-x-2 items-center text-center'>
                  <span className=''>Address</span>
                  <span className='text-sm'>{userInfo.address}</span>
                </div>
              </div>
              <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <BsGlobeAmericas  className="mr-1 font-bold text-xl" />
                <div className='flex flex-row  space-x-2 items-center text-center'>
                  <span className=''>Status</span>
                  <span className='text-sm'><StatusState/></span>
                </div>
              </div>
       </div> 
       
      </div>
      <div className="flex flex-wrap justify-between text-xs mt-20">

        <div className="flex items-center mt-2">
          <FaCalendarAlt className="mr-2" />
          <span>{currentDate}</span>
        </div>
        <div className="flex items-center mt-2">
          <FaClock className="mr-2" />
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
