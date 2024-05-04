import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const GetTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [latestTimestamp, setLatestTimestamp] = useState('');

  useEffect(() => {
    // Function to fetch transactions
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://api.nuhu.xyz/api/Admin/transactions');
        const allTransactions = response.data;

        if (allTransactions.length > 0) {
          if (isFirstLoad) {
            // Mark all transactions as old on the first load
            setLatestTimestamp(allTransactions[0].timestamp);
            setIsFirstLoad(false);
          } else {
            // Filter and process only new transactions
            const newTransactions = allTransactions.filter(tx =>
              new Date(tx.timestamp) > new Date(latestTimestamp)
            );
            if (newTransactions.length > 0) {
              setLatestTimestamp(newTransactions[0].timestamp);
              processNewTransactions(newTransactions);
            }
          }
        }

        setTransactions(allTransactions);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        setLoading(false);
      }
    };

    // Call fetchTransactions immediately on mount
    fetchTransactions();

    // Set up the polling interval
    const intervalId = setInterval(fetchTransactions, 120000); // 120000 milliseconds = 2 minutes
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [latestTimestamp, isFirstLoad]);

  const processNewTransactions = (newTransactions) => {
    newTransactions.forEach(newTx => {
      if (newTx.status === 'AutoReversed') {
        sendRevertEmail(newTx);
      }
    });
  };

  const sendRevertEmail = (transactionDetails) => {
    const emailParams = {
      email: transactionDetails.senderEmail,
      type: transactionDetails.type,
      status: 'Reversed',
      amount: transactionDetails.amount.toString(),
      timestamp: new Date(transactionDetails.timestamp).toLocaleString(),
      walletType: transactionDetails.walletType || 'N/A',
    };

    emailjs.send('service_mc49zuo', 'template_ksvy25u', emailParams, '0F2IGzYbKry9o2pkn')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        toast.success(`Email sent for auto-reversed transaction: ${transactionDetails.senderEmail}`);
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction Log</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto bg-[#0f1b39] text-white">
          <table className="min-w-full table-auto text-left">
            <thead className="border-b bg-gray-300 text-black">
              <tr>
                <th className="px-6 py-3">Timestamp</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Sender Email</th>
                <th className="px-6 py-3">Wallet Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 hover:text-black">
                  <td className="px-6 py-4">{new Date(transaction.timestamp).toLocaleString()}</td>
                  <td className="px-6 py-4">${Number(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className="px-6 py-4">{transaction.status}</td>
                  <td className="px-6 py-4">{transaction.type}</td>
                  <td className="px-6 py-4">{transaction.senderEmail}</td>
                  <td className="px-6 py-4">{transaction.walletType || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetTransaction;
