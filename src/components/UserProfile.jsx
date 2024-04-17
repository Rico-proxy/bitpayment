import React, { useState } from 'react';
import { AiOutlineUser, AiOutlinePhone, AiOutlineHome } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Smith Wright',
    phoneNumber: '080246578', // This should probably be an actual phone number
    address: 'New York, USA',
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    // Here you would typically make an API call to save the changes
    setIsEditing(false);
  };

  return (
    <div className="max-w-sm  bg-[#0f1b39] rounded-lg shadow-lg p-10">
      <div className="flex flex-col items-center p-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src="/assets/avt2.jpg" // Replace with the path to your image
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-2xl text-white font-semibold">{userInfo.name}</h2>
        <p className="text-white">Trader</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg my-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="mb-2 p-2 w-full rounded border border-gray-300"
            />
            <input
              type="text"
              name="phoneNumber"
              value={userInfo.phoneNumber}
              onChange={handleChange}
              className="mb-2 p-2 w-full rounded border border-gray-300"
            />
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              className="mb-2 p-2 w-full rounded border border-gray-300"
            />
            <button
              onClick={saveChanges}
              className="hover:bg-[#2a3b64]   hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl  text-white font-bold py-2 px-4 rounded w-full"
           s >
              Save Changes
            </button>
          </>
        ) : (
          <div className=''>
            <div className="flex items-center text-gray-600 mb-2">
              <AiOutlineHome className="mr-2" /> {userInfo.address}
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <AiOutlinePhone className="mr-2" /> {userInfo.phoneNumber}
            </div>
            <button
              onClick={handleEdit}
              className="flex items-center justify-center hover:bg-[#2a3b64]   hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl  text-white font-bold py-2 px-4 rounded w-full mt-4"
            >
              <MdModeEdit className="mr-2" />
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
