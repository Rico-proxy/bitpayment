import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserStop = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    // Attempt to load users from sessionStorage
    const storedUsers = sessionStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
      setLoading(false);
    } else {
      fetchUsers(); // Fetch from server if not available in sessionStorage
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://api.nuhu.xyz/api/Admin/users');
      const usersWithData = response.data.map(user => ({
        ...user,
        transferEnabled: true // Assume all users are enabled initially
      }));
      setUsers(usersWithData);
      sessionStorage.setItem('users', JSON.stringify(usersWithData)); // Save to sessionStorage
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setLoading(false);
    }
  };

  const toggleTransferStatus = async (userId) => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) return;
    
    const user = users[userIndex];
    const newStatus = !user.transferEnabled;
    
    try {
      const apiURL = `https://api.nuhu.xyz/api/Admin/${newStatus ? 'enable' : 'disable'}-transfer?userId=${userId}`;
      const response = await axios.put(apiURL);
      if (response.status === 200) {
        const updatedUsers = [...users];
        updatedUsers[userIndex] = { ...user, transferEnabled: newStatus };
        setUsers(updatedUsers);
        sessionStorage.setItem('users', JSON.stringify(updatedUsers)); // Update sessionStorage with new state
        console.log(`Transfer ${newStatus ? 'enabled' : 'disabled'} for user ${userId}`);
      }
    } catch (error) {
      console.error(`Failed to ${newStatus ? 'enable' : 'disable'} transfer for user ${userId}:`, error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-[#0f1b39] text-white">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <input
        type="text"
        placeholder="Search by email..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full text-black"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 hover:text-black">
                <td className="px-6 py-4">{user.fullName}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleTransferStatus(user.id)}
                    className={`text-white p-2 rounded ${user.transferEnabled ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                  >
                    {user.transferEnabled ? 'Disable' : 'Enable'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
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
