import React from 'react'
import Marquee from "react-fast-marquee";
import CryptoSlide from './CryptoSlide';
const Slide2 = () => {
  return (
    <div className='text-white font-bold font text-[14px] '>
        <Marquee className=' flex flex-row space-x-3 '>
                <div >
                    <CryptoSlide/>
                </div>
                <div className='px-3'>
                    <CryptoSlide/>
                </div>
                <div>
                    <CryptoSlide/>
                </div>
                <div className='px-3'>
                    <CryptoSlide/>
                </div>
                <div className='px-3'>
                    <CryptoSlide/>
                </div>
                <div>
                    <CryptoSlide/>
                </div>
        </Marquee>
    </div>
  )
}

export default Slide2