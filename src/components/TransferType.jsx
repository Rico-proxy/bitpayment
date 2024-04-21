
  
import {React, useState, useEffect, useRef} from 'react'
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
      <div className=' flex  justify-center'>
          
          
            <main className='  flex flex-col px-10 '>
               
                <section className=' '>
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
            </main>
          
      </div>
    )
  }
  



export default TransferType