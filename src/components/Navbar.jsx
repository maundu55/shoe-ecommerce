import React from 'react'
import { BiCart, BiSearch, BiUser } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div>
      <div className='navbar flex justify-between items-center px-14 py-6 w-full z-50 transiton-all duration-500 bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff]'> 
        <div>
          <h2 className='text-2xl font-semibold text-white'>LOGO HERE</h2>
        </div>
        <div  className='relative search flex items-center'>
          <BiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500' />
          <input type="text" placeholder='search for products' className='pl-12  pr-10 py-3 w-130 rounded-full border-2 border-white bg-white focus:outline-none' />
        </div>
        <div className=' relative flex items-center space-x-8'>
          <BiCart className=' text-3xl text-white'/>
          <span className='absolute -top-2 right-5 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full'>0</span>
          <BiUser className='text-3xl text-white'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar