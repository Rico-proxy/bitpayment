import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdFlash } from 'react-icons/io';
import { SiLitecoin } from "react-icons/si";
function CryptoSlide3() {
  const [litecoinData, setLitecoinData] = useState({
    rank: '',
    symbol: '',
    priceUsd: '',
    prevPriceUsd: null,
  });
  const [priceColor, setPriceColor] = useState('text-white');

  useEffect(() => {
    const fetchLitecoinData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets/litecoin');
        const newPriceUsd = parseFloat(response.data.data.priceUsd).toFixed(2);

        // Determine the color based on the price change
        if (litecoinData.prevPriceUsd) {
          if (newPriceUsd < litecoinData.prevPriceUsd) {
            setPriceColor('text-red-500');
          } else if (newPriceUsd > litecoinData.prevPriceUsd) {
            setPriceColor('text-green-500');
          }
        }

        // Update state with the new price and the previous price
        setLitecoinData({
          rank: response.data.data.rank,
          symbol: response.data.data.symbol,
          priceUsd: newPriceUsd,
          prevPriceUsd: litecoinData.priceUsd,
        });

        // Reset price color to white after a short delay
        setTimeout(() => {
          setPriceColor('text-white');
        }, 2000); // 2 seconds delay

      } catch (error) {
        console.error('Error fetching Litecoin data:', error);
      }
    };

    // Fetch Litecoin data periodically
    const interval = setInterval(fetchLitecoinData, 10000); // Fetch every 10 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [litecoinData.prevPriceUsd, litecoinData.priceUsd]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black p-4">
      <div className="flex flex-col gap-5 items-center text-center mb-4">
        <div className='flex flex-row items-center text-center space-x-4'>
            <div className=''>
              <SiLitecoin className="text-silver-300 text-3xl " /> {/* Adjust icon to a Litecoin icon if available */}
            </div>
            <div>
               <div className=''>
                  <p className="text-sm text-white">{litecoinData.symbol} / U.S. DOLLAR</p>
                  {/* Conditionally apply text color based on price change */}
                  <p className={`text-2xl font-semibold ${priceColor}`}>${litecoinData.priceUsd}</p>
              </div>
            </div>
            <div>
          <IoMdFlash className=" text-gray-300 text-xl" />
         </div>
        </div>
         
        </div>
      <p className="text-xs opacity-75 text-white">Bitpay Payment Systems</p>
    </div>
  );
}

export default CryptoSlide3;
