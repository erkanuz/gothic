import React from 'react'
import Spline from '@splinetool/react-spline';

import { Divider } from '@mui/material';
import {GiEvilWings, GiEvilBat} from 'react-icons/gi'

const About = () => {
  return (
      <div className='max-w-[1440px] mx-auto p-4 text-black dark:text-white'>
        <div className='h-screen mb-8'>
        <Spline scene="https://prod.spline.design/MbI08bPrn7Irli1l/scene.splinecode" />
        </div>

        <div className='w-full flex justify-center mb-8' id='#about'>
          <div className='w-1/2 grid gap-4'>
            <Divider className='bg-black dark:bg-white' />
            <Divider className='bg-black dark:bg-white' />
          </div>
        </div>

        <div className='flex justify-center'>

          <div className="h-[200px]">
            <div className="overflow-hidden p-[5px] h-[50px]">
              <div className="cloud_left"></div>
              <div className="cloud_right"></div>
            </div>
            <div className="w-[180px] h-[140px]">
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
            </div>
            <div className="relative w-[180px] h-[140px] -top-[140px]">
              <div className="hit"></div>
              <div className="hit"></div>
              <div className="hit"></div>
              <div className="hit"></div>
              <div className="hit"></div>
            </div>
          </div>

          <div className="h-[200px] scale-x-[-1]">
            <div className="overflow-hidden p-[5px] h-[50px]">
              <div className="cloud_left"></div>
              <div className="cloud_right"></div>
            </div>
            <div className="w-[180px] h-[140px]">
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
            </div>
            <div className="relative w-[180px] h-[140px] -top-[140px]">
              <div className="hit"></div>
              <div className="hit"></div>
              <div className="hit"></div>
              <div className="hit"></div>
              <div className="hit"></div>
            </div>
          </div>
          
        </div>

        <div className="container mx-auto p-4 text-center">
          <h2 className='text-4xl'>ABOUT US</h2>

          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 place-items-center my-12 gap-8'>
            <div className='sm:w-[600px] w-[300px]'><p className='text-justify'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,which allows designers to consider the form of a webpage</p></div>
            <GiEvilWings size={100} />
            <div className='sm:w-[600px] w-[300px]'><p className='text-justify'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,which allows designers to consider the form of a webpage</p></div>
          </div>

          <div className='grid place-items-center'>
            <div className='relative max-w-[1000px] max-h-[400px]'>
              <img src="https://images.pexels.com/photos/37079/milan-pegasus-gallery-statue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-[400px] object-cover hover:scale-110 transition-all'/>
            </div>
          </div>

        </div>

        <div className='grid place-items-center my-12'>
            <h2>ABOUT GOTHIC STYLE</h2>
            <div className="flex justify-center my-6"><GiEvilBat size={100} /></div>

          <div className='grid md:grid-cols-2 xs:grid-cols-1 w-2/4 gap-10 my-10 justify-between'>
              <div className='text-justify'>
              <h3 className='md:text-3xl xs:text-base mb-12'>The best Gothic outfits for you. We provide you the best services.</h3>
                <p className='mb-4'>We offer you the best gothic stlye chlotes and accessories that will never outshine and fully equipped premium product,as well as quality service with our consultants</p>
                <p>We offer you the best gothic stlye chlotes and accessories that will never outshine and fully equipped premium product,as well as quality service with our consultants</p>
              </div>

            <div className='relative sm:w-[400px] w-[200px] about_images'>
              <img src="https://images.pexels.com/photos/4641298/pexels-photo-4641298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
              className='rounded-tr-[40px] rounded-bl-[40px] object-cover drop-shadow-[4px_4px_4px_#00A3FF] dark:drop-shadow-[4px_4px_4px_#b81e30]'/>
              <img src="https://images.pexels.com/photos/10213011/pexels-photo-10213011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
              className='rounded-tr-[40px] rounded-bl-[40px] object-cover drop-shadow-[4px_4px_4px_#00A3FF] dark:drop-shadow-[4px_4px_4px_#b81e30]'/>
            </div>
          </div>

          <div className='grid md:grid-cols-2 xs:grid-cols-1 sm:w-2/4 w-full gap-10'>
            <div className='h-[500px]'>
                <img src="https://images.pexels.com/photos/1524673/pexels-photo-1524673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
                className='rounded-tr-[40px] rounded-bl-[40px] h-full object-cover drop-shadow-[4px_4px_4px_#00A3FF] dark:drop-shadow-[4px_4px_4px_#b81e30]'/>
            </div>

            <div className='text-lg'>
                <h3 className='text-3xl text-start mb-12'>The best Gothic outfits for you. We provide you the best services.</h3>
                <div className='text-justify'>
                <p className='mb-4'>We offer you the best gothic stlye chlotes and accessories that will never outshine and fully equipped premium product,as well as quality service with our consultants</p>
                <p>We offer you the best gothic stlye chlotes and accessories that will never outshine and fully equipped premium product,as well as quality service with our consultants</p>
                </div>
            </div>
          </div>

        </div>

        <div className='flex justify-center h-[400px]'>
        <Spline scene="https://prod.spline.design/Umf0WgqmAL93VM07/scene.splinecode" />
        </div>

        <div id='footer' className='flex items-center justify-center mb-6'>
            <p className='text-sm italic'>&#169; Eric Uz. All rights reserved.</p>
        </div>
      </div>
  )
}

export default About