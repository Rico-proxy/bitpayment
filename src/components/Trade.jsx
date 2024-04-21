import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trade = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const userId = sessionStorage.getItem('userId');
        const response = await axios.get('https://api.nuhu.xyz/api/Wallet/get-transactions', {
          params: { userId }
        });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="overflow-x-auto relative shadow-md bg-[#0f1b39] text-white">
      <div className='flex justify-center p-3'>Recent Transaction</div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs border-b bg-gray-300 text-black">
          <tr>
            <th scope="col" className="py-3 px-6">
              Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Type
            </th>
            <th scope="col" className="py-3 px-6">
              Wallet Type
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody >
          {transactions.map((transaction, index) => (
            <tr className="border-b text-white" key={index}>
              <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                ${transaction.amount}
              </th>
              <td className="py-4 px-6">
                {transaction.type}
              </td>
              <td className="py-4 px-6">
                {transaction.walletType}
              </td>
              <td className="py-4 px-6">
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trade;
