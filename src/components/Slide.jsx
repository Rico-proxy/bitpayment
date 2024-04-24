import React from 'react'
import Marquee from "react-fast-marquee";
const Slide = () => {
  return (
    <div className='text-white font-bold font text-[14px] '>
        <Marquee className='border-b border-t border-black flex flex-row'>
                <p className='pl-2'>
                 Welcome to your Bitpay Payment Systems Limited personal dashboard.
                </p>
                <p className='px-2'>
                Please, create a USER PIN to authenticate all your transfers.
                  </p>
                  <p>
                  You can do this by clicking on your PROFILE icon, then, SET PIN.
                  </p>
        </Marquee>
    </div>
  )
}

export default Slide