import React from 'react'
import Logos from './Logos'

import {FiLink} from 'react-icons/fi'
import {GiCurvyKnife, GiChewedSkull} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='max-w-[1400px] mx-auto p-4'>
      <h1 className='text-4xl text-center text-black dark:text-white font-bold mt-8 mb-3 uppercase'>Featured Categories</h1>
        <div className='flex justify-center'><span className='xim'></span></div>

      <div className='flex items-center justify-center mt-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

          <div className='group relative items-center justify-center overflow-hidden m-8'>

            <div className='h-96 w-72'>
              <img src="https://images.pexels.com/photos/2911777/pexels-photo-2911777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform' />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center translate-y-[52%] group-hover:translate-y-24 duration-500">
              <h1 className='text-3xl text-white'>Women’s Clothing</h1>
              <p className='text-sm italic text-white px-9 opacity-0 group-hover:opacity-100 transition-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            </div>

            <div className='absolute top-1 right-1 flex flex-col items-center justify-center gap-4 text-center'>
              <Link to={'/Womens'}>
              <div className='h-8 w-8 m-auto inset-0 bg-white rounded-full grid place-content-center cursor-pointer'>
                <FiLink size={16}/>
              </div>
              </Link>
            </div>

          </div>

          <div className='group relative items-center justify-center overflow-hidden m-8'>

            <div className='h-96 w-72'>
              <img src="https://images.pexels.com/photos/5095880/pexels-photo-5095880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform' />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#800202] group-hover:via-[#800202] group-hover:to-[#800202] group-hover:opacity-40"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center translate-y-[52%] group-hover:translate-y-24 duration-500">
              <h1 className='text-3xl text-white'>Accessories</h1>
              <p className='text-sm italic text-white px-9 opacity-0 group-hover:opacity-100 transition-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            </div>

            <div className='absolute top-1 right-1 flex flex-col items-center justify-center gap-4 text-center'>
              <Link to={'/Accessories'}>
              <div className='h-8 w-8 m-auto inset-0 bg-white rounded-full grid place-content-center cursor-pointer'>
                <FiLink size={16}/>
              </div>
              </Link>
            </div>

          </div>

          <div className='group relative items-center justify-center overflow-hidden m-8'>

            <div className='h-96 w-72'>
              <img src="https://images.pexels.com/photos/2131980/pexels-photo-2131980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform' />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center translate-y-[52%] group-hover:translate-y-24 duration-500">
              <h1 className='text-3xl text-white'>Men’s Clothing</h1>
              <p className='text-sm italic text-white px-9 opacity-0 group-hover:opacity-100 transition-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            </div>

            <div className='absolute top-1 right-1 flex flex-col items-center justify-center gap-4 text-center'>
              <Link to={'/Mens'}>
              <div className='h-8 w-8 m-auto inset-0 bg-white rounded-full grid place-content-center cursor-pointer'>
                <FiLink size={16}/>
              </div>
              </Link>
            </div>

          </div>
          
        </div>
      </div>

      <div className='flex justify-center text-black dark:text-white'>
        <GiChewedSkull size={24}/>
      </div>

      <div className='flex items-center justify-center gap-4 mb-4 text-black dark:text-white'>
        <GiCurvyKnife size={24}/>
        <h1 className='md:text-2xl sm:text-md text-center font-medium'>Lorem Impuls is something awesome</h1>
        <GiCurvyKnife size={24} className='scale-x-[-1]'/>
      </div>

      <div className='flex justify-center'>
        <p className='text-md text-center text-black dark:text-white w-3/4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,which allows designers to consider the form of a webpage.</p>
      </div>

      <Logos />

    </div>
  )
}

export default Categories