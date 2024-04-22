import {React, useState, useEffect} from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaCreditCard, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { GrLocation } from "react-icons/gr";
import { BsGlobeAmericas } from "react-icons/bs";
import SetPinComponent from './SetPin';
import axios from 'axios';
import TotalBalance from './Total';
import StatusState from './StatusState';
const Profile1 = () => {
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
    <div className="bg text-white p-6 rounded-xl shadow-lg ">
      <div className="flex justify-between items-center">
        <div className='flexflex-col'>
        <span className="text-sm font-semibold">ID Details</span>
        <div className="text-sm font-bold "># {userInfo.id}</div>
        </div>
        <SetPinComponent/>
      </div>
      
      <div className="flex justify-between items-center pt-10">
        <img className="h-20 w-20 rounded-full mr-3" src="assets/logo.png" alt="Bitpayemnt Systems Limited" />
        <div>
          <div className="font-bold text-xl">{userInfo.fullName}</div>
          <div className="text-purple-300">{userInfo.email}</div>
        </div>
        <div className="flex items-center ml-auto">
          <FaMoneyBillAlt className="mr-1" />
          <span className='text-xl'><TotalBalance/></span>
        </div>
      </div>
      <div className="flex flex-row space-x-14  justify-between items-center mt-6">
       <div className='flex flex-col'>
            <div className="bg-black flex items-center mt-2 bg p-4 rounded-lg">
                <FaPhone className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className='pl-3'>Phone</span>
                  <span className='text-sm'>+ {userInfo.phoneNumber}</span>
                </div>
              </div>
              <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <FaEnvelope className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className='pl-3'>Email</span>
                  <span className='text-sm'>{userInfo.email}</span>
                </div>
              </div>
       </div> 
       <div className='flex flex-col'>
            <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <GrLocation  className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className=''>Address</span>
                  <span className='text-sm'>{userInfo.address}</span>
                </div>
              </div>
              <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <BsGlobeAmericas  className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className='pl-3'>Status:</span>
                  <span className='text-sm'><StatusState/></span>
                </div>
              </div>
       </div> 
       
      </div>
      <div className="flex flex-wrap justify-between text-xs mt-20">
        <div className="flex items-center mt-2">
          <FaCreditCard className="mr-2" />
          <span>MasterCard 404</span>
        </div>
        <div className="flex items-center mt-2">
          <FaCalendarAlt className="mr-2" />
          <span>April 29, 2020</span>
        </div>
        <div className="flex items-center mt-2">
          <FaCalendarAlt className="mr-2" />
          <span>June 5, 2020</span>
        </div>
        <div className="flex items-center mt-2">
          <FaCalendarAlt className="mr-2" />
          <span>June 4, 2020</span>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
