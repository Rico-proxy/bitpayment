import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBitcoin } from 'react-icons/fa';
import { IoMdFlash } from 'react-icons/io';

function Card() {
  const [bitcoinData, setBitcoinData] = useState({
    rank: '',
    symbol: '',
    priceUsd: '',
    prevPriceUsd: null,
  });
  const [priceColor, setPriceColor] = useState('text-white');

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets/bitcoin');
        const newPriceUsd = parseFloat(response.data.data.priceUsd).toFixed(2);

        // Determine the color based on the price change
        if (bitcoinData.prevPriceUsd) {
          if (newPriceUsd < bitcoinData.prevPriceUsd) {
            setPriceColor('text-red-500');
          } else if (newPriceUsd > bitcoinData.prevPriceUsd) {
            setPriceColor('text-green-500');
          }
        }

        // Update state with the new price and the previous price
        setBitcoinData({
          rank: response.data.data.rank,
          symbol: response.data.data.symbol,
          priceUsd: newPriceUsd,
          prevPriceUsd: bitcoinData.priceUsd,
        });

        // Reset price color to white after a short delay
        setTimeout(() => {
          setPriceColor('text-white');
        }, 2000); // 2 seconds delay

      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    // Fetch Bitcoin data periodically
    const interval = setInterval(fetchBitcoinData, 10000); // Fetch every 60 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [bitcoinData.prevPriceUsd, bitcoinData.priceUsd]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#0d162c] p-4">
      <div className="flex flex-col gap-5 items-center text-center mb-4">
        <div className='flex flex-row items-center text-center space-x-4 '>
            <div className=''>
              <FaBitcoin className="text-orange-500 text-3xl " />
            </div>
            <div>
               <div className=''>
                  <p className="text-sm text-white">{bitcoinData.symbol} / U.S. DOLLAR</p>
                  {/* Conditionally apply text color based on price change */}
                  <p className={`text-2xl font-semibold ${priceColor}`}>${bitcoinData.priceUsd}</p>
              </div>
            </div>
            <div>
          <IoMdFlash className=" text-gray-300 text-xl" />
         </div>
        </div>
         
        </div>
      <p className="text-xs opacity-75 text-white">BTCUSD Rates by TradingView</p>
    </div>
  );
}

export default Card;
