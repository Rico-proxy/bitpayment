import React, { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { CiBadgeDollar } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
const BitcoinAccount = () => {
  const navigate = useNavigate();
  const handleAmountChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    value = value.replace(/^0+/, ''); // Remove leading zeros

    if (value) {
      value = parseInt(value, 10).toString(); // Convert to integer to standardize
      let formattedValue = `$${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`; // Add commas and dollar sign
      setAmount(formattedValue);
    } else {
      setAmount('$'); // Keep dollar sign when empty
    }
  };

  const handleFocus = (e) => {
    if (e.target.value === '$') {
      setAmount(''); // Clear dollar sign when focused and empty
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setAmount('$'); // Re-add dollar sign when blurred and empty
    }
  };

  const [userId] = useState(sessionStorage.getItem('userId') || '');
  const [selectedBalance, setSelectedBalance] = useState(0);
  const [walletType, setWalletType] = useState('0');
  const [receiverWalletAddress, setReceiverWalletAddress] = useState('');
  const [details, setDetails] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');
  const [pin, setPin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const getAccountNameByType = (typeValue) => {
    const accountTypes = {
      '0': 'USD Account',
      '1': 'Ledger Account',
      '2': 'Wallet Balance'
    };
    return accountTypes[typeValue] || 'Unknown Account';
  };

  // Function to fetch the user balance
  const fetchBalance = async () => {
    try {
      if (userId) {
        const response = await axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`);
        // Extract balances from response
        const balances = {
          '0': response.data.usdAccountBalance, // replace with your actual response data
          '1': response.data.ledgerAccountBalance, // replace with your actual response data
          '2': response.data.walletBalance // replace with your actual response data
        };
        setSelectedBalance(balances[walletType]);
      }
    } catch (error) {
      console.error('Error fetching user balance:', error);
      toast.error('Failed to fetch account balance.');
    }
  };

  // useEffect to fetch user balance when component mounts and when walletType changes
  useEffect(() => {
    fetchBalance();
  }, [walletType]);

  const displayFormAfterToast = useCallback(() => {
    setShowForm(true);
  }, []);

  const sendReceiptEmail = (receiptData) => {
    const userEmail = sessionStorage.getItem('email');
    const receiptServiceID = 'service_w9dr1hs'; // Replace with your actual service ID
    const receiptTemplateID = 'template_tbmgm69'; // Replace with your actual template ID
    const receiptUserID = '0F2IGzYbKry9o2pkn'; // Replace with your actual EmailJS user ID
  
    emailjs.send(receiptServiceID, receiptTemplateID, receiptData, receiptUserID)
      .then(response => {
        console.log('Receipt email successfully sent!', response);
      })
      .catch(err => {
        console.error('There has been an error sending the receipt email:', err);
      });
  };
  
  const sendEmailWithOTP = (otpCode) => {
    const userEmail = sessionStorage.getItem('email');
    const serviceID = 'service_w9dr1hs';
    const templateID = 'template_6rbm698';
    const userID = '0F2IGzYbKry9o2pkn';

    const templateParams = {
      message: otpCode,
      email: userEmail
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(response => {
        console.log('Email successfully sent!', response);
      })
      .catch(err => {
        console.error('There has been an error. Here are some thoughts on the error that occured:', err);
      });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cleanAmount = parseFloat(amount.replace(/[,$]/g, ''));
    const requestBody = {
      userId: userId,
      amount: cleanAmount, // Use the cleaned and parsed amount here
      details: details.toString(),
      receiverWalletAddress: receiverWalletAddress.toString(),
      pin: pin.toString(),
      walletType: parseInt(walletType, 10),
     coinType: crypto,
      otp: otp.toString(),
    };

    try {
      const response = await axios.post('https://api.nuhu.xyz/api/Wallet/bitcoin-transfer', requestBody);
      if (response.status === 200) {
        toast.success('Transfer successful!');
  
        // Prepare receipt data
        // Prepare receipt data
          const receiptData = {
            email: sessionStorage.getItem('email'), // Fetch user email from session storage
            transfer_type: 'Bitcoin Transfer', // This can be dynamic if there are other types
            wallet_type: getAccountNameByType(walletType), // Converts '0', '1', '2' to account names
            crypto_type: crypto, // Already being set in state
            amount: `$${cleanAmount.toLocaleString()}`, // Format the amount for display in the email
            wallet_address: receiverWalletAddress, // Already being set in state
            description: details, // Already being set in state
          };

  
        // Send the receipt email
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
    setReceiverWalletAddress('');
    setDetails('');
    setAmount('');
    setPin('');
    setShowForm(false);
    setCrypto('');
    setOtp('');
  };

  const handleTransferClick = () => {
    const userId = sessionStorage.getItem('userId');
    const requestBody = {
      userId: userId,
    };

    toast.promise(
      axios.post('https://api.nuhu.xyz/api/Wallet/initiate-transfer', requestBody)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
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

  
 

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <button onClick={handleTransferClick} className='hover:shadow-2xl hover:bg-blue-900 text-center items-center flex flex-row text-white bg-[#0f1b39] space-x-[150px] rounded-lg p-8 border-2'>
        <div className='flex flex-row space-x-2'>
          <div>
            <CiBadgeDollar className='text-2xl'/>
          </div>
          <div>
            <h1>Bitcoin Transfer</h1>
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
                Bitcoin Transfer
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

              <input type="text" placeholder="Wallet Address" value={receiverWalletAddress} onChange={(e) => setReceiverWalletAddress(e.target.value)} className="border border-gray-300 p-2 rounded" />
              <textarea placeholder="Description" value={details} onChange={(e) => setDetails(e.target.value)} className="border border-gray-300 p-2 rounded"></textarea>
              {/* <select 
                value={crypto} 
                onChange={(e) => setCrypto(e.target.value)} 
                className="border border-gray-300 p-2 rounded"
              >
                <option value='BTC'>BTC</option>
                <option value='ETH'>ETH</option>
                <option value='LTC'>LTC</option>
              </select> */}
              <input type="text" placeholder="Crypto" value={crypto} onChange={(e) => setCrypto(e.target.value)} className="border border-gray-300 p-2 rounded" />
              <input
      type="text"
      placeholder="Enter amount"
      value={amount}
      onChange={handleAmountChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="border border-gray-300 p-2 rounded"
    />
              <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="border border-gray-300 p-2 rounded" />
              <input type="password" placeholder="PIN" value={pin} onChange={(e) => setPin(e.target.value)} className="border border-gray-300 p-2 rounded" />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                Submit Transfer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinAccount;