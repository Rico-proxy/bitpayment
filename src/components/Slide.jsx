import React from 'react'
import Marquee from "react-fast-marquee";
const Slide = () => {
  return (
    <div className='text-white font-bold font text-[14px] '>
        <Marquee className='border-b border-t border-black flex flex-row '>
                <span>
                    Welcome to Bitpay Payment Systems Limited, 
                </span>    
                <span className='px-2'>
                Create a Transfer pin on the Profile Page to secure your account,       
                </span>    
                <span className='px-2'>
                  To start making Transfers,
                </span>
                <span className='pr-5'>
                If not disregard this message.
                </span>
        </Marquee>
    </div>
  )
}

export default Slide