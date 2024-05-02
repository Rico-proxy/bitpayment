import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const TransactionActivity = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [autoReversalSettings, setAutoReversalSettings] = useState(() => {
    const savedSettings = sessionStorage.getItem('autoReversalSettings');
    return savedSettings ? JSON.parse(savedSettings) : {};
  });

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    transactions.forEach(transaction => {
      const settings = autoReversalSettings[transaction.senderId];
      if (settings && settings.enabled && new Date(transaction.timestamp) > new Date(settings.timestamp) && transaction.status !== 'Reversed') {
        handleRevert(transaction.id);
      }
    });
  }, [transactions, autoReversalSettings]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('https://api.nuhu.xyz/api/Admin/transactions');
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
      setLoading(false);
    }
  };

  const handleRevert = async (transactionId) => {
    try {
      const revertResponse = await axios.post(`https://api.nuhu.xyz/api/Admin/revert/${transactionId}`);
      if (revertResponse.status === 200) {
        const reversedTransaction = transactions.find(t => t.id === transactionId);
        if (reversedTransaction) {
          sendRevertEmail(reversedTransaction);
          toast.success("Transaction Reversed successfully.");
          fetchTransactions();
        }
      }
    } catch (error) {
      toast.error("Failed to revert transaction.");
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

    emailjs.send('service_w9dr1hs', 'template_ksvy25u', emailParams, '0F2IGzYbKry9o2pkn')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  };

  const toggleAutoReverse = (senderId) => {
    const newSettings = { ...autoReversalSettings };
    if (newSettings[senderId] && newSettings[senderId].enabled) {
      newSettings[senderId].enabled = false;
    } else {
      newSettings[senderId] = { enabled: true, timestamp: new Date().toISOString() };
    }
    setAutoReversalSettings(newSettings);
    sessionStorage.setItem('autoReversalSettings', JSON.stringify(newSettings));
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
                <th className="px-6 py-3">Auto-Reversal</th>
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
                  <td className="px-6 py-4">
                    <button className={`bg-${autoReversalSettings[transaction.senderId]?.enabled ? 'blue' : 'gray'}-600 hover:bg-${autoReversalSettings[transaction.senderId]?.enabled ? 'blue' : 'gray'}-800 text-white font-bold py-2 px-4 rounded`} onClick={() => toggleAutoReverse(transaction.senderId)}>
                      {autoReversalSettings[transaction.senderId]?.enabled ? 'On' : 'Off'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionActivity;
