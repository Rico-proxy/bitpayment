import React, { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { CiBadgeDollar } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
const TransferButton = () => {
  // Retrieve the user ID from local storage directly on state initialization
  const [userId] = useState(localStorage.getItem('userId') || '');
  const [walletBalance] = useState(parseFloat(localStorage.getItem('walletBalance')) || 0);
const [usdAccountBalance] = useState(parseFloat(localStorage.getItem('usdAccountBalance')) || 0);
const [ledgerAccountBalance] = useState(parseFloat(localStorage.getItem('ledgerAccountBalance')) || 0);

  const [walletType, setWalletType] = useState('0'); // default to 'Usd Account'
  const [receiverWalletAddress, setReceiverWalletAddress] = useState('');
  const [details, setDetails] = useState('');
  const [amount, setAmount] = useState('');
  
  const [pin, setPin] = useState('');
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const displayFormAfterToast = useCallback(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const requestBody = {
        userId: userId,
        amount: Number(amount),
        details: details,
        receiverWalletAddress: receiverWalletAddress,
        pin: pin,
        walletType: Number(walletType),
      };
      const response = await axios.post('http://159.65.31.191:5050/api/Wallet/transfer', requestBody);
      toast.success('Transfer successful!');
      // Reset the form after successful transfer
      setWalletType('0');
      setReceiverWalletAddress('');
      setDetails('');
      setAmount('');
      setPin('');
      setShowForm(false);
    } catch (error) {
      toast.error('Transfer failed. Please try again.');
    }
  };

  const handleTransferClick = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(() => resolve('Code sent'), 1500)),
      {
        loading: 'Sending transfer code to your email...',
        success: () => {
          displayFormAfterToast();
          return 'Transfer code sent successfully!';
        },
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

  const getBalanceByType = (type) => {
    switch (type) {
      case '0': return usdAccountBalance;
      case '1': return ledgerAccountBalance;
      case '2': return walletBalance;
      default: return 0;
    }
  };
  const [selectedBalance, setSelectedBalance] = useState(0);
  useEffect(() => {
    setSelectedBalance(getBalanceByType(walletType));
  }, [walletType, usdAccountBalance, ledgerAccountBalance, walletBalance]);
    

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <button onClick={handleTransferClick} className='hover:shadow-2xl hover:bg-blue-900 text-center items-center flex flex-row text-white bg-[#0f1b39] space-x-[150px] rounded-lg p-6 border-2'>
                                          <div className='flex flex-row space-x-2'>
                                                <div>
                                                    <CiBadgeDollar className='text-2xl'/>
                                                </div>
                                                <div>
                                                    <h1>Wire Transfer</h1>
                                                </div>
                                            </div> 
                                            <div>
                                                <IoSendSharp/>
                                            </div>
                                    </button>
      {showForm && (
        <div className="fixed inset-0 bg-[#0f1b39] z-50 flex justify-center items-center">
          <div ref={formRef} className="bg-white shadow-2xl p-6 rounded w-[400px] text-[16px]">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              {/* Remove the Name of the sender as it's not needed */}
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
    Balance: ${selectedBalance.toFixed(2)}
  </p>
              <input type="text" placeholder="Wallet of receiver" value={receiverWalletAddress} onChange={(e) => setReceiverWalletAddress(e.target.value)} className="border border-gray-300 p-2 rounded" />
              <textarea placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} className="border border-gray-300 p-2 rounded"></textarea>
              <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border border-gray-300 p-2 rounded" />
              
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

export default TransferButton;
