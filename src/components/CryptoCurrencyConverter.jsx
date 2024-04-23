import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoCurrencyConverter = () => {
  const [assets, setAssets] = useState([]);
  const [from, setFrom] = useState('bitcoin');
  const [to, setTo] = useState('ethereum');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        setAssets(response.data.data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    getAssets();
  }, []);

  const convert = () => {
    const fromAsset = assets.find(asset => asset.id === from);
    const toAsset = assets.find(asset => asset.id === to);
    if (fromAsset && toAsset) {
      const fromPrice = parseFloat(fromAsset.priceUsd);
      const toPrice = parseFloat(toAsset.priceUsd);
      const conversionRate = fromPrice / toPrice;
      setConvertedAmount((amount * conversionRate).toFixed(6));
    }
  };

  return (
    <div>
      <h1>CryptoCurrency Converter</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {assets.map(asset => (
          <option key={asset.id} value={asset.id}>
            {asset.name}
          </option>
        ))}
      </select>
      <span>to</span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {assets.map(asset => (
          <option key={asset.id} value={asset.id}>
            {asset.name}
          </option>
        ))}
      </select>
      <button onClick={convert}>Convert</button>
      <p>
        {amount} {from} is approximately {convertedAmount} {to}
      </p>
    </div>
  );
};

export default CryptoCurrencyConverter;
