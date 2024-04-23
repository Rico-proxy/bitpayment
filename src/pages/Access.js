import { useState } from 'react';
import Padlock from '../components/Padlock';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Access = () => {
    const [accessCode, setAccessCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const verifyAccessCode = () => {
            return axios.post('https://api.nuhu.xyz/api/Auth/verify-code',
                JSON.stringify(accessCode),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        };

        toast.promise(
            verifyAccessCode(),
            {
                loading: 'Verifying access code...',
                success: (data) => {
                    console.log('Response', data.data);
                    sessionStorage.setItem('isAccessGranted', 'true');
                    navigate('/website');
                    return 'Access Granted!';
                },
                error: (err) => {
                    console.error('Error', err.response?.data || err.message);
                    if (err.response && err.response.status === 400) {
                        return 'Invalid Access Code';
                    } else {
                        return 'Ooops😞, Wrong Access Code, Please try again!';
                    }
                },
            }
        );
    };

    return (
        <div className='overflow-hidden min-h-screen bg-[#0f1b39]'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='px-10 md:px-0 flex justify-center items-center md:pt-10 pt-20 h-screen'>
                <div className='flex flex-col items-center'>
                    <Padlock/>
                    <h1 className='text-2xl text-white font-medium mb-2'>Welcome please enter your Access Code</h1>
                    <div className='shadow-2xl bg-white border-4 rounded-2xl p-8 md:p-20'>
                        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                            <label className='text-black text-xl font-semibold'>Enter Access Code</label>
                            <input 
                                type='text' 
                                placeholder='Access Code' 
                                required value={accessCode} 
                                onChange={(e) => setAccessCode(e.target.value)} 
                                className='p-2 border border-black ' />
                            <button type='submit' className='bg-[#0f1b39] text-white rounded-lg p-3 hover:bg-white hover:text-black hover:border-black hover:border-2'>
                                Submit
                            </button>
                        </form>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Access;
