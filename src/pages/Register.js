import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import countryCodes from 'country-codes-list';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineAccountBalance } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const accountTypeMap = {
  1: 'Savings Account',
  2: 'Current Account',
  3: 'Fixed Deposit',
  4: 'Recurring Deposit Account',
  5: 'Checking Account',
  6: 'Offshore Account',
  7: 'Money Market Account',
  8: 'Certificate of Deposit Account'
};

const Register = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');

  const countryOptions = countryCodes.customList(
    'countryCode',
    '{countryNameEn} '
  );

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    
    // Prepare formData with numeric accountType for the API
    const formData = {
        // ...other form fields
        firstName: form.firstName.value,
      lastName: form.lastName.value,
      middleName: form.middleName.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      phoneNumber: form.phoneNumber.value,
        accountType: parseInt(form.accountType.value, 10), // Numeric value for backend
        country: String(selectedCountry),
        address: form.address.value,
        city: form.city.value,
        state: form.state.value,
    };

    const toastId = toast.loading("Registration is ongoing...");

    try {
      const response = await axios.post('https://api.nuhu.xyz/api/Auth/Register', formData);
      
      if (response.status === 201) {
        // Assuming the account number is in the response data and accessible via response.data.accountNumber
        const accountNumber = response.data.accountNumber; // Retrieve account number from response

        // Update the toast with a success message
        toast.update(toastId, {
          render: "Registration successful, please check your email for registration details.",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });

        // Prepare data for EmailJS, including the account number
        const emailData = {
          ...formData,
          accountType: accountTypeMap[formData.accountType], // String value for EmailJS
          accountNumber: accountNumber // Include the account number
        };

        // Send the email with EmailJS using the updated emailData
        emailjs.send('service_mc49zuo', 'template_we3gk1k', emailData, '0F2IGzYbKry9o2pkn')
          .then((result) => {
              console.log('Email sent:', result.text);
          }, (error) => {
              console.error('Failed to send email:', error.text);
          });

        navigate('/login');
      } else {
        toast.update(toastId, {
          render: "Registration unsuccessful, please try again.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Registration unsuccessful, please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true
      });
      console.error('Registration error:', error.response?.data || error.message);
    }
  };

  return (
    <div style={{backgroundImage: "url('assets/3.jpg')",}} className='min-h-screen overflow-hidden bg-[#0f1b39]'>
    <ToastContainer position="top-center"/>
          <div className='flex justify-center pt-10 '>
                <div className='flex flex-col  '>
                     <div className='font-bold'>
                            <h1 className='text-2xl font-bold mb-2 text-white text-center'>Register Your Account</h1>
                     </div>
                   <div className='shadow-2xl bg-white  border-4 rounded-2xl  md:h-full p-5 md:p-16 '>
                   <form onSubmit={handleSubmit} className="flex flex-col space-x-5">
              <div className="md:flex md:flex-row md:space-x-5">
                <div className="space-y-6 md:w-1/3">
                
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <BsPersonVcard  className="text-black font-bold font-xl" />
                    <input type="text" name="firstName" placeholder="First Name" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <BsPersonVcard className="text-black font-bold font-xl" />
                    <input type="text" placeholder="Last Name" name="lastName" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <BsPersonVcard className="text-black font-bold font-xl" />
                    <input type="text" placeholder="Middle Name" name="middleName" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                      <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                          <MdOutlineAccountBalance  className="text-black font-bold font-xl" />
                          <select name="accountType" className="pl-4 border-l-2 outline-none text-sm w-full">
                            <option value="0">Select Account Type...</option>
                            <option value="1">Savings Account</option>
                            <option value="2">Current Account</option>
                            <option value='3'>Fixed Deposit</option>
                              <option value='4'>Recurring Deposit Account</option>
                              <option value='5'>Checking Account</option>
                              <option value='6'>Offshore Account</option>
                              <option value='7'>Money Mark Account</option>
                              <option value='8'>Certificate of Deposit Account</option>
                           </select>
                       </div>
                </div>
                <div className="space-y-6 md:w-1/3">
                  
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <AiTwotoneMail className="text-black font-bold font-xl" />
                    <input type="text" placeholder="Email" name="email" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <BsTelephone className="text-black font-bold font-xl" />
                    <input type="text" placeholder="Phone Number" name="phoneNumber" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <MdPassword className="text-black font-bold font-xl" />
                    <input type="password" placeholder="Password" name="password" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <MdPassword className="text-black font-bold font-xl" />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                </div>
                <div className="space-y-6 md:w-1/3">
                
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <GrLocation className="text-black font-bold font-xl" />
                    <input type="text" placeholder="Address" name="address" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <GrLocation className="text-black font-bold font-xl" />
                    <input type="text" placeholder="City" name="city" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <GrLocation className="text-black font-bold font-xl" />
                    <input type="text" placeholder="State" name="state" required className="pl-4 border-l-2 outline-none text-sm" />
                  </div>
                  <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                    <GrLocation className="text-black font-bold font-xl" />
                    <select name="country" required className="pl-4 border-l-2 outline-none text-sm w-full">
                      <option value="">Select your country</option>
                      {Object.entries(countryOptions).map(([countryCode, countryDetails]) => (
                        <option key={countryCode} value={countryDetails}>{countryDetails}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
          <div className="pt-6">
          <button type="submit" className="font-medium bg-[#0f1b39] text-white rounded-lg p-3 w-full border-2 border-transparent hover:bg-white hover:text-black hover:border-black">
          Submit
        </button>

                  </div>
        </form>


                    </div>
                </div>
        </div>
    </div>
  )
}

export default Register