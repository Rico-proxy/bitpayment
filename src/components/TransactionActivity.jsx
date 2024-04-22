import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const TransactionActivity = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const emailParams = {
      email: transactionDetails.senderEmail,
      type: transactionDetails.type,
      status: 'Reversed', // since we're sending this email after revert, the status is set manually
      amount: transactionDetails.amount.toString(), // converting to string if not already
      timestamp: new Date(transactionDetails.timestamp).toLocaleString(),
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
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 hover:text-black">
                  <td className="px-6 py-4">{new Date(transaction.timestamp).toLocaleString()}</td>
                  <td className="px-6 py-4">{transaction.amount}</td>
                  <td className="px-6 py-4">{transaction.status}</td>
                  <td className="px-6 py-4">{transaction.type}</td>
                  <td className="px-6 py-4">{transaction.senderEmail}</td>
                  <td className="px-6 py-4">{transaction.walletType || 'N/A'}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleRevert(transaction.id)}
                      disabled={transaction.status === 'Reversed'}
                    >
                      {transaction.status === 'Reversed' ? 'Reversed' : 'Revert'}
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
