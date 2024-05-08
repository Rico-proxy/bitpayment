import React, { useEffect, useState } from 'react';
import Circle from './Circle';
import Circle2 from './Circle2';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const ThreeCards = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        let intervalId = null;

        const fetchUserData = async () => {
            if (userId) {
                try {
                    const response = await axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`);
                    setUserInfo(response.data);
                } catch (error) {
                    console.error('Error fetching user details:', error);
                    setUserInfo({
                        usdAccountBalance: 0, // Ensure default values are 0
                        walletBalance: 0,
                        ledgerAccountBalance: 0
                    });
                }
            }
        };

        fetchUserData();
        intervalId = setInterval(fetchUserData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    const formatCurrency = (amount) => {
        // Default to 0 if amount is falsy (undefined, null, 0, etc)
        const validAmount = amount || 0;
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(validAmount);
    };

  return (
   <card className=' flex flex-col space-y-2 pl-6 md:pl-0'>
            <div  className="bg h-[20vh] w-[270px] md:h-[20vh] md:w-[40vh] text-white p-4 rounded-xl flex justify-between items-center space-x-6 shadow-lg">
            <div>
            <p className="text-[18px] font-serif">{formatCurrency(userInfo.usdAccountBalance)}</p>

                <p className="text-sm">USD Acount Balance</p>
                <p className="text-xs text-blue-300">+0.5% than last month</p>
            </div>
            <div className="p-2 bg-blue-600 rounded-full">
                <svg width="53" height="51" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M39.0469 2.3125C38.3437 3.76563 38.9648 5.52344 40.418 6.22657C44.4609 8.17188 47.8828 11.1953 50.3203 14.9805C52.8164 18.8594 54.1406 23.3594 54.1406 28C54.1406 41.3125 43.3125 52.1406 30 52.1406C16.6875 52.1406 5.85937 41.3125 5.85937 28C5.85937 23.3594 7.18359 18.8594 9.66797 14.9688C12.0937 11.1836 15.5273 8.16016 19.5703 6.21485C21.0234 5.51173 21.6445 3.76563 20.9414 2.30079C20.2383 0.847664 18.4922 0.226569 17.0273 0.929694C12 3.34376 7.74609 7.09375 4.73437 11.8047C1.64062 16.6328 -1.56336e-06 22.2344 -1.31134e-06 28C-9.60967e-07 36.0156 3.11719 43.5508 8.78906 49.2109C14.4492 54.8828 21.9844 58 30 58C38.0156 58 45.5508 54.8828 51.2109 49.2109C56.8828 43.5391 60 36.0156 60 28C60 22.2344 58.3594 16.6328 55.2539 11.8047C52.2305 7.10547 47.9766 3.34375 42.9609 0.929693C41.4961 0.238287 39.75 0.84766 39.0469 2.3125V2.3125Z" fill="#53CAFD"/>
                                                                    <path d="M41.4025 26.4414C41.9767 25.8671 42.258 25.1171 42.258 24.3671C42.258 23.6171 41.9767 22.8671 41.4025 22.2929L34.0314 14.9218C32.9533 13.8437 31.5236 13.2578 30.0119 13.2578C28.5002 13.2578 27.0587 13.8554 25.9923 14.9218L18.6212 22.2929C17.4728 23.4414 17.4728 25.2929 18.6212 26.4414C19.7697 27.5898 21.6212 27.5898 22.7697 26.4414L27.0939 22.1171L27.0939 38.7695C27.0939 40.3867 28.4064 41.6992 30.0236 41.6992C31.6408 41.6992 32.9533 40.3867 32.9533 38.7695L32.9533 22.1054L37.2775 26.4296C38.4025 27.5781 40.2541 27.5781 41.4025 26.4414Z" fill="#53CAFD"/>
                                                                </svg>
            </div>
            </div>
            <div className="bg h-[20vh] w-[270px] md:h-[20vh] md:w-[40vh] text-white p-4 rounded-xl flex justify-between items-center space-x-6 shadow-lg">
            <div>
                <p className="text-[18px] font-serif">{formatCurrency(userInfo.walletBalance)}</p>
                <p className="text-sm">Wallet Balance</p>
                <p className="text-xs text-blue-300">+0.5% than last month</p>
            </div>
            <div className="p-2 ">
                <Circle/>
            </div>
            </div>
            <div className="bg h-[20vh] w-[270px] md:h-[20vh] md:w-[40vh] text-white p-4 rounded-xl flex justify-between items-center space-x-6 shadow-lg">
            <div>
                <p className="text-[18px] font-serif">{formatCurrency(userInfo.ledgerAccountBalance)}</p>
                <p className="text-sm">Ledger Acc </p>
                <p className="text-xs text-blue-300">+0.5% than last month</p>
            </div>
            <div className="p-2">
                <Circle2/>
            </div>
             </div>
   </card> 
    
  );
};

export default ThreeCards;
