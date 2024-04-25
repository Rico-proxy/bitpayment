import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MdCheckCircle, MdCancel, MdArrowDownward, MdArrowUpward } from 'react-icons/md';

const RecentTransactionSmall = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const userId = sessionStorage.getItem('userId');
      if (!userId) {
        console.log('User ID not found in session storage.');
        return;
      }
      try {
        const response = await axios.get(`https://api.nuhu.xyz/api/Wallet/get-transactions?userId=${userId}`);
        if (response.data && Array.isArray(response.data)) {
          // Take only the last five transactions from the response
          const lastFiveTransactions = response.data.slice(-5).map(transaction => ({
            ...transaction,
            icon: getStatusIcon(transaction.status, transaction.type),
            statusColor: getStatusColor(transaction.status)
          }));
          setTransactions(lastFiveTransactions);
        }
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const getStatusIcon = (status, type) => {
    if (status === 'Successful') {
      return <MdCheckCircle className='text-green-500' />;
    } else if (status === 'Reversed') {
      return <MdCancel className='text-red-500' />;
    } else {
      return type === 'Income' ? <MdArrowDownward /> : <MdArrowUpward />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Successful':
        return 'text-green-500';
      case 'Reversed':
        return 'text-red-500';
      default:
        return 'text-yellow-400'; // Assuming other statuses are pending or similar
    }
  };

  return (
    <TableContainer component={Paper} className="bg w-[240px]  md:ml-0 md:w-[800px] rounded-xl overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow className="text-white">
            <TableCell className='text-white text-[14px] md:text-xl font-bold'>Amount</TableCell>
            <TableCell className='text-white text-[14px] md:text-xl font-bold'>Status</TableCell>
            <TableCell className='text-white text-[14px] md:text-xl font-bold'>Wallet Type</TableCell>
            <TableCell className='text-white text-[14px] md:text-xl font-bold'>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className={`hover:bg-gray-600 ${transaction.statusColor}`}>
              <TableCell className="text-white text-[13px]">${transaction.amount.toLocaleString()}</TableCell>
              <TableCell className="text-white text-[13px]">{transaction.icon}</TableCell>
              <TableCell className="text-white text-[13px]">{transaction.walletType}</TableCell>
              <TableCell className="text-white text-[13px]">{transaction.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentTransactionSmall;