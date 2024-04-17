import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
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

  useEffect(() => {
    transactions.forEach((transaction) => {
      if (transaction.status.toLowerCase() === 'reverted') {
        sendRevertedTransactionEmail(transaction);
      }
    });
  }, [transactions]);

  const sendRevertedTransactionEmail = (transaction) => {
    const userEmail = sessionStorage.getItem('email');
    const serviceID = 'service_w9dr1hs';
    const templateID = 'template_ksvy25u';
    const userID = '0F2IGzYbKry9o2pkn';

    const templateParams = {
      email: userEmail,
      transaction_amount: transaction.amount,
      transaction_type: transaction.type,
      receiver_wallet_address: transaction.receiverWalletAddress,
      wallet_type: transaction.walletType,
      transaction_status: transaction.status,
      transaction_timestamp: transaction.timestamp,
      transaction_sender: transaction.sender
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email successfully sent for reverted transaction:', response);
      })
      .catch((error) => {
        console.error('Failed to send email for reverted transaction:', error);
      });
  };
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
              Receiver Wallet Address
            </th>
            <th scope="col" className="py-3 px-6">
              Wallet Type
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Time Stamp
            </th>
            <th scope="col" className="py-3 px-6">
              Sender
            </th>
          </tr>
        </thead>
        <tbody >
          {transactions.map((transaction, index) => (
            <tr className="border-b  text-white " key={index}>
              <th scope="row" className="py-4 px-6  font-medium  whitespace-nowrap">
                ${transaction.amount}
              </th>
              <td className="py-4 px-6 text-white">
                {transaction.type}
              </td>
              <td className="py-4 px-6 text-white">
                {transaction.receiverWalletAddress}
              </td>
              <td className="py-4 px-6 text-white">
                {transaction.walletType}
              </td>
              <td className="py-4 px-6 text-white">
                {transaction.status}
              </td>
              <td className="py-4 px-6 text-white">
                {transaction.timestamp}
              </td>
              <td className="py-4 px-6 text-white">
                {transaction.sender}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trade;
