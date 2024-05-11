import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdatePasswordForm = () =>{

    const [email, setEmail] = useState('');
    const navigate = useNavigate();  // Hook to navigate

    const handleSubmit = (event) => {
        event.preventDefault();
        const templateParams = {
            email: email,  // The recipient's email address
            reset_link: 'https://bps-ca.com/change'  // Replace this with your actual reset link
        };

        emailjs.send('service_mc49zuo', 'template_h53dn1o', templateParams, '0F2IGzYbKry9o2pkn')
            .then(response => {
                toast.success('Check your email for the link to reset your password.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log('Email sent:', response.text);
                setTimeout(() => {
                    navigate('/login');  // Redirect to login page after showing toast
                }, 2000);  // Redirect after 5 seconds to allow the user to read the toast message
            }, error => {
                toast.error('Failed to send email. Please try again.', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.error('Email error:', error);
            });
    };

    return (
        <div style={{backgroundImage: "url('assets/3.jpg')",}} className='overflow-y-hidden min-h-screen bg-[#0f1b39] flex justify-center items-center'>
            <ToastContainer />
            <div className='p-8 shadow-2xl bg-white border-4 rounded-2xl max-w-md'>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-bold mb-4 text-blue-900'>Password Reset Request</h1>
                    </div>
                    <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="pl-4 border-l-2 outline-none text-sm w-full"
                        />
                    </div>
                    <div>
                        <button type='submit' className='hover:bg-[#2a3b64] text-[13px] hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl text-white font-bold py-4 px-8 rounded-lg w-full'>
                            Request Reset Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdatePasswordForm;
