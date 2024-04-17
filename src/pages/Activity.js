import React from 'react';
import Button3 from '../components/Button3';
import UserActivity from '../components/UserActivity';
const Activity = () => {
  return (
    <div className='overflow-hidden min-h-screen text-white'>
    
      <header className="h-16 fixed w-full bg-[#0f1b39] z-20">
        <div className='flex flex-row justify-between items-center text-center py-2 px-4 z-40'>
            <div className='flex flex-row items-center text-center space-x-5 '>
                <div>
                  <Button3/>
                </div>
            </div>
            
        </div>
      </header>
          <main className='pb-5 px-5 md:px-20 md:pb-20 md:flex md:flex-col text-black pt-24 bg-slate-200 min-h-screen'>
                
                
                <section className=' md:flex md:flex-row  justify-between pt-10 gap-5'>
                        <div className='rounded-2xl'> 
                            <UserActivity/>
                        </div>
                      
                </section>
                
                
          </main>
          
    </div>
  )
}

export default Activity