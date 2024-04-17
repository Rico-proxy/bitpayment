import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../pages/User';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState('');
  const [walletType, setWalletType] = useState('0');
  const [isCredit, setIsCredit] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.nuhu.xyz/api/Admin/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBalanceUpdate = async (event) => {
    event.preventDefault();
    const action = isCredit ? 'credit-user' : 'debit-user';
    const endpoint = `https://api.nuhu.xyz/api/Admin/${action}`;
    try {
      const response = await axios.post(endpoint, {
        userId: selectedUser,
        amount: parseFloat(amount),
        walletType: parseInt(walletType, 10),
      });
      console.log(`${isCredit ? 'Credit' : 'Debit'} Success:`, response.data);
      fetchUsers();
      closeModal(); // Close modal after operation
    } catch (error) {
      console.error(`Failed to ${isCredit ? 'credit' : 'debit'} user:`, error);
    }
  };

  const openModal = (user, credit) => {
    setSelectedUser(user.id);
    setIsCredit(credit);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setAmount('');
    setWalletType('0');
  };

  const filteredUsers = searchQuery
    ? users.filter(
        user => user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.middleName && user.middleName.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : users;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <input
        type="text"
        placeholder="Search by full name or middle name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="overflow-x-auto bg-[#0f1b39] text-white">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3">Pin</th>
              <th className="px-6 py-3">Ledger Account Balance</th>
              <th className="px-6 py-3">USD Account Balance</th>
              <th className="px-6 py-3">Wallet Balance</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50 hover:text-black">
                <td className="px-6 py-4">{user.fullName}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4">{user.pin}</td>
                <td className="px-6 py-4">{user.ledgerAccountBalance}</td>
                <td className="px-6 py-4">{user.usdAccountBalance}</td>
                <td className="px-6 py-4">{user.walletBalance}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button onClick={() => openModal(user, true)} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Credit</button>
                  <button onClick={() => openModal(user, false)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Debit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <h3 className="text-lg">{isCredit ? 'Credit' : 'Debit'} User</h3>
            <form onSubmit={handleBalanceUpdate} className="space-y-4">
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <select
                value={walletType}
                onChange={e => setWalletType(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="0">USD Account</option>
                <option value="1">Ledger Account</option>
                <option value="2">Wallet Account</option>
              </select>
              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">{isCredit ? 'Credit' : 'Debit'}</button>
                <button type="button" onClick={closeModal} className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
