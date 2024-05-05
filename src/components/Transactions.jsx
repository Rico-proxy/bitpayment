import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

const Transactions = () => {
  const formatTransactionType = (type) => {
    // Insert a space before all caps
    return type.replace(/([A-Z])/g, ' $1')
      // Remove the first space if the string starts with a capital letter
      .replace(/^ /, '');
  };
  const [tabValue, setTabValue] = useState(0);
  const [transactions, setTransactions] = useState({ all: [], successful: [], reversed: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      axios.get(`https://api.nuhu.xyz/api/Wallet/get-transactions?userId=${userId}`)
        .then(response => {
          const all = response.data;
          const successful = response.data.filter(transaction => transaction.status === 'Successful');
          const reversed = response.data.filter(transaction => transaction.status === 'AutoReversed');
          setTransactions({ all, successful, reversed });
        })
        .catch(error => console.error('Error fetching transactions:', error));
    }
  }, []);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  // Define paginate function
  const paginate = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  // Paginate transactions
  const paginatedTransactions = paginate(
    transactions[tabValue === 0 ? 'all' : tabValue === 1 ? 'successful' : 'reversed'],
    currentPage,
    itemsPerPage
  );

  return (
    <div className='bg w-11/12 rounded-xl'>
      <Tabs className='text-white' value={tabValue} onChange={handleChangeTab} aria-label="transaction tabs">
        <Tab label="All" className='text-white text-[12px] md:text-[14px]' />
        <Tab label="Successful" className='text-white text-[12px] md:text-[14px]' />
        <Tab label="Reversed" className='text-white text-[12px] md:text-[14px]' />
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
            {paginatedTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="text-white">{new Date(transaction.timestamp).toLocaleDateString()}</TableCell>
                <TableCell className="text-white">{new Date(transaction.timestamp).toLocaleTimeString()}</TableCell>
                <TableCell className="text-white">{transaction.details}</TableCell>
                <TableCell className="text-white text-[13px]">
                  ${transaction.amount.toLocaleString('en-US', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })}
                </TableCell>
                <TableCell className="text-white">{formatTransactionType(transaction.type)}</TableCell>
                <TableCell>
                  {transaction.status === 'All' || transaction.status === 'Successful' ?
                    <MdCheckCircle className='text-green-500'/> :
                    <MdCancel className="text-red-500"/>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: Math.ceil(transactions[tabValue === 0 ? 'all' : tabValue === 1 ? 'successful' : 'reversed'].length / itemsPerPage) }, (_, index) => (
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

export default Transactions;
