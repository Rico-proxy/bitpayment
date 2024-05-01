import React, { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { CiBadgeDollar } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const OwnAccount = () => {
  const navigate = useNavigate();
  
 
 
  const handleAmountChange = (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, ''); // Allow digits and decimal point
    if (!value) {
      setAmount('$');
    } else {
      // Prevent multiple decimals
      const parts = value.split('.');
      if (parts.length > 2) {
        value = parts[0] + '.' + parts[1].slice(0, 2).join('');
      } else if (parts[1]) {
        parts[1] = parts[1].substring(0, 2); // Limit decimal places to two
        value = parts.join('.');
      }

      // Format the integer part with commas
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      let formattedValue = `$${integerPart}`;
      if (parts.length > 1 && parts[1]) {
        formattedValue += `.${parts[1]}`;
      }
      setAmount(formattedValue);
    }
  };

  const handleFocus = (e) => {
    // Remove formatting for editing: strip out dollar sign and commas
    const plainNumber = e.target.value.replace(/[$,]/g, '');
    setAmount(plainNumber);
  };

  const handleBlur = (e) => {
    // On blur, format the number again if it's not empty
    let value = e.target.value.replace(/[$,]/g, '');
    if (!value) {
      setAmount('$');
    } else {
      // Format the value as currency on blur
      const parts = value.split('.');
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) {
        const formattedValue = `$${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        if (parts.length > 1 && parts[1]) {
          formattedValue += `.${parts[1]}`;
        }
        setAmount(formattedValue);
      }
    }
  };

  const [userId] = useState(sessionStorage.getItem('userId') || '');
  const [selectedBalance, setSelectedBalance] = useState(0);
  const [toSelectedBalance, setToSelectedBalance] = useState(0);
  const [walletType, setWalletType] = useState('0');
  const [toWalletType, setToWalletType] = useState('0');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');
  const [pin, setPin] = useState('');
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const fetchBalance = async () => {
    try {
      if (userId) {
        const response = await axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`);
        // Extract balances from response based on the selected walletType
        const balances = {
          '0': response.data.usdAccountBalance, // For USD Account
          '1': response.data.ledgerAccountBalance, // For Ledger Account
          '2': response.data.walletBalance // For Wallet Balance
        };
        setSelectedBalance(balances[walletType]);
        setToSelectedBalance(balances[toWalletType]); // Set this if you want to display balances for toWalletType too
      }
    } catch (error) {
      console.error('Error fetching user balance:', error);
      toast.error('Failed to fetch account balances.');
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [userId, walletType, toWalletType]);

  const displayFormAfterToast = useCallback(() => {
    setShowForm(true);
  }, []);

  const sendReceiptEmail = (receiptData) => {
    const receiptServiceID = 'service_w9dr1hs';
    const receiptTemplateID = 'template_tt6y84v';
    const receiptUserID = '0F2IGzYbKry9o2pkn';
    emailjs.send(receiptServiceID, receiptTemplateID, receiptData, receiptUserID)
      .then(response => {
        console.log('Receipt email successfully sent!', response);
      })
      .catch(err => {
        console.error('Error sending receipt email:', err);
      });
  };

  const sendEmailWithOTP = (otpCode) => {
    const serviceID = 'service_w9dr1hs';
    const templateID = 'template_6rbm698';
    const userID = '0F2IGzYbKry9o2pkn';
    const templateParams = {
      message: otpCode,
      email: sessionStorage.getItem('email')
    };
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(response => {
        console.log('Email successfully sent!', response);
      })
      .catch(err => {
        console.error('Error sending email:', err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cleanAmount = parseFloat(amount.replace(/[,$]/g, ''));
    const requestBody = {
      userId,
      amount: cleanAmount, // Use the cleaned and parsed amount here
      fromWalletType: parseInt(walletType, 10),
      toWalletType: parseInt(toWalletType, 10),
      otp,
      pin,
    };

    try {
      const response = await axios.post('https://api.nuhu.xyz/api/Wallet/topUp-wallet', requestBody);
      if (response.status === 200) {
        toast.success('Transfer successful!');
        const receiptData = {
          email: sessionStorage.getItem('email'),
          transfer_type: 'Top Up Transfer',
          fromWalletType: getAccountNameByType(walletType),
          toWalletType: getAccountNameByType(toWalletType),
          amount
        };
        sendReceiptEmail(receiptData);
        resetFormState();
        navigate('/user');
      } else {
        toast.error('Transfer not successful, please try again.');
      }
    } catch (error) {
      toast.error(`Transfer failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const resetFormState = () => {
    setWalletType('0');
    setToWalletType('0');
    setAmount('');
    setPin('');
    setShowForm(false);
    setOtp('');
  };

  const handleTransferClick = () => {
    const userId = sessionStorage.getItem('userId');
    const requestBody = { userId };
    toast.promise(
      axios.post('https://api.nuhu.xyz/api/Wallet/initiate-transfer', requestBody)
        .then(response => {
          if (response.status === 200) {
            displayFormAfterToast();
            sendEmailWithOTP(response.data.otp);
            return 'Transfer code sent successfully!';
          }
        })
        .catch(error => {
          throw new Error('Failed to send transfer code.');
        }),
      {
        loading: 'Sending transfer code to your email...',
        success: 'Transfer code sent successfully!',
        error: 'Failed to send transfer code.',
      }
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getAccountNameByType = (typeValue) => {
    const accountTypes = {
      '0': 'USD Account',
      '1': 'Ledger Account',
      '2': 'Wallet Balance'
    };
    return accountTypes[typeValue] || 'Unknown Account';
  };

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <button onClick={handleTransferClick} className='hover:shadow-2xl hover:bg-blue-900 text-center items-center flex flex-row text-white bg-[#0f1b39] space-x-[150px] rounded-lg p-8 border-2'>
        <div className='flex flex-row space-x-2 text-[14px]'>
          <div>
            <CiBadgeDollar className='text-2xl'/>
          </div>
          <div>
            <h1>Top Up</h1>
          </div>
        </div>
        <div>
          <IoSendSharp/>
        </div>
      </button>
      {showForm && (
        <div className="fixed inset-0 bg-[#0f1b39] z-50 flex justify-center items-center">
          <div ref={formRef} className="bg-white shadow-2xl p-6 rounded w-[400px] text-[16px]">
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
              <div className='font-bold text-[#0f1b39]'>
                Top Up Wallet
              </div>
              <select 
                value={walletType} 
                onChange={(e) => setWalletType(e.target.value)} 
                className="border border-gray-300 p-2 rounded"
              >
                <option value='0'>USD Account</option>
                <option value='1'>Ledger Account</option>
                <option value='2'>Wallet Balance</option>
              </select>
              <p className="text-right mt-2">
    Balance: ${selectedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
</p>

<input
      type="text"
      value={amount}
      onChange={handleAmountChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Enter amount"
      className="border border-gray-300 p-2 rounded"
    />
              <select 
                value={toWalletType} 
                onChange={(e) => setToWalletType(e.target.value)} 
                className="border border-gray-300 p-2 rounded"
              >
                <option value='0'>USD Account</option>
                <option value='1'>Ledger Account</option>
                <option value='2'>Wallet Balance</option>
              </select>
              <p className="text-right mt-2">
    To Balance: ${toSelectedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
</p>

              <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="border border-gray-300 p-2 rounded" />
              <input type="password" placeholder="PIN" value={pin} onChange={(e) => setPin(e.target.value)} className="border border-gray-300 p-2 rounded" />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                Submit Top-Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnAccount;
