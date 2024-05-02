import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const TransactionActivity = () => {
  const formatTransactionType = (type) => {
    // Check if the type is exactly 'USD' and return it as is
    if (type === 'USD') {
      return type;
    }
  
    // Insert a space before all caps for other types
    return type.replace(/([A-Z])/g, ' $1')
      // Remove the first space if the string starts with a capital letter
      .replace(/^ /, '');
  }; 
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page

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

  // Function to send email using emailjs with transaction details
  const sendRevertEmail = (transactionDetails) => {
    const date = new Date(transactionDetails.timestamp);
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true // Uses 12-hour format with AM/PM. Set to false for 24-hour format if needed.
    });
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(transactionDetails.amount);
    const emailParams = {
      email: transactionDetails.senderEmail,
      type: transactionDetails.type,
      status: 'Reversed', // since we're sending this email after revert, the status is set manually
      amount: formattedAmount, // Amount formatted as currency
      timestamp: formattedTime, // Only time without seconds
      walletType: transactionDetails.walletType || 'N/A',
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with actual values from your EmailJS account
    emailjs.send('service_w9dr1hs', 'template_ksvy25u', emailParams, '0F2IGzYbKry9o2pkn')
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      // Handle email sent successfully case
    }, (error) => {
      console.error('Failed to send email:', error);
      // Handle email sending error case
    });
  };

  const handleRevert = async (transactionId) => {
    try {
      const revertResponse = await axios.post(`https://api.nuhu.xyz/api/Admin/revert/${transactionId}`);
      if (revertResponse.status === 200) {
        toast.success("Transaction Reversed successfully.");
        // Find the transaction that was Reversed
        const ReversedTransaction = transactions.find(t => t.id === transactionId);
        if(ReversedTransaction){
          sendRevertEmail(ReversedTransaction); // Send the email notification
          fetchTransactions(); // Refresh data to update statuses
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

  // Define paginate function
  const paginate = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  // Paginate transactions
  const paginatedTransactions = paginate(transactions, currentPage, itemsPerPage);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction Log</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto bg-[#0f1b39] text-white">
          <table className="min-w-full table-auto text-left">
            {/* Table headers */}
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
            {/* Table body */}
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
      {/* Pagination */}
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

export default TransactionActivity;
