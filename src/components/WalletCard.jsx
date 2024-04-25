import {React, useState, useEffect} from 'react'
import { BsBellFill } from 'react-icons/bs'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import axios from 'axios';
import { Link } from 'react-router-dom';
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
  const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(amount);
      };
  return (
    <div className='bg rounded-lg'>
        <div className='p-6 flex flex-col space-y-8'>
                <div className='flex flex-row justify-between'>
                                <img 
                        src="/assets/logo.png" 
                        alt="Bitpay Payment" 
                        className="rounded-full" 
                       height={30} width={70}
                        />
                        <Link to='/usertransfer' className='flex flex-col'>
                            <div className="bg-black p-3 rounded-lg text-white">
                            <AiOutlineArrowUp  className="mx-auto hover:animate-bounce text-xl"/>
                            </div>
                            <div className='pt-2 text-white font text-sm'>Transfer</div>
                        </Link>
                </div>
                <div className='flex flex-row justify-between'>
                        <div className='font flex flex-col text-start space-y-2'>
                        <p className="text-[14px] md:text-xl font-semibold text-white">Wallet Balance</p>
                        <p className="text-[14px] md:text-[22px] font-serif text-white">${formatCurrency(userInfo.walletBalance)}</p>
                        <p className="text-[10px] md:text-xs text-white">+0.5% than last month</p>
                       </div> 
                       <Link to='/withdraw' className='flex flex-col'>
                            <div className="bg-black py-3 mx-1  rounded-lg text-white">
                            <AiOutlineArrowDown  className="mx-auto hover:animate-bounce text-xl"/>
                            </div>
                            <div className='pt-2 text-white font text-sm'>Withdraw</div>
                        </Link>
                </div>
        </div>
    </div>
  )
}

export default WalletCard