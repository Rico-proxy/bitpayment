import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

const Transactions = () => {
  const [tabValue, setTabValue] = useState(0);
  const [transactions, setTransactions] = useState({ completed: [], successful: [], reversed: [] });

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      axios.get(`https://api.nuhu.xyz/api/Wallet/get-transactions?userId=${userId}`)
        .then(response => {
          const completed = response.data;
          const successful = response.data.filter(transaction => transaction.status === 'Successful');
          const reversed = response.data.filter(transaction => transaction.status === 'Reversed');
          setTransactions({ completed, successful, reversed });
        })
        .catch(error => console.error('Error fetching transactions:', error));
    }
  }, []);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className='bg w-11/12 rounded-xl'>
      <Tabs className='text-white' value={tabValue} onChange={handleChangeTab} aria-label="transaction tabs">
        <Tab label="Completed" className='text-white' />
        <Tab label="Successful" className='text-white' />
        <Tab label="reversed" className='text-white' />
      </Tabs>
      <TableContainer component={Paper} className='bg'>
        <Table>
          <TableHead>
            <TableRow className="text-white">
              <TableCell className="text-white">Date</TableCell>
              <TableCell className="text-white">Time</TableCell>
              <TableCell className="text-white">Details</TableCell>
              <TableCell className="text-white">Amount</TableCell>
              <TableCell className="text-white">Type</TableCell>
              <TableCell className="text-white">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions[tabValue === 0 ? 'completed' : tabValue === 1 ? 'successful' : 'reversed'].map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="text-white">{new Date(transaction.timestamp).toLocaleDateString()}</TableCell>
                <TableCell className="text-white">{new Date(transaction.timestamp).toLocaleTimeString()}</TableCell>
                <TableCell className="text-white">{transaction.details}</TableCell>
                <TableCell className="text-white">${transaction.amount.toLocaleString()}</TableCell> {/* Updated this line */}
                <TableCell className="text-white">{transaction.type}</TableCell>
                <TableCell>
                  {transaction.status === 'Completed' ?
                    <MdCheckCircle className='text-green-500'/> :
                    transaction.status === 'Successful' ?
                    <MdCheckCircle className='text-green-500'/> :
                    <MdCancel className="text-red-500"/>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Transactions;
