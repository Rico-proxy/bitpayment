import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetail = () => {
  const [userDetails, setUserDetails] = useState(null);
  
  useEffect(() => {
    // Retrieve the user ID from local storage
    const userId = localStorage.getItem('userId');
    
    // Make sure the user ID is present
    if (userId) {
      // Construct the URL with the user ID
      const url = `http://159.65.31.191:5050/api/Admin/user/${userId}`;
      
      // Use Axios to make the GET request
      axios.get(url)
        .then(response => {
          // Set the user details to state
          setUserDetails(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the user details:', error);
        });
    }
  }, []);
  
  // If userDetails is null, it means the data is still loading
  if (!userDetails) {
    return <div>Loading...</div>;
  }

  // Render the user details
  return (
    <div>
      <h2>User Details</h2>
      {/* You can render the details however you'd like */}
      <p>Full Name: {userDetails.fullName}</p>
      <p>Email: {userDetails.email}</p>
      {/* ... and so on for other details */}
    </div>
  );
};

export default UserDetail;
