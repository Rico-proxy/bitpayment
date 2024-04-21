import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEthereum } from 'react-icons/fa'; // If this icon is available
import { IoMdFlash } from 'react-icons/io';

function CryptoSlide2() {
  const [etherData, setEtherData] = useState({
    rank: '',
    symbol: '',
    priceUsd: '',
    prevPriceUsd: null,
  });
  const [priceColor, setPriceColor] = useState('text-white');

  useEffect(() => {
    const fetchEtherData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets/ethereum');
        const newPriceUsd = parseFloat(response.data.data.priceUsd).toFixed(2);

        // Determine the color based on the price change
        if (etherData.prevPriceUsd) {
          if (newPriceUsd < etherData.prevPriceUsd) {
            setPriceColor('text-red-500');
          } else if (newPriceUsd > etherData.prevPriceUsd) {
            setPriceColor('text-green-500');
          }
        }

        // Update state with the new price and the previous price
        setEtherData({
          rank: response.data.data.rank,
          symbol: response.data.data.symbol,
          priceUsd: newPriceUsd,
          prevPriceUsd: etherData.priceUsd,
        });

        // Reset price color to white after a short delay
        setTimeout(() => {
          setPriceColor('text-white');
        }, 2000); // 2 seconds delay

      } catch (error) {
        console.error('Error fetching Ethereum data:', error);
      }
    };

    // Fetch Ethereum data periodically
    const interval = setInterval(fetchEtherData, 10000); // Fetch every 60 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [etherData.prevPriceUsd, etherData.priceUsd]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black p-4">
      <div className="flex flex-col gap-5 items-center text-center mb-4">
        <div className='flex flex-row items-center text-center space-x-4'>
            <div className=''>
              <FaEthereum className="text-blue-500 text-3xl" /> {/* Adjust the icon as needed */}
            </div>
            <div>
               <div className=''>
                  <p className="text-sm text-white">{etherData.symbol} / U.S. DOLLAR</p>
                  {/* Conditionally apply text color based on price change */}
                  <p className={`text-2xl font-semibold ${priceColor}`}>${etherData.priceUsd}</p>
              </div>
            </div>
            <div>
          <IoMdFlash className=" text-gray-300 text-xl" />
         </div>
        </div>
         
        </div>
      <p className="text-xs opacity-75 text-white">BitPayment Systems</p>
    </div>
  );
}

export default CryptoSlide2;
