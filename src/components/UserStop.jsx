import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const UserStop = () => {
  const formatTransactionType = (type) => {
    if (type === 'USD') {
      return type;
    }
    return type.replace(/([A-Z])/g, ' $1').replace(/^ /, '');
  };

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    fetchTransactions();
  }, []);

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

    emailjs.send('service_mc49zuo', 'template_bn3mnvb', emailParams, '0F2IGzYbKry9o2pkn')
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
        toast.success("Transaction Reversed successfully.");
        const ReversedTransaction = transactions.find(t => t.id === transactionId);
        if(ReversedTransaction){
          sendRevertEmail(ReversedTransaction);
          fetchTransactions();
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to revert transaction.");
      }
    }
  };

  const paginate = (items, currentPage, itemsPerPage) => {
    const lastTransactions = items.slice(-25); // Slice the last 14 transactions
    const startIndex = (currentPage - 1) * itemsPerPage;
    return lastTransactions.slice(startIndex, startIndex + itemsPerPage);
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
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 hover:text-black">
                  <td className="px-6 py-4">{new Date(transaction.timestamp).toLocaleString()}</td>
                  <td className="px-6 py-4">
                    ${Number(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4">{formatTransactionType(transaction.status)}</td>
                  <td className="px-6 py-4">{formatTransactionType(transaction.type)}</td>
                  <td className="px-6 py-4">{transaction.senderEmail}</td>
                  <td className="px-6 py-4">{transaction.walletType ? formatTransactionType(transaction.walletType) : 'N/A'}</td>
                  <td className="px-6 py-4">
                    {transaction.status === 'AutoReversed' ? (
                      <button
                        className="bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                        disabled
                      >
                        Reversed
                      </button>
                    ) : (
                      <button
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleRevert(transaction.id)}
                      >
                        Reverse
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
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
  );
};

export default UserStop;
