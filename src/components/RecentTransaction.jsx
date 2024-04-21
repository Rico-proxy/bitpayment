import React from 'react';
import { FaCaretDown } from 'react-icons/fa';


const RecentTransaction = () => {
  const transactions = [
    {
      name: 'Livia Bator',
      date: 'June 5, 2020, 08:22 AM',
      amount: '+$5,553',
      card: 'MasterCard 404',
      status: 'Pending',
      avatar: '/path-to-avatar1.jpg', // replace with your image path
      statusColor: 'yellow',
    },
    {
      name: 'Livia Bator',
      date: 'June 5, 2020, 08:22 AM',
      amount: '+$5,553',
      card: 'MasterCard 404',
      status: 'Pending',
      avatar: '/path-to-avatar1.jpg', // replace with your image path
      statusColor: 'yellow',
    },
    {
      name: 'Livia Bator',
      date: 'June 5, 2020, 08:22 AM',
      amount: '+$5,553',
      card: 'MasterCard 404',
      status: 'Pending',
      avatar: '/path-to-avatar1.jpg', // replace with your image path
      statusColor: 'yellow',
    },
    {
      name: 'Livia Bator',
      date: 'June 5, 2020, 08:22 AM',
      amount: '+$5,553',
      card: 'MasterCard 404',
      status: 'Pending',
      avatar: '/path-to-avatar1.jpg', // replace with your image path
      statusColor: 'yellow',
    },
    {
      name: 'Livia Bator',
      date: 'June 5, 2020, 08:22 AM',
      amount: '+$5,553',
      card: 'MasterCard 404',
      status: 'Pending',
      avatar: '/path-to-avatar1.jpg', // replace with your image path
      statusColor: 'yellow',
    },
    // ... other transactions
  ];

  const statusColors = {
    Pending: 'bg-yellow-400',
    Completed: 'bg-green-500',
    Canceled: 'bg-red-500',
  };

  return (
    <div className="bg w-[800px] recent  text-white p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold mb-4">Latest Transaction</h2>
      <p className="mb-6">Lorem ipsum dolor sit amet, consectetur</p>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center">
              <img className="h-12 w-12 rounded-full mr-4" src={transaction.avatar} alt={`${transaction.name}`} />
              <div>
                <p className="font-semibold">{transaction.name}</p>
                <p className="text-xs text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <div className="mr-4">
              <p className="font-semibold">{transaction.amount}</p>
              <p className="text-xs text-gray-400">{transaction.card}</p>
            </div>
            <div className={`flex items-center ${statusColors[transaction.status]} text-xs font-semibold px-3 py-1 rounded-full`}>
              {transaction.status}
              {transaction.status === 'Completed' ? (
                <FaCaretDown className="h-4 w-4 ml-2" />
              ) : (
                <FaCaretDown className="h-4 w-4 ml-2" />
              )}
            </div>
            <FaCaretDown className="h-6 w-6" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransaction;
