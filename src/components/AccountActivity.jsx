import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountActivity = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    let intervalId = null;

    const fetchUserData = () => {
      if (userId) {
        axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`)
          .then(response => {
            const userData = response.data;

            const walletBalance = parseFloat(userData.walletBalance) || 0;
            const ledgerAccountBalance = parseFloat(userData.ledgerAccountBalance) || 0;
            const usdAccountBalance = parseFloat(userData.usdAccountBalance) || 0;

            const newTotalBalance = walletBalance + ledgerAccountBalance + usdAccountBalance;
            const newTotalIncome = Math.max(0, newTotalBalance - totalBalance);
            const newTotalExpense = Math.max(0, totalBalance - newTotalBalance);

            setTotalBalance(newTotalBalance);
            setTotalIncome(newTotalIncome);
            setTotalExpense(newTotalExpense);
          })
          .catch(error => {
            console.error('Error fetching user details:', error);
          });
      }
    };

    fetchUserData();
    intervalId = setInterval(fetchUserData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run once on mount

  const formatCurrency = (amount) => {
    if (isNaN(amount) || typeof amount !== 'number') return '0.00';
    return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(amount);
  };

  const calculatePercentage = (value, total) => {
    if (total === 0) return 0;
    return ((value / total) * 100).toFixed(2);
  };

  return (
    <div>
     
      <div> ${formatCurrency(totalExpense.toFixed(2))} ({calculatePercentage(totalExpense, totalBalance)}%)</div>
    </div>
  );
};

export default AccountActivity;
