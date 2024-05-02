import React from 'react'
import Marquee from "react-fast-marquee";
const Slide = () => {
  return (
    <div className='text-white font-bold font text-[14px] md:text-[18px]'>
         <Marquee className='border-b border-t border-black flex flex-row '>
                <p className='pl-2'>
                 Welcome to your Bitpay Payment Systems Limited Profile page.
                </p>
                <p className='px-4'>
                    create a USER PIN to authenticate all your transfers.
                  </p>
                  
        </Marquee>
    </div>
  )
}

export default Slide