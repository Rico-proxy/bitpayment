import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Pin = () => {
  const [userInfo, setUserInfo] = useState({ userId: '', hasPin: true });
  const [pin, setPin] = useState('');

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    const userHasPin = sessionStorage.getItem('pin') === 'true'; // Retrieve the PIN status from local storage

    if (userId) {
      if (userHasPin) {
        setUserInfo({ userId, hasPin: true });
      } else {
        checkUserPin(userId);
      }
    }
  }, []);

  const checkUserPin = async (userId) => {
    try {
      const response = await axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`);
      const hasPin = response.data?.pin !== null && response.data?.pin !== undefined;
      localStorage.setItem('userHasPin', hasPin); // Store the PIN status in local storage
      setUserInfo({ userId, hasPin });
    } catch (error) {
      console.error('Error fetching user PIN status:', error);
      toast.error('Failed to verify PIN status. Please check your connection and try again.');
    }
  };

  const handleChange = (e) => {
    setPin(e.target.value.slice(0, 4));
  };

  const setPinPromise = async (pin, userId) => {
    const requestBody = { pin, userId };
    const response = await axios.post('https://api.nuhu.xyz/api/Wallet/set-pin', requestBody);
    return response.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.length === 4 && userInfo.userId) {
      toast.promise(
        setPinPromise(pin, userInfo.userId),
        {
          loading: 'Setting PIN...',
          success: (data) => {
            console.log('PIN set successfully', data);
            localStorage.setItem('userHasPin', true); // Update local storage when PIN is successfully set
            setUserInfo(prev => ({ ...prev, hasPin: true })); // Update state
            setPin(''); // Reset PIN input
            return 'PIN created successfully!';
          },
          error: (err) => {
            console.error('Error setting PIN:', err.response?.data || err.message);
            return 'Failed to create PIN. Please try again.';
          },
        }
      );
    } else {
      toast.error('PIN must be 4 characters long and User ID is required.');
    }
  };

  if (!userInfo.userId || userInfo.hasPin) {
    return null;
  }

  return (
    <div className="flex flex-col items-start pt-10">
      <Toaster position="top-center" />
      <div className="bg-white p-6 rounded shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="pin" className="font-semibold">Create PIN</label>
          <input
            type="text"
            id="pin"
            name="pin"
            value={pin}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            maxLength="4"
            placeholder="Enter a 4-digit PIN"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit PIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pin;
