import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import Transfer from './Transfer'
import TransferButton from './TransferButton'

const Form = () => {
  return (
    <div className='flex flex-row justify-center space-x-3 '>
      <div className="flex flex-col items-center p-4 rounded-2xl">
        <div className="p-3 rounded-full bg-black">
          <AiOutlineArrowUp className="text-white text-3xl" />
        </div>
        <TransferButton/>
      </div>
      <div className="flex flex-col items-center p-4 rounded-2xl">
        <div className="p-3 rounded-full bg-black">
          <AiOutlineArrowDown className="text-white text-3xl" />
        </div>
        <TransferButton/>
      </div>
      <div className="flex flex-col items-center p-4 rounded-2xl">
        <div className="p-3 rounded-full bg-black">
          <AiOutlineArrowUp className="text-white text-3xl font-bold" />
        </div>
        <TransferButton/>
      </div>
    </div>
  )
}

export default Form
