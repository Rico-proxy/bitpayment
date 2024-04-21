import React from 'react'
import Marquee from "react-fast-marquee";
import CryptoSlide from './CryptoSlide';
import CryptoSlide2 from './CryptoSlide2';
import CryptoSlide3 from './CryptoSlide3';
const Slide2 = () => {
  return (
    <div className='text-white font-bold font text-[14px] '>
        <div className='flex justify-center text-2xl py-3'>Live Market <span className='animate-pulse pl-2 text-green-600'>Rate</span></div>
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
                <div >
                    <CryptoSlide/>
                </div>
                <div className='px-3'>
                    <CryptoSlide2/>
                </div>
                <div className='px-3'>
                    <CryptoSlide3/>
                </div>
                <div >
                    <CryptoSlide/>
                </div>
                <div className='px-3'>
                    <CryptoSlide2/>
                </div>
                <div>
                    <CryptoSlide3/>
                </div>
        </Marquee>
    </div>
  )
}

export default Slide2