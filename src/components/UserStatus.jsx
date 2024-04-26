import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const UserStatus = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page

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

  const sendActivationEmail = (email, status) => {
    const templateParams = {
      email: email,
      status: status ? 'Active' : 'Inactive'
    };

    emailjs.send('service_mc49zuo', 'template_40d63x9', templateParams, '0F2IGzYbKry9o2pkn')
      .then(response => {
        console.log('Email successfully sent!', response.status, response.text);
      }, error => {
        console.log('Failed to send email:', error);
      });
  };

  const handleActivate = async (userId) => {
    try {
      const response = await axios.put(`https://api.nuhu.xyz/api/Admin/activate-user/${userId}`);
      if (response.status === 200) {
        console.log(`User ${userId} activated.`);
        updateUserInState(userId, true);
        const user = users.find(user => user.id === userId);
        sendActivationEmail(user.email, true);
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

  // Define paginate function
  const paginate = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  // Paginate users
  const paginatedUsers = paginate(users, currentPage, itemsPerPage);

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
          {/* Table headers */}
          <thead className="border-b bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Active Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {paginatedUsers.map((user) => (
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
      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, index) => (
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

export default UserStatus;
