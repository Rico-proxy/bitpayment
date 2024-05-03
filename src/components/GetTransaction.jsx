import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const GetTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastProcessedTimestamp, setLastProcessedTimestamp] = useState(() => {
    return localStorage.getItem('lastProcessedTimestamp') || "2024-05-03T19:13:45.610256Z";
  });

  useEffect(() => {
    console.log('Fetching transactions...');
    fetchTransactions();
  }, []);
  console.log('GetTransaction component rendered');
  const fetchTransactions = async () => {
    try {
      const response = await axios.get('https://api.nuhu.xyz/api/Admin/transactions');
      const allTransactions = response.data;
      const newTransactions = allTransactions.filter(tx =>
        new Date(tx.timestamp) > new Date(lastProcessedTimestamp)
      );

      // Process only new transactions for email sending
      newTransactions.forEach(newTx => {
        if (newTx.status === 'AutoReversed') {
          sendRevertEmail(newTx);
        }
      });

      setTransactions(allTransactions);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
      setLoading(false);
    }
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
        // Update the last processed timestamp only after successful email send
        updateLastProcessedTimestamp(transactionDetails.timestamp);
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  };

  const updateLastProcessedTimestamp = (timestamp) => {
    if (new Date(timestamp) > new Date(lastProcessedTimestamp)) {
      setLastProcessedTimestamp(timestamp);
      localStorage.setItem('lastProcessedTimestamp', timestamp);
    }
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
