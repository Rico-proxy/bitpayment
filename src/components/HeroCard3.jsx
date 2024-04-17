import React from 'react'
import { Link } from 'react-router-dom'
const HeroCard3 = () => {
  return (
    <div
  className="bg-cover"
  style={{
    backgroundImage: "url('assets/hero3.jpg')",
    
  }}
>
        <div className="h-[80vh] md:min-h-screen pt-10 md:pt-[200px]  w-full md:h-full flex  md:justify-center md:items-center bg-black/70
 backdrop-brightness-75 px-10 md:px-[80px]">
 
 <div
 
 className="my-auto md:grid md:grid-cols-2 gap-8 text-white   md:items-center ">
   <div className="space-y-8">
     <h1 className="text-2xl md:text-6xl font-bold tracing-widest">Trusted and Regulated</h1>
     <p className='text-sm w-2/3 font-light md:w-3/5'>
        We are a fully licensed and regulated bank serving the financial community.
     </p>
     <div className='flex flex-row  space-x-6 pt-4 text-[11px] md:text-sm'>
     <Link className='hover:bg-[#2a3b64] px-2 py-3 hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl  text-white md:font-bold md:py-4 md:px-8 rounded-lg' to='/login'>REGULATIONS</Link>
     <Link className='hover:bg-[#2a3b64] px-1 py-3 border  hover:delay-150 duration-150 bg-transparent shadow-2xl  text-white md:font-bold md:py-4 md:px-8 rounded-lg' to='/register'>Open An Account</Link>
     </div>
     
   </div>
   
   
 </div>
</div>
    </div>
  )
}

export default HeroCard3