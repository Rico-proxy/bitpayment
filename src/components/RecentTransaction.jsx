import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const RecentTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Retrieving the user ID from session storage
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
          console.log('User ID not found in session storage.');
          return;
        }
        const response = await fetch(`http://152.42.139.53:4040/api/Wallet/get-transactions?userId=${userId}`);
        const data = await response.json();
        
        if (data && data.transactions) {
          setTransactions(data.transactions.map(transaction => ({
            ...transaction,
            statusColor: getStatusColor(transaction.status)
          })));
        }
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Successful':
        return 'bg-green-500';
      case 'Reverted':
        return 'bg-red-500';
      default:
        return 'bg-yellow-400'; // Assuming other statuses are pending or similar
    }
  };

  return (
    <div className="bg w-[800px] recent text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Latest Transactions</h2>
      <p className="mb-6">Below are your most recent transaction updates.</p>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center">
              {/* Placeholder for avatar, replace '/path-to-avatar.jpg' with your path or logic to handle avatars */}
              <img className="h-12 w-12 rounded-full mr-4" src="/path-to-avatar.jpg" alt={`${transaction.name}`} />
              <div>
                <p className="font-semibold">{transaction.name}</p>
                <p className="text-xs text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <div className="mr-4">
              <p className="font-semibold">{transaction.amount}</p>
              <p className="text-xs text-gray-400">{transaction.card}</p>
            </div>
            <div className={`flex items-center ${transaction.statusColor} text-xs font-semibold px-3 py-1 rounded-full`}>
              {transaction.status}
              <FaCaretDown className="h-4 w-4 ml-2" />
            </div>
            <FaCaretDown className="h-6 w-6" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransaction;
