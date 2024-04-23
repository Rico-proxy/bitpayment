import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPrices = () => {
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
        // Initially fetch more data, we will slice it later based on the screen size
        setCryptos(response.data.data.slice(0, 7));
      } catch (error) {
        console.error('There was an error fetching the crypto prices:', error);
      }
    };

    fetchCryptos();
  }, []);

  // Determine the number of items to display based on window width
  const displayedCryptos = windowWidth < 640 ? cryptos.slice(0, 3) : cryptos;

  return (
    <div className="flex flex-col items-center p-4 text-white bg rounded-lg h-full">
      <h1 className="text-2xl font-bold my-4">Cryptocurrency Prices</h1>
      <div className="w-full">
        {displayedCryptos.map(crypto => {
          const priceChangeColor = parseFloat(crypto.changePercent24Hr) >= 0 ? 'text-green-500' : 'text-red-500';

          return (
            <div key={crypto.id} className="space-y-2 space-x-4 flex flex-col md:flex-row justify-between items-center py-2 border-b">
              <span className="text-sm font-semibold">{crypto.name} ({crypto.symbol})</span>
              <span>{`$${parseFloat(crypto.priceUsd).toFixed(2)}`}</span>
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

export default CryptoPrices;
