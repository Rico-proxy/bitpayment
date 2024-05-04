import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TransactionActivity = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initialize all autoReversalSettings to 'enabled' by default for each user
  const [autoReversalSettings, setAutoReversalSettings] = useState(() => {
    const storedSettings = JSON.parse(sessionStorage.getItem('autoReversalSettings') || '{}');
    return Object.keys(storedSettings).reduce((settings, key) => {
      settings[key] = { ...storedSettings[key], enabled: true };
      return settings;
    }, {});
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://api.nuhu.xyz/api/Admin/users');
      console.log('Fetched users:', response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setLoading(false);
    }
  };

  const toggleAutoReverse = async (id) => {
    const currentSettings = autoReversalSettings[id] || { enabled: true };
    const newState = !currentSettings.enabled;
    const apiURL = `https://api.nuhu.xyz/api/Admin/${newState ? 'enable' : 'disable'}-transfer?userId=${id}`;

    try {
      await axios.put(apiURL);
      const newSettings = {
        ...autoReversalSettings,
        [id]: { ...currentSettings, enabled: newState }
      };
      setAutoReversalSettings(newSettings);
      sessionStorage.setItem('autoReversalSettings', JSON.stringify(newSettings));
      toast.success(`Auto-reversal for user ${id} turned ${newState ? 'on' : 'off'}.`);
    } catch (error) {
      toast.error(`Failed to toggle auto-reversal: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Log</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto bg-[#0f1b39] text-white">
          <table className="min-w-full table-auto text-left">
            <thead className="border-b bg-gray-300 text-black">
              <tr>
                <th className="px-6 py-3">Full Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Auto-Reversal</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 hover:text-black">
                  <td className="px-6 py-4">{user.fullName}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button className={`bg-${autoReversalSettings[user.id]?.enabled ? 'blue' : 'gray'}-600 hover:bg-${autoReversalSettings[user.id]?.enabled ? 'blue' : 'gray'}-800 text-white font-bold py-2 px-4 rounded`} onClick={() => toggleAutoReverse(user.id)}>
                      {autoReversalSettings[user.id]?.enabled ? 'On' : 'Off'}
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
