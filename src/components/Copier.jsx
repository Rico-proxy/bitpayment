import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCopy } from 'react-icons/fa';

function UserInformation() {
  const [userInfo, setUserInfo] = useState({});
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    let intervalId = null;

    const fetchUserData = () => {
      if (userId) {
        axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`)
          .then(response => {
            setUserInfo(response.data);
          })
          .catch(error => {
            console.error('Error fetching user details:', error);
          });
      }
    };

    fetchUserData();
    intervalId = setInterval(fetchUserData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCopy = () => {
    if (userInfo.ledgerAccountNumber) {
      navigator.clipboard.writeText(userInfo.ledgerAccountNumber)
        .then(() => {
          setCopySuccess('Copied!');
          setTimeout(() => setCopySuccess(''), 1500);
        }, () => {
          setCopySuccess('Failed to copy!');
        });
    }
  };

  return (
    <div className="flex items-center space-x-2  rounded">
      {/* Display only the first 5 characters of ledgerAccountNumber */}
      <div>{userInfo.ledgerAccountNumber ? userInfo.ledgerAccountNumber.slice(0, 5) : 'Loading...'}</div>
      <button onClick={handleCopy} className=" rounded hover:bg-gray-200 transition-colors">
        <FaCopy />
      </button>
      {copySuccess && <span className="text-green-500 text-sm">{copySuccess}</span>}
    </div>
  );
}

export default UserInformation;
