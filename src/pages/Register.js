
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import countryCodes from 'country-codes-list';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
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
  event.preventDefault(); // Prevent the default form submit behavior
  const form = event.target;
  const notify = () => toast("Wow so easy!");
  const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      middleName: form.middleName.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      phoneNumber: form.phoneNumber.value,
      accountType: parseInt(form.accountType.value, 10), // Ensure accountType is an integer
      address: form.address.value,
      city: form.city.value,
      state: form.state.value,
      country: String(selectedCountry),
  };

  const toastId = toast.loading("Registration is ongoing...");

  // Wait for 3 seconds before proceeding with the registration
  setTimeout(async () => {
    try {
      const response = await axios.post('https://api.nuhu.xyz/api/Auth/Register', formData);

      if (response.status === 201 || response.status === 201) {
        // Send an email using EmailJS
        emailjs.sendForm('service_mc49zuo', 'template_we3gk1k', form, '0F2IGzYbKry9o2pkn')
          .then((result) => {
              console.log('Email sent:', result.text);
          }, (error) => {
              console.log('Failed to send email:', error.text);
          });

        // Update the toast with a success message
        toast.update(toastId, {
          render: "Registration successful, please check your email for registration details.",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });

        // Redirect to '/login' after showing the success message
        setTimeout(() => navigate('/login'), 3000);
      } else {
        // Update the toast with an error message due to unexpected status code
        toast.update(toastId, {
          render: "Registration unsuccessful, please try again.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
      }
    } catch (error) {
      // Update the toast with an error message in case of an exception
      console.error('Registration error:', error.response?.data || error.message);
      toast.update(toastId, {
        render: "Registration unsuccessful, please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true
      });
    }
  }, 3000); // 3-second delay
};
  
  return (
    <div className='h- overflow-hidden bg-[#0f1b39]'>
    <ToastContainer position="top-center"/>
          <div className='flex justify-center pt-10 '>
                <div className='flex flex-col  '>
                     <div className='font-bold'>
                            <h1 className='text-2xl font-bold mb-2 text-white text-center'>Register Your Account</h1>
                     </div>
                   <div className='shadow-2xl bg-white  border-4 rounded-2xl  md:h-full p-5 md:p-16 '>
                      <form onSubmit={handleSubmit} className='flex flex-col space-x-5 '>
                        <div className='md:flex md:flex-row md:space-x-5 '>
                        <div className='space-y-6'>
                          <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <FiMail className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            name='firstName'
                            placeholder="First Name"
                            required
                            className="pl-4 border-l-2  outline-none text-sm" // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Last Name"
                            name='lastName'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Middle Name"
                            name='middleName'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Email"
                            name='email'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Phone Number"
                            name='phoneNumber'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <select 
                          id='accountType'
                          name='accountType'
                          className="pl-4 border-l-2  outline-none text-sm w-full" >
                              <option value='0'>Select an option...</option>
                              <option value='1'>Savings Account</option>
                              <option value='2'>Current Account</option>
                              <option value='3'>Fixed Deposit</option>
                              <option value='4'>Recurring Deposit Account</option>
                              <option value='5'>Checking Account</option>
                              <option value='6'>Offshore Account</option>
                              <option value='7'>Money Mark Account</option>
                              <option value='8'>Certificate of Deposit Account</option>
                           </select>
                        </div>
                          </div>
                          <div className='space-y-6'>
                          <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Address"
                            name='address'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="City"
                            name='city'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="State"
                            name='state'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Password"
                            name='password'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Confirm Password"
                            name='confirmPassword'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                                    </div>
                                    <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" />
                          <select
                            name="country"
                            required
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="pl-4 border-l-2 outline-none text-sm w-full"
                          >
                            <option value="">Select your country</option>
                            {Object.entries(countryOptions).map(([countryCode, countryDetails]) => (
                              <option key={countryCode} value={countryDetails}>{countryDetails}</option>
                            ))}
                          </select>
                        </div>
                          </div>
                        </div>
                         <div className='pt-6'>
                        <button type='submit' className='font-medium hover:bg-white hover:text-black hover:border-black hover:border-2 bg-[#0f1b39] text-white rounded-lg p-3 w-full'>Submit</button>
                        </div>
                      </form>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Register