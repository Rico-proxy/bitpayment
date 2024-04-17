
  
import {React, useState, useEffect, useRef} from 'react'
  import { Accordion, AccordionItem } from '@szhsin/react-accordion';
  import { Link } from 'react-router-dom';
  import Message from '../components/Message';
  import { CgMenu } from 'react-icons/cg';
  import { AiOutlineClose } from 'react-icons/ai';
  import { RiDashboardFill } from 'react-icons/ri';
  import { FaQuestion } from 'react-icons/fa6';
  import { SlWallet } from 'react-icons/sl';
  import { BiLogOut } from 'react-icons/bi';
  import { BsFillPersonFill } from 'react-icons/bs';
  import { FaUser, FaPhone, FaEnvelope, FaPen, FaListAlt } from 'react-icons/fa';
  import { BiSupport } from "react-icons/bi";
  import { CiBadgeDollar } from "react-icons/ci";
  import { IoSendSharp } from "react-icons/io5";
import TransferButton from '../components/TransferButton';
import LocalTransfer from '../components/LocalTransfer';
import WireTransfer from '../components/WireTransfer';
import BitcoinAccount from '../components/BitcoinAccount';
import OwnAccount from '../components/OwnAccount';
  
  const TransferType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef();
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  
  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
    return (
      <div className='min-h-screen flex bg-slate-200'>
          
          
            <main className='pt-10  flex flex-col px-10 '>
                <div>
                    <h1 className='text-2xl font-bold text-black'>Transfer Type</h1>
                </div>
                <section className='pt-10 '>
                <div className='flex flex-col items-center'>
                    <img
                            src="/assets/logo.svg"
                            alt="Digital Currency"
                            width={200}
                            height={200}
                            className='mx-auto'
                          />
                          <h1 className='text-2xl  italic text-blue-900 font-bold'>Payment System</h1>
                  </div> 
                            <div className='pt-20 flex flex-col justify-center items-center text-center space-y-3 '>
                                
                                    <WireTransfer/>
                                    <BitcoinAccount/>
                                    <OwnAccount/>
                            </div>
                </section>
                <section>
                </section>
            </main>
          
      </div>
    )
  }
  



export default TransferType