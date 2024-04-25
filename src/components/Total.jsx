import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalBalance = () => {
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    // Retrieve user ID from session storage instead of local storage
    const userId = sessionStorage.getItem('userId');
    let intervalId = null;

    const fetchUserData = () => {
      if (userId) {
        axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`)
          .then(response => {
            const userData = response.data;
            // Assuming 'walletBalance', 'ledgerAccountBalance', and 'usdAccountBalance' are top-level keys in the response data
            const total = [
              userData.walletBalance,
              userData.ledgerAccountBalance,
              userData.usdAccountBalance
            ].reduce((sum, value) => sum + (parseFloat(value) || 0), 0);
            setTotalBalance(total);
          })
          .catch(error => {
            console.error('Error fetching user details:', error);
          });
      }
    };

    // Call fetchUserData immediately and then set up the interval
    fetchUserData();
    intervalId = setInterval(fetchUserData, 10000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run only on mount
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2, // Always display at least two decimal places
      maximumFractionDigits: 2  // Never display more than two decimal places
    }).format(amount);
  };
  
  return (
    <div>
     
       ${formatCurrency(totalBalance.toFixed(2))}
    </div>
  );
};

export default TotalBalance;
