import React from 'react'
import { TfiWallet } from "react-icons/tfi"
const Transfer = () => {
  return (
    <div className='md:h-[50vh] md:w-[75vh] bg-[#0f1b39] rounded-xl text-white'>
    <div className="p-8 ">
 <div className="flex justify-between items-center mb-4">
   <h2 className="text-lg font-semibold text-white">Transfer Coins</h2>
 </div>
 <form>
   {/* Amount input */}
   <div className="mb-4 ">
     <label className="block text-sm text-gray-600 mb-1" htmlFor="amount">Amount</label>
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
     <p className="text-xs text-gray-500 mt-1">minimum value "0.001 BTC"</p>
   </div>
   {/* Wallet address input */}
   <div className="mb-4">
     <label className="block text-sm text-gray-600 mb-1" htmlFor="wallet-address">wallet address</label>
     <div className="flex">
       <span className="inline-block bg-gray-200 rounded-l px-3 py-2 text-gray-600">
         <TfiWallet className="font-bold text-lg" />
       </span>
       <input
         type="text"
         id="wallet-address"
         className="flex-1 p-2 border rounded-r focus:outline-none text-black"
         placeholder="OxsD12F32xvW3deG5..."
       />
     </div>
   </div>
   {/* Submit button */}
   <button
     type="submit"
     className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
   >
     Transfer Now
   </button>
 </form>
</div>
</div>
  )
}

export default Transfer