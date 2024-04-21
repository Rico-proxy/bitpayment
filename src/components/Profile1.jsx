import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaCreditCard, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { GrLocation } from "react-icons/gr";
import { BsGlobeAmericas } from "react-icons/bs";
import SetPinComponent from './SetPin';
const Profile1 = () => {
  return (
    <div className="bg text-white p-6 rounded-xl shadow-lg ">
      <div className="flex justify-between items-center">
        <div className='flexflex-col'>
        <span className="text-sm font-semibold">ID Payment</span>
        <div className="text-2xl font-bold ">#00123521</div>
        </div>
        <SetPinComponent/>
      </div>
      
      <div className="flex justify-between items-center pt-10">
        <img className="h-20 w-20 rounded-full mr-3" src="assets/1.png" alt="Thomas Khun" />
        <div>
          <div className="font-bold">Thomas Khun</div>
          <div className="text-purple-300">@thomaskhuncoro</div>
        </div>
        <div className="flex items-center ml-auto">
          <FaMoneyBillAlt className="mr-1" />
          <span className='text-xl'>$776</span>
        </div>
      </div>
      <div className="flex flex-row space-x-14  justify-between items-center mt-6">
       <div className='flex flex-col'>
            <div className="bg-black flex items-center mt-2 bg p-4 rounded-lg">
                <FaPhone className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className='pl-3'>Phone</span>
                  <span>+12 345 5662 66</span>
                </div>
              </div>
              <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <FaEnvelope className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className='pl-3'>demo@mail.com</span>
                  <span>+12 345 5662 66</span>
                </div>
              </div>
       </div> 
       <div className='flex flex-col'>
            <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <GrLocation  className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className=''>Address</span>
                  <span>Karu</span>
                </div>
              </div>
              <div className="bg-black  flex items-center mt-2 bg p-4 rounded-lg">
                <BsGlobeAmericas  className="mr-2 font-bold text-xl" />
                <div className='flex flex-col '>
                  <span className='pl-3'>Website</span>
                  <span>www.asdas.com</span>
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
