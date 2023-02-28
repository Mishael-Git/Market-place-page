import React from 'react'
import {Middle, Performance, Sidebar} from "./Info"
function Body() {
  return (
    <div  className="px-[1%] space-x-[19%] ">
        <div className='py-9'>
        <Sidebar/>
        </div>
     
     <div className='flex h-screen flex-grow'>
        {/* Body middle */}
        <div className='h-screen flex-grow'>
          <div>
          <Middle/>
          </div>
        </div>
        {/* Body right */}
        <div className='w-[40%] h-screen '>
          <div className='bg-[#ffb361] px-6'>
          <Performance/>
          </div>
            
        </div>

     </div>
    </div>
  )
}

export default Body