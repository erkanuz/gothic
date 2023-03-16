import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16'>
      <div className='group relative items-center justify-center overflow-hidden'>
        <div className='max-h-[400px] w-full relative'>
            <img src="https://images.pexels.com/photos/700422/pexels-photo-700422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className='w-full max-h-[400px]'/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
        <div className='flex items-center justify-center bg-black text-white h-20'>
            <p className='text-sm italic'>&#169; Eric Uz. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer