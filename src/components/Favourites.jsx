import React from 'react'
import Navbar from './Navbar'

import first from '../assets/secound.svg'

import { useDispatch, useSelector } from 'react-redux'

import { FAVDLT } from '../redux/action/action'
import { toast } from 'react-toastify';

import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const getdata = useSelector((state) => state.usereducer.carts);
  const dispatch = useDispatch();

  const DLTF = (id) => {
    dispatch(FAVDLT(id));
    toast.error("Product has been removed from favourites", {
      position: 'top-right', pauseOnHover: false, closeOnClick: true,
  });
  }
  return (
    <div>
    <Navbar />
    <div className='max-w-[1440px] min-h-screen mx-auto px-4 pt-20 dark:text-white'>
      <h3 className='text-4xl text-center mb-1'>Favourites</h3>
      <h5 className='text-center italic mb-4'>This is your personal favourite products, it's will show to you like a gallery</h5>
      { getdata.length ? 
      <div className='sm:columns-4 columns-2 gap-3 max-w-[1200px] min-w-[350px] mx-auto space-y-3 pb-28'>
        {getdata.map((xim,id) => (
          <div key={id}>
            <div className='relative items-center justify-center overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] group hover:scale-105 transition'>
              <div>
                <img src={xim.image} alt="" />
              </div>

              <div className='grid absolute sm:top-1/2 top-1/2 sm:left-[45%] left-[40%] sm:translate-y-[150%]'>
                <div className='h-8 w-8 m-auto inset-0 bg-white dark:bg-black hover:text-[#c83a54] rounded-full grid place-content-center cursor-pointer'
                onClick={() => {DLTF(xim.id)}}><FaTrashAlt /></div>
              </div>
            </div>
          </div>
          )
        )}
      </div>
      : <div className='flex flex-col items-center justify-center my-8'>
        <img src={first} alt="" className='mb-2' />
          <div className='text-center'>
            To create a gallery of your favorites, you must first like products by pressing the heart icon on the product
            <span className='text-red-600 ml-1'><Link to={"/"}>go to products list</Link></span>
          </div>
        </div>
      }
      <div className='flex items-center justify-center mt-8'>
          <p className='text-sm italic'>&#169; Eric Uz. All rights reserved.</p>
      </div>
    </div>
  </div>
  )
}

export default Favourites