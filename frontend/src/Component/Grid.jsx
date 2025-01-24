import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
const Grid = () => {
  return (
    <div className='text-center p-6 px-20 w-full overflow-hidden'>
      <p className='text-sm font-semibold'>The symbol * shows that the field place is mandatory</p>
       <form>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
            Your Name <span className='text-red-500'>*</span>
            <input type="text" className='flex w-full md:w-1/2 text-left px-8 py-2 border rounded-sm outline-none hover:border-sky-600' placeholder='Your name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left'>
            Email <span className='text-red-500'>*</span>
            <input type="email" className='flex w-full md:w-1/2 text-left px-8 py-2 border outline-none ' placeholder='Your Email' required/>
            </div>
        
         <div className='text-left'>
         Message <span className='text-red-500'>*</span>
        <textarea name="" id="" className='flex border outline-none w-full resize-none' required></textarea>
         </div>
         </div>
        <button className='bg-blue-500 text-white border px-6 py-2 mt-2 hover:bg-blue-400 rounded'>Submit</button>
       </form>
    </div>
  )
}

export default Grid