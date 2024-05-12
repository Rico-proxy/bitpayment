import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function ChangePassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put('https://api.nuhu.xyz/api/Admin/update-password', {
                email,
                newPassword
            });
            toast.success('Password reset successful', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => navigate('/login'), 5000);  // Redirect after the toast message
        } catch (error) {
            toast.error('Failed to update password.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error('Update error:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div style={{backgroundImage: "url('assets/3.jpg')",}} className='overflow-y-hidden min-h-screen bg-[#0f1b39] flex justify-center items-center'>
            <ToastContainer />
            <div className='p-8 shadow-2xl bg-white border-4 rounded-2xl max-w-md'>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-bold mb-4 text-blue-900'>Update Your Password</h1>
                    </div>
                    <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="pl-4 border-l-2 outline-none text-sm w-full"
                        />
                    </div>
                    <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                        <input
                            type={passwordShown ? 'text' : 'password'}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Password"
                            required
                            className="pl-4 border-l-2 outline-none text-sm w-full"
                        />
                        <div onClick={togglePasswordVisibility} className="text-gray-700 cursor-pointer">
                            {passwordShown ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                        Password must contain at least one uppercase letter, one digit, and one special character.
                    </p>
                    <div>
                        <button type='submit' className='hover:bg-[#2a3b64] text-[13px] hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl text-white font-bold py-4 px-8 rounded-lg w-full'>
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
