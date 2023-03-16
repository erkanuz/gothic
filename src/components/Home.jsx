import React from 'react'

import {GiChewedSkull} from 'react-icons/gi'

const Home = () => {
  
  return (
      <div className='max-w-[1400px] mx-auto p-4'>
          <div className='max-h-[500px] relative mt-16'>
              <img className='w-full max-h-[500px] object-cover contrast-125'
                  src="https://images.pexels.com/photos/3325372/pexels-photo-3325372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>

          <div className='px-8 text-black dark:text-white'>
            <h3 className='text-center text-2xl my-4'>Lorem Impuls is something awesome</h3>
            <p className='text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,which allows designers to consider the form of a webpage</p>
          </div>

          <div className='md:flex flex-row justify-evenly mt-4 mx-auto'>

            <div className='bg-black dark:bg-white text-white dark:text-black p-8 mb-4 shadow-[0_7px_2px_-1px_#E73535,0_16px_2px_-4px_#39a2db] h-[180px] md:w-[400px] sm:w-[200px]'>
                <h3 className='text-center text-xl mb-4'>Lorem Impuls</h3>
                <p className='text-justify text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
            </div>

            <div className='grid grid-cols-3 grid-flow-col justify-items-center items-center md:w-[400px] sm:w-[200px] p-16 sm:p-0 text-black dark:text-white'>
                <GiChewedSkull size={64} className="rotate-[-60deg] skull1"/>
                <GiChewedSkull size={64} className="rotate-[-120deg] skull2"/>
                <GiChewedSkull size={64} className="row-span-2 animate-bounce"/>
                <GiChewedSkull size={64} className="rotate-[60deg] skull3"/>
                <GiChewedSkull size={64} className="rotate-[120deg] skull4"/>
            </div>

            <div className='bg-black dark:bg-white text-white dark:text-black p-8 shadow-[0_7px_2px_-1px_#E73535,0_16px_2px_-4px_#39a2db] h-[180px] md:w-[400px] sm:w-[200px]'>
                <h3 className='text-center text-xl mb-4'>Lorem Impuls</h3>
                <p className='text-justify text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
            </div>

          </div>
      </div>
  )
}

export default Home