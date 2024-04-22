import React from 'react'
import Marquee from "react-fast-marquee";
const Slide = () => {
  return (
    <div className='text-white font-bold font text-[14px] '>
        <Marquee className='border-b border-t border-black flex flex-row '>
                <span>
                    Welcome to Bitpayment systems Limited, 
                </span>    
                <span className='px-4'>
                Create a password to secure your account,       
                </span>    
                <span>
                if not disregard this message
                </span>
        </Marquee>
    </div>
  )
}

export default Slide