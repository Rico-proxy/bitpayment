import {React, useState, useEffect} from 'react'
import { BsBellFill } from 'react-icons/bs'
import { AiOutlineArrowUp } from "react-icons/ai";
import axios from 'axios';
const WalletCard = () => {
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
    <div className='bg rounded-lg'>
        <div className='p-6 flex flex-col space-y-8'>
                <div className='flex flex-row justify-between'>
                                <img 
                        src="/assets/logo.png" 
                        alt="Adam Joe" 
                        className="rounded-full" 
                       height={30} width={70}
                        />
                        <div className='flex flex-col'>
                            <div className="bg-black p-3 rounded-lg text-white">
                            <AiOutlineArrowUp  className="mx-auto hover:animate-bounce text-xl"/>
                            </div>
                            <div className='pt-2 text-white font text-sm'>Transfer</div>
                        </div>
                </div>
                <div className='flex flex-row justify-between'>
                        <div className='font flex flex-col text-start space-y-2'>
                        <p className="text-xl font-semibold text-white">Wallet Balance</p>
                        <p className="text-xl text-white font-light">${userInfo.walletBalance}</p>
                        <p className="text-xs text-white">+0.5% than last month</p>
                       </div> 
                       <div className='flex flex-col'>
                            <div className="bg-black p-3 rounded-lg text-white">
                            <AiOutlineArrowUp  className="mx-auto hover:animate-bounce text-xl"/>
                            </div>
                            <div className='pt-2 text-white font text-sm'>Transfer</div>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default WalletCard