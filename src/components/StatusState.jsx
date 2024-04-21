import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const StatusState = () => {
  const [userStatus, setUserStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserStatus = async () => {
      setLoading(true);
      // Retrieve the user ID from session storage
      const userId = sessionStorage.getItem('userId');

      if (userId) {
        try {
          // Insert the user ID directly into the URL
          const response = await axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`);
          setUserStatus(response.data.isActive);
        } catch (error) {
          console.error('Error fetching user status', error);
          setUserStatus(null); // Handle error state
        }
      } else {
        console.error('No user ID found in session storage');
        setUserStatus(null); // Handle error state
      }
      setLoading(false);
    };

    fetchUserStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userStatus !== null ? (
        userStatus ? (
          <span className='flex items-center text-white space-x-1'>
           <h1>
              Active
            </h1> 
            <div>
            <AiOutlineCheckCircle style={{ color: 'green' }} />
              </div> 
          </span>
        ) : (
          <span className='flex items-center text-white space-x-1'>
           <h1>
             Not Active
            </h1> 
            <div>
              <AiOutlineCloseCircle style={{ color: 'red' }} />
            </div>
           </span>
        )
      ) : (
        <div>User status not found or error fetching status</div>
      )}
    </div>
  );
};

export default StatusState;
