import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyRate = () => {
  const [rates, setRates] = useState([]);
  const [displayedRates, setDisplayedRates] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      // Update displayed rates based on window width
      const maxRates = window.innerWidth < 640 ? 3 : rates.length;
      setDisplayedRates(rates.slice(0, maxRates));
    };

    // Set initial displayed rates and setup event listener for future updates
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, [rates]); // Re-run effect when rates array changes

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/rates');
        setRates(response.data.data.slice(0, 9)); // Fetch top 9 rates for display
      } catch (error) {
        console.error('There was an error fetching the currency rates:', error);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-black my-4">Currency Rates</h1>
      <div className="w-full">
        {displayedRates.map((rate, index) => (
          <div key={rate.id} className="flex flex-col md:flex-row justify-between items-center py-2 border-b border-gray-200">
            <span className="text-lg font-semibold black">{rate.symbol}</span>
            <span className="text-black">{`${parseFloat(rate.rateUsd).toFixed(2)} USD`}</span>
            <span className="text-black font-medium">{rate.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyRate;
