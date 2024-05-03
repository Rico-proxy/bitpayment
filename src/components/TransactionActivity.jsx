import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TransactionActivity = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initialize all autoReversalSettings to 'enabled' by default for each transaction
  const [autoReversalSettings, setAutoReversalSettings] = useState(() => {
    const storedSettings = JSON.parse(sessionStorage.getItem('autoReversalSettings') || '{}');
    return Object.keys(storedSettings).reduce((settings, key) => {
      settings[key] = { ...storedSettings[key], enabled: true };
      return settings;
    }, {});
  });

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

  const toggleAutoReverse = async (senderId) => {
    const currentSettings = autoReversalSettings[senderId] || { enabled: true };
    const newState = !currentSettings.enabled;
    const apiURL = `https://api.nuhu.xyz/api/Admin/${newState ? 'enable' : 'disable'}-transfer?userId=${senderId}`;

    try {
      await axios.put(apiURL);
      const newSettings = {
        ...autoReversalSettings,
        [senderId]: { ...currentSettings, enabled: newState }
      };
      setAutoReversalSettings(newSettings);
      sessionStorage.setItem('autoReversalSettings', JSON.stringify(newSettings));
      toast.success(`Auto-reversal for ${senderId} turned ${newState ? 'on' : 'off'}.`);
    } catch (error) {
      toast.error(`Failed to toggle auto-reversal: ${error.message}`);
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
