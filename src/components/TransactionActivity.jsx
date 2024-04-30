import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const TransactionActivity = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // You can adjust the number of items per page
  const [autoReversalIds, setAutoReversalIds] = useState(() => {
    const savedIds = sessionStorage.getItem('autoReversalIds');
    return savedIds ? new Set(JSON.parse(savedIds)) : new Set();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTransactions();
    }, 5000); // Polling every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Apply auto-reversal immediately on data fetch
    transactions.forEach(transaction => {
      if (autoReversalIds.has(transaction.senderId) && transaction.status !== 'Reversed') {
        handleRevert(transaction.id);
      }
    });
  }, [transactions]);

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

  const handleRevert = async (transactionId) => {
    try {
      const revertResponse = await axios.post(`https://api.nuhu.xyz/api/Admin/revert/${transactionId}`);
      if (revertResponse.status === 200) {
        const reversedTransaction = transactions.find(t => t.id === transactionId);
        if (reversedTransaction) {
          sendRevertEmail(reversedTransaction);
        }
        toast.success("Transaction Reversed successfully.");
        fetchTransactions(); // Refetch transactions to get updated status
      }
    } catch (error) {
      toast.error("Failed to revert transaction.");
    }
  };

  const toggleAutoReverse = (senderId) => {
    const newSet = new Set(autoReversalIds);
    if (newSet.has(senderId)) {
      newSet.delete(senderId);
    } else {
      newSet.add(senderId);
    }
    setAutoReversalIds(newSet);
    sessionStorage.setItem('autoReversalIds', JSON.stringify(Array.from(newSet)));
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedTransactions = paginate(transactions, currentPage, itemsPerPage);

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
              {paginatedTransactions.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 hover:text-black">
                  <td className="px-6 py-4">{new Date(transaction.timestamp).toLocaleString()}</td>
                  <td className="px-6 py-4">${Number(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className="px-6 py-4">{transaction.status}</td>
                  <td className="px-6 py-4">{transaction.type}</td>
                  <td className="px-6 py-4">{transaction.senderEmail}</td>
                  <td className="px-6 py-4">{transaction.walletType || 'N/A'}</td>
                  <td className="px-6 py-4">
                    {autoReversalIds.has(transaction.senderId) ? (
                      <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => toggleAutoReverse(transaction.senderId)}>
                        On
                      </button>
                    ) : (
                      <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" onClick={() => toggleAutoReverse(transaction.senderId)}>
                        Off
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center mt-4">
            {Array.from({ length: Math.ceil(transactions.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionActivity;
