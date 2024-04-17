import React from 'react';
import { BiBitcoin } from 'react-icons/bi'; // Use appropriate icons from react-icons
 // Use appropriate icons from react-icons
import { FaRegClipboard } from 'react-icons/fa'; // Icon for the clipboard

const WalletAddress = () => {
  // Dummy wallet addresses, replace with real data
  const bitcoinAddress = '0xsD12F32xvW3deG5...';
  const litecoinAddress = '0xsD12F32xvW3deG5...';

  return (
    <div className='max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 '>
      <h2 className='text-xl font-bold mb-4'>Wallet addresses</h2>
      <div className='space-y-2'>
                <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1" htmlFor="amount">Bitcoin Wallet</label>
                <div className="flex">
                <span className="inline-block bg-gray-200 rounded-l px-3 py-2 text-black">$</span>
                <input
                    type="text"
                    id="amount"
                    className="flex-1 p-2 border-t border-b focus:outline-none text-black"
                    placeholder="enter amount"
                />
                {/* Dropdown for currency selection */}
                <select
                    id="currency"
                    className="bg-gray-200 border rounded-r px-3 py-2 text-gray-600 cursor-pointer"
                    // You would handle onChange to update the state
                >
                    <option value="BTC">BTC</option>
                    <option value="LTC">LTC</option>
                    <option value="ETH">ETH</option>
                </select>
                </div>
                
            </div>
            <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1" htmlFor="amount">Litecoin Wallet</label>
            <div className="flex">
            <span className="inline-block bg-gray-200 rounded-l px-3 py-2 text-black">$</span>
            <input
                type="text"
                id="amount"
                className="flex-1 p-2 border-t border-b focus:outline-none text-black"
                placeholder="enter amount"
            />
            {/* Dropdown for currency selection */}
            <select
                id="currency"
                className="bg-gray-200 border rounded-r px-3 py-2 text-gray-600 cursor-pointer"
                // You would handle onChange to update the state
            >
                <option value="BTC">BTC</option>
                <option value="LTC">LTC</option>
                <option value="ETH">ETH</option>
            </select>
            </div>
            
      </div>
      </div>
      <div className='flex justify-between mt-6'>
        <button className='text-lg text-white bg-orange-500 hover:bg-orange-600 font-bold py-2 px-6 rounded'>View all</button>
        <button className='text-lg text-white bg-orange-500 hover:bg-orange-600 font-bold py-2 px-6 rounded'>Settings</button>
      </div>
    </div>
  );
};

export default WalletAddress;
