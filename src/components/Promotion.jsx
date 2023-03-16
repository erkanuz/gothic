import React, {useEffect, useState} from 'react'

import Data from './Data'
import Navbar from './Navbar'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Discount from '../assets/discount.svg'

import { useDispatch } from 'react-redux'
import { ADD, FAVADD } from '../redux/action/action'

import { BsBagFill } from 'react-icons/bs';
import { FiSearch, FiHeart } from 'react-icons/fi';

import Countdown from './Countdown'

const Promotion = () => {
  const [data, setData] = useState(Data);

  useEffect(() => {
    const data = Data.filter(
      (item) => item.pro === "Promotion"
    );
    setData(data);
  },[]);

  const dispatch = useDispatch();

  const send = (i) => {
    dispatch(ADD(i));
  }

  const add = (v) => {
    dispatch(FAVADD(v));
  }

  const [,OpenImage] = useState(false);
  const [img, setImg] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onOpenImage = (src) => {
    setImg(src)
    OpenImage(true)
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-[1440px] min-h-screen mx-auto p-4 pt-20 dark:text-white'>
        <h3 className='text-4xl text-center mb-1'>Promotions</h3>
        <h4 className='text-xl text-center mb-1'>At least 10% promotions for every product in the list</h4>
        <h5 className='text-lg text-center italic mb-4'>Here you can find many special offers on our products, the price will only apply when buying from the <span className="text-red-600">physical store</span></h5>
        <div className='grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 mt-8 mx-2'>
          {data.map((x, id) => (
            <div key={id}>
              <div className='relative items-center justify-center overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] group'>
                <div className='sm:h-72 h-40 sm:w-52 w-40'>
                  <img src={x.image} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='grid absolute top-1/2 gap-2 translate-y-40 group-hover:translate-y-[-50%] duration-700 delay-100 ml-1'>
                  <div onClick={handleOpen}>
                    <div className='h-8 w-8 m-auto inset-0 bg-white dark:bg-black hover:text-[#0ea5e9] rounded-full grid place-content-center cursor-pointer'
                    onClick={() => onOpenImage(x.image)}><FiSearch /></div>
                  </div>
                  <div className='h-8 w-8 m-auto inset-0 bg-white dark:bg-black hover:text-[#db2777] rounded-full grid place-content-center cursor-pointer'
                    onClick={() => add(x)}><FiHeart /></div>
                  <div className='h-8 w-8 m-auto inset-0 bg-white dark:bg-black hover:text-[#22c55e] rounded-full grid place-content-center cursor-pointer'
                    onClick={() => send(x)} ><BsBagFill /></div>
                </div>

                <span className='absolute top-0 left-1/3 h-5 w-16 rounded-b-lg grid place-content-center text-white text-sm bg-black outline-white outline z-10'>{x.dis}</span>
                
              </div>
              <div className='flex justify-between text-sm'>
                <h4>{x.name}</h4>
                <h4 className='text-red-600'>${(x.price - (x.price * x.dicount)).toFixed(2)}</h4>
              </div>
            </div>
          ))}
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

        <div className='flex sm:flex-row flex-col items-center justify-between mt-10 mx-auto gap-4'>
          <div className='text-4xl'>
            <h4>Limited Offer</h4>
            <h3>get the</h3>
            <h4><span className="text-red-600">Goth Street</span> before it end !</h4>
          </div>
          <Countdown />
          <div className='relative'>
          <div className='h-72 w-72 rounded-full'>
            <img src="https://images.pexels.com/photos/3136649/pexels-photo-3136649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className='w-full h-full object-cover rounded-full'/>
          </div>
          <span className='absolute bottom-3 right-1 h-16 w-16 rounded-full grid text-white text-2xl place-content-center bg-black outline outline-white z-10'>40%</span>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <img src={Discount} alt="" />
        </div>

        <div className='flex items-center justify-center mt-8'>
            <p className='text-sm italic'>&#169; Eric Uz. All rights reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default Promotion