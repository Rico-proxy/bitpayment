import React from 'react'
import Marquee from "react-fast-marquee";
const Slide = () => {
  return (
    <div className='text-white font-bold font text-[14px] '>
        <Marquee className='border-b border-t border-black flex flex-row '>
                <p className='pl-2'>
                 Welcome to your Bitpay Payment Systems Limited Support page.
                </p>
                <p className='px-4'>
                    Send a message to our support team.
                  </p>
                  
        </Marquee>
    </div>
  )
}

export default Slide