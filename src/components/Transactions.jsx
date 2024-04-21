import React, { useState } from 'react';
import { Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MdCheckCircle, MdCancel, MdArrowDownward, MdArrowUpward } from 'react-icons/md';

const Transactions = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const transactionsData = {
    successful: [
        {
            id: '#123412451',
            date: 'June 1, 2020, 08:22 AM',
            recipient: 'Marcus',
            amount: '$128.89',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Completed',
            statusIcon: <MdCheckCircle style={{ color: 'green' }} />,
          },
          {
            id: '#123412452',
            date: 'June 2, 2020, 09:15 AM',
            recipient: 'Jordyn',
            amount: '$256.50',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Pending',
            statusIcon: <MdArrowUpward style={{ color: 'orange' }} />,
          },
          {
            id: '#123412453',
            date: 'June 3, 2020, 11:06 AM',
            recipient: 'Brandon',
            amount: '$340.00',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Completed',
            statusIcon: <MdCheckCircle style={{ color: 'green' }} />,
          },
          {
            id: '#123412451',
            date: 'June 1, 2020, 08:22 AM',
            recipient: 'Marcus',
            amount: '$128.89',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Completed',
            statusIcon: <MdCheckCircle style={{ color: 'green' }} />,
          },
          {
            id: '#123412452',
            date: 'June 2, 2020, 09:15 AM',
            recipient: 'Jordyn',
            amount: '$256.50',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Pending',
            statusIcon: <MdArrowUpward style={{ color: 'orange' }} />,
          },
          {
            id: '#123412453',
            date: 'June 3, 2020, 11:06 AM',
            recipient: 'Brandon',
            amount: '$340.00',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Completed',
            statusIcon: <MdCheckCircle style={{ color: 'green' }} />,
          },
          {
            id: '#123412451',
            date: 'June 1, 2020, 08:22 AM',
            recipient: 'Marcus',
            amount: '$128.89',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Completed',
            statusIcon: <MdCheckCircle style={{ color: 'green' }} />,
          },
          {
            id: '#123412452',
            date: 'June 2, 2020, 09:15 AM',
            recipient: 'Jordyn',
            amount: '$256.50',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Pending',
            statusIcon: <MdArrowUpward style={{ color: 'orange' }} />,
          },
          {
            id: '#123412453',
            date: 'June 3, 2020, 11:06 AM',
            recipient: 'Brandon',
            amount: '$340.00',
            type: 'Income',
            location: 'Bangladesh, India',
            status: 'Completed',
            statusIcon: <MdCheckCircle style={{ color: 'green' }} />,
          }
    ],
    reverted: [
        {
            id: '#123412454',
            date: 'June 4, 2020, 01:22 PM',
            recipient: 'James',
            amount: '$212.00',
            type: 'Outcome',
            location: 'Bangladesh, India',
            status: 'Cancelled',
            statusIcon: <MdCancel className='text-red-400' />,
          },
          {
            id: '#123412455',
            date: 'June 5, 2020, 02:45 PM',
            recipient: 'Haylie',
            amount: '$98.70',
            type: 'Outcome',
            location: 'Bangladesh, India',
            status: 'Cancelled',
            statusIcon: <MdCancel className='text-red-400 text-2xl' />,
          }
    ],
  };

  return (
    <div className='bg w-11/12 rounded-xl'>
      <Tabs className='text-white' value={tabValue} onChange={handleChangeTab} aria-label="transaction tabs">
        <Tab label="Successful" className='text-white '/>
        <Tab label="Reverted" className='text-white '/>
      </Tabs>
      <TableContainer component={Paper} className='bg '>
        <Table>
          <TableHead >
            <TableRow className="text-white">
              <TableCell className="text-white">ID Invoice</TableCell>
              <TableCell className="text-white">Date</TableCell>
              <TableCell className="text-white">Recipient</TableCell>
              <TableCell className="text-white">Amount</TableCell>
              <TableCell className="text-white">Type</TableCell>
              <TableCell className="text-white">Location</TableCell>
              <TableCell className="text-white">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionsData[tabValue === 0 ? 'successful' : 'reverted'].map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="text-white">{transaction.id}</TableCell>
                <TableCell className="text-white">{transaction.date}</TableCell>
                <TableCell className="text-white">{transaction.recipient}</TableCell>
                <TableCell className="text-white">{transaction.amount}</TableCell>
                <TableCell className="text-white">
                  {transaction.type === 'Income' ? <MdArrowDownward /> : <MdArrowUpward />}
                </TableCell>
                <TableCell className="text-white">{transaction.location}</TableCell>
                <TableCell>
                  {transaction.status === 'Completed' ? <MdCheckCircle className='text-green-500'/> : <MdCancel className="text-red-500"/>}
                </TableCell>
              </
              TableRow>
))}
</TableBody>
</Table>
</TableContainer>
</div>
);
};

export default Transactions;