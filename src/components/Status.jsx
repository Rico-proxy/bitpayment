import React from 'react';
import { MdCheckCircle } from 'react-icons/md'; // Importing the icon

const Status = ({ statusType }) => {
  const isActive = statusType === 'active';

  const boxStyle = {
    color: 'white',
   

    fontWeight: 'bold',
  
  };

  return (
  <div className='flex items-center space-x-2'>
    <div className='text-white text-xl'>Active</div>
    <span><MdCheckCircle className='text-green-500'/></span>
  </div>
    
  );
};

export default Status;
