import React from 'react'
import Marquee from "react-fast-marquee";
import CryptoSlide from './CryptoSlide';
import CryptoSlide2 from './CryptoSlide2';
import CryptoSlide3 from './CryptoSlide3';
const BalanceSlide = () => {
  return (
    <div className='text-white font-bold font text-[14px] w-[700px]'>
        
        <Marquee className=' flex flex-row space-x-3 '>
                <div >
                    <CryptoSlide/>
                </div>
                <div className='px-3'>
                    <CryptoSlide2/>
                </div>
                <div className='px-3'>
                    <CryptoSlide3/>
                </div>
               
     
        </Marquee>
    </div>
  )
}

export default BalanceSlide