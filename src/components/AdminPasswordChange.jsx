import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function AdminPasswordChange() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [passwordShown, setPasswordShown] = useState(false); // State to toggle password visibility

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put('https://api.nuhu.xyz/api/Admin/update-password', {
                email,
                newPassword
            });
            setMessage('Password updated successfully!');
            console.log(response.data); // Logging the API response
        } catch (error) {
            setMessage('Failed to update password.');
            console.error(error);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown); // Toggle the state to show/hide the password
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                        New Password
                    </label>
                    <div className="relative flex items-center shadow appearance-none border rounded w-full text-gray-700 leading-tight">
                        <input
                            type={passwordShown ? 'text' : 'password'}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full py-2 px-3 outline-none"
                            placeholder="New Password"
                            required
                        />
                        <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            {passwordShown ? <FaEyeSlash className="text-gray-700 cursor-pointer" /> : <FaEye className="text-gray-700 cursor-pointer" />}
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                        Password must contain at least one uppercase letter, one digit, and one special character.
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update Password
                    </button>
                </div>
            </form>
            {message && <p className="text-center mt-4 text-white">{message}</p>}
        </div>
    );
}

export default AdminPasswordChange;
