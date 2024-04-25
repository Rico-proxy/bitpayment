import React from 'react';
import { ImEyeBlocked } from "react-icons/im";
function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundImage: "url('assets/3.jpg')"}}>
       
      <div className="h-[100vh] text-center font-extrabold bg-black/70
 backdrop-brightness-75 w-full pt-[20vh]">
        <h1 className="text-[150px] font-bold text-white">403</h1>
        <h2 className='flex flex-row justify-center space-x-2'>
            <ImEyeBlocked className='text-red-500 text-4xl'/>
            <span className="text-3xl text-gray-300">Forbidden</span>
        </h2>
        <p className="text-xl text-gray-300">You do not have permission to view this page.</p>
      </div>
    </div>
  );
}

export default Error;
