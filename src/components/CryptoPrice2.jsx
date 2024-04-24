import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPrice2 = () => {
  const [cryptos, setCryptos] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        setCryptos(response.data.data.slice(0, 3));
      } catch (error) {
        console.error('There was an error fetching the crypto prices:', error);
      }
    };

    fetchCryptos();
  }, []);

  const displayedCryptos = windowWidth < 640 ? cryptos.slice(0, 3) : cryptos;

  return (
    <div className="flex flex-col items-center p-4 text-white bg rounded-lg h-full shadow-lg">
      <h1 className="text-3xl font-bold my-4 animate-pulse">Cryptocurrency Prices</h1>
      <div className="w-full">
        {displayedCryptos.map(crypto => {
          const priceChangeColor = parseFloat(crypto.changePercent24Hr) >= 0 ? 'text-green-400' : 'text-red-400';

          return (
            <div key={crypto.id} className="transition duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105 p-3 rounded-lg flex flex-col md:flex-row justify-between items-center border-b border-gray-200 my-2">
              <span className="text-lg font-semibold">{crypto.name} ({crypto.symbol})</span>
              <span className="text-lg">{`$${parseFloat(crypto.priceUsd).toFixed(2)}`}</span>
              <span className={`${priceChangeColor} font-semibold`}>
                {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoPrice2;
