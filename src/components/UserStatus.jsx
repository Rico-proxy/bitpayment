import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserStatus = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://api.nuhu.xyz/api/Admin/users');
      console.log('Users:', response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setLoading(false);
    }
  };

  const updateUserInState = (userId, isActive) => {
    setUsers(currentUsers =>
      currentUsers.map(user =>
        user.id === userId ? { ...user, isActive } : user
      )
    );
  };

  const handleActivate = async (userId) => {
    try {
      const response = await axios.put(`https://api.nuhu.xyz/api/Admin/activate-user/${userId}`);
      if (response.status === 200) {
        console.log(`User ${userId} activated.`);
        updateUserInState(userId, true);
      }
    } catch (error) {
      console.error('Failed to activate user:', error);
    }
  };

  const handleDeactivate = async (userId) => {
    try {
      const response = await axios.put(`https://api.nuhu.xyz/api/Admin/deactivate-user/${userId}`);
      if (response.status === 200) {
        console.log(`User ${userId} deactivated.`);
        updateUserInState(userId, false);
      }
    } catch (error) {
      console.error('Failed to deactivate user:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-[#0f1b39] text-white">
      <h2 className="text-2xl font-bold mb-4">User Status</h2>
      <input 
        type="text" 
        placeholder="Search by full name..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Active Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 hover:text-black">
                <td className="px-6 py-4">{user.fullName}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ${user.isActive ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                    <span className="relative">{user.isActive ? 'Active' : 'Inactive'}</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.isActive ? (
                    <button
                      onClick={() => handleDeactivate(user.id)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActivate(user.id)}
                      className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                    >
                      Activate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserStatus;
