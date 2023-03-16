import React, { useState } from 'react'
import Data from './Data'

import {BsBagFill} from 'react-icons/bs'
import {FiSearch, FiHeart} from 'react-icons/fi'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useDispatch } from 'react-redux'
import { ADD, FAVADD } from '../redux/action/action'

const Products = () => {
  const [a, b] = useState(Data);

  const [,OpenImage] = useState(false);
  const [img, setImg] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onOpenImage = (src) => {
    setImg(src)
    OpenImage(true)
  }

  const dispatch = useDispatch();

  const send = (i) => {
    dispatch(ADD(i));
  }

  const add = (v) => {
    dispatch(FAVADD(v));
  }

  const e = (u) => {
    b(
        Data.filter((item) => {
            return item.category === u;
        })
    );
  };

  return (
      <div className='max-w-[1400px] mx-auto p-4 text-black dark:text-white'>
          <h1 className='text-4xl text-center font-bold mt-8 mb-2'>GOTHIC CLOTHING</h1>
          <p className='text-xl font-medium text-center zim'>Lorem Impuls is something awesome</p>
          <p className='text-md font-bold text-center mt-6'>Filter Type</p>
          
          <div className='md:flex grid grid-cols-2 place-items-center justify-center gap-8 my-4 text-white dark:text-black'>
              <button className='block relative overflow-hidden text-center w-32 rounded-full' onClick={() => b(Data)}>
                  <span className='text-md italic relative z-10'>All</span>
                  <div className='w-[300px] h-[300px] bg-[#4973ff] shadow-[inset_0_0_50px_rgba(0_0_0_.5)] absolute -top-20 left-0 transition-all liquid'></div>
              </button>
              <button className='block relative overflow-hidden text-center w-32 rounded-full' onClick={() => e('Women')}>
                  <span className='text-md italic relative z-10'>Women</span>
                  <div className='w-[300px] h-[300px] bg-[#4973ff] shadow-[inset_0_0_50px_rgba(0_0_0_.5)] absolute -top-20 left-0 transition-all liquid'></div>
              </button>
              <button className='block relative overflow-hidden text-center w-32 rounded-full' onClick={() => e('Accessories')}>
                  <span className='text-md italic relative z-10'>Accessories</span>
                  <div className='w-[300px] h-[300px] bg-[#4973ff] shadow-[inset_0_0_50px_rgba(0_0_0_.5)] absolute -top-20 left-0 transition-all liquid'></div>
              </button>
              <button className='block relative overflow-hidden text-center w-32 rounded-full' onClick={() => e('Men')}>
                  <span className='text-md italic relative z-10'>Men</span>
                  <div className='w-[300px] h-[300px] bg-[#4973ff] shadow-[inset_0_0_50px_rgba(0_0_0_.5)] absolute -top-20 left-0 transition-all liquid'></div>
              </button>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 place-items-center gap-3 mt-8 mx-2'>
              {a.map((x,id) =>
                    (
                      <div key={id}>
                          <div className='relative items-center justify-center overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] group'>
                              <div className='sm:h-52 h-40 sm:w-52 w-40'>
                                  <img src={x.image} alt="" className='w-full h-full object-cover' />
                              </div>

                              <div className='grid absolute top-1/2 gap-2 translate-y-32 group-hover:translate-y-[-50%] duration-700 delay-100 ml-1'>
                                <div onClick={handleOpen}>
                                  <div className='h-8 w-8 m-auto inset-0 bg-white dark:bg-black hover:text-[#0ea5e9] rounded-full grid place-content-center cursor-pointer' 
                                  onClick={() => onOpenImage(x.image)}><FiSearch /></div>
                                </div>
                                  <div className='h-8 w-8 m-auto inset-0 bg-white dark:bg-black hover:text-[#db2777] rounded-full grid place-content-center cursor-pointer'
                                  onClick={() => add(x)}><FiHeart /></div>
                                  <div className='h-8 w-8 m-auto inset-0 bg-white dark:bg-black hover:text-[#22c55e] rounded-full grid place-content-center cursor-pointer'
                                  onClick={() => send(x)}><BsBagFill /></div>
                              </div>
                          </div>
                          <div className='flex justify-between text-sm'>
                              <h4>{x.name}</h4>
                              <h4>${x.price}</h4>
                          </div>
                      </div>
                    )
                )}
          </div>

          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white border shadow-2xl" >
                  <div className="onClickImage">
                      <img src={img} alt="" className='w-[400px] h-[500px] object-cover' />
                  </div>
              </Box>
          </Modal>
          
      </div>
  )
}

export default Products