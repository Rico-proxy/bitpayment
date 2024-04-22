import React from 'react'
import Circle3 from './Circle3'
import Circle4 from './Circle4'
import Circle5 from './Circle5'
const Three = () => {
  return (
    
        <div className='p-4 flex flex-row space-x-2'>
              
                <card className="bg h-[23vh]  w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-1 items-center  shadow-lg">
                
                <div className="p-2 ">
                    <Circle4/>
                </div>
                <div>
                    <p className="text-xl font font-semibold">Investment</p>
                    <p className="text-sm">$0</p>
                </div>
                
                </card>
                <card className="bg h-[23vh]  w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-1 items-center  shadow-lg">
                
                <div className="p-2 ">
                    <Circle3/>
                </div>
                <div>
                    <p className="text-xl font font-semibold">Stocks</p>
                    <p className="text-sm">$0</p>
                </div>
                
                </card>
                <card className="bg h-[23vh]  w-[40vh] text-white p-4 rounded-xl flex flex-col space-y-1 items-center  shadow-lg">
                
                <div className="p-2 ">
                    <Circle5/>
                </div>
                <div>
                    <p className="text-xl font font-semibold">Real Estate </p>
                    <p className="text-sm">$0</p>
                </div>
                
                </card>
        </div>
    
  )
}

export default Three