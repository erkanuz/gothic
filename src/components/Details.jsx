import React, { useEffect, useState } from 'react'

import { Divider } from '@mui/material'

import { BiGitCompare } from 'react-icons/bi'
import { GiPentagramRose } from 'react-icons/gi'
import { MdOutlineAddShoppingCart, MdFavorite } from 'react-icons/md'

import { useDispatch, useSelector } from 'react-redux';
import { ADD, DELETE, REMOVE } from '../redux/action/action'

import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from 'swiper'

const Details = () => {
  const [a, b] = useState([]);
    const {id} = useParams();
    const getdata = useSelector((state) => state.cartreducer.carts);
    const dispatch = useDispatch();

    const compare = () => {
      let comparedata = getdata.filter((e) => {
        return e.id.toString() === id.toString()
      });
      b(comparedata);
    }

    //Add
    const send = (i) => {
      dispatch(ADD(i));
    }

    //Delete
    const remove = (item) => {
      dispatch(DELETE(item));
    }
  
    const DLT = (id) => {
      dispatch(REMOVE(id));
    }

    useEffect(() => {
      compare();
      //eslint-disable-next-line
    },[id])
     
  return (
    <div>
      <Navbar />
      <div className='max-w-[1400px] min-h-screen mx-auto p-4'>
        <div className='pt-[60px] italic text-center text-2xl'>
          <h2 className='mb-4 dark:text-white'>Details</h2>
        </div>
      {
        a.map((item, id) => {
          return(
            <div key={id}>
              <div className='grid sm:grid-cols-3 justify-items-center sm:justify-items-start dark:text-white'>

                <div className='mt-4 p-8 sm:block hidden'>
                  <p className='mb-4'>COMPOSITION, CARE & <br></br>ORIGIN</p>
                  <p className='mb-4'>COMPOSITION</p>
                  <p className='mb-4 text-justify text-sm'>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.</p>
                  <p className='mb-4 text-justify text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                
                  <div className='mb-3'>
                    <h2 className='mb-1 uppercase'>About the product</h2>
                    <Divider className='dark:bg-white' />
                  </div>

                  { item.more && item.more.map( x => {
                    return(
                      <div className='text-sm text-[#6b7280] leading-6 mb-4' key={id}>
                      <p>Brand: {x.brand}</p>
                      <p>Material: {x.material}</p>
                      <p>Product Type: {x.type}</p>
                      <p>Tag: {x.tag}</p>
                    </div>
                    )
                  })}

                  <div className='flex justify-center items-center mt-10 dark:text-red-600'>
                    <GiPentagramRose size={150} className="animate-spin hover:animate-none"/>
                  </div>
                </div>

                <div className='max-h-[700px] sm:w-[450px] w-[300px] relative'>
                  <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                  { item.images && item.images.map( (y, ix) => {
                    return (
                      <div key={ix}>
                        <SwiperSlide><img src={y.i} alt="" className='sm:h-[700px] h-[200px] w-full object-cover contrast-125'  /></SwiperSlide>
                        <SwiperSlide><img src={y.ii} alt="" className='sm:h-[700px] h-[200px] w-full object-cover contrast-125'  /></SwiperSlide>
                      </div>
                    )
                  })}
                  </Swiper>
                </div>

                <div className='p-8'>
                  <p className='text-2xl mt-4 sm:mt-0'>{item.name}</p>
                  <p className='text-[#38bdf8] my-4'>$ {item.price}</p>
                  <p className='text-justify text-sm sm:text-md'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,which allows designers to consider the form of a webpage</p>
                  
                  <div className='flex items-center my-6'>
                    <button className='flex items-center justify-center w-8 h-8 bg-black text-white rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                      onClick={item.quantity <= 1 ? () => DLT(item.id) : () => remove(item)}>-</button>
                    <span className='inline-block text-md w-9 text-center'>{item.quantity}</span>
                    <button className='flex items-center justify-center w-8 h-8 bg-black text-white rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                      onClick={() => send(item)}>+</button>
                  </div>
                  
                  <button className='flex items-center justify-center rounded-none w-[200px] gap-2 bg-black text-white' onClick={() => send(item)}><MdOutlineAddShoppingCart size={20}/>ADD TO CART</button>

                  <div className='flex items-center gap-4 my-8 text-[#38bdf8] text-sm sm:text-md'>
                    <p className='flex items-center gap-2 cursor-pointer'><MdFavorite />ADD TO WISH LIST</p>
                    <p className='flex items-center gap-2 cursor-pointer'><BiGitCompare />ADD TO COMPARE</p>
                  </div>

                  <div className='mb-3 block sm:hidden'>
                    <h2 className='mb-1 uppercase'>About the product</h2>
                    <Divider className='dark:bg-white' />
                  </div>
                  
                  <div className='block sm:hidden'>
                    { item.more && item.more.map( x => {
                    return(
                      <div className='text-sm text-[#6b7280] leading-6 mb-4' key={id}>
                        <p>Brand: {x.brand}</p>
                        <p>Material: {x.material}</p>
                        <p>Product Type: {x.type}</p>
                        <p>Tag: {x.tag}</p>
                      </div>
                    )
                  })}
                  </div>

                  <Divider className='dark:bg-white' />

                  <div className='grid text-sm mt-4 gap-2 text-[#6b7280] w-[200px]'>
                    <p>DESCRIPTION</p>
                    <Divider className='dark:bg-slate-300' />
                    <p>ADDITIONAL INFORMATION</p>
                    <Divider className='dark:bg-slate-300' />
                    <p>FAQ</p>
                  </div>

                </div>

              </div>
            </div>
          )
        })
      }
        <div className='grid grid-cols-4 justify-items-center mt-4 dark:text-white'>
          <div className='grid sm:text-sm text-xs leading-6'>
            <h4 className='sm:text-xl text-base mb-1'>Categories</h4>
            <span className='footerline'>
              <Link to={'/Mens'}>
              Men
              </Link>
            </span>
            <span className='footerline'>
              <Link to={'/Womens'}>
              Women
              </Link>
            </span>
            <span className='footerline'>
              <Link to={'/Accessories'}>
              Accessories
              </Link>
            </span>
          </div>
          <div className='grid sm:text-sm text-xs leading-6'>
            <h4 className='sm:text-xl text-base mb-1'>Links</h4>
            <span className='footerline'>FAQ</span>
            <span className='footerline'>News</span>
            <span className='footerline'>Support Center</span>
          </div>
          <div className='grid sm:text-sm text-xs leading-6'>
            <h4 className='sm:text-xl text-base mb-1'>About</h4>
            <span className='footerline'>
              <Link to={"/About"}>
              About Us
              </Link>
            </span>
            <span className='footerline'>About Rules</span>
            <span className='footerline'>About Products</span>
          </div>
          <div className='grid sm:text-sm text-xs leading-6'>
            <h4 className='sm:text-xl text-base mb-1'>Contact</h4>
            <span className='footerline'><a href="https://github.com/erkanuz" target="_blank" rel='noopener noreferrer'>Gihthub</a></span>
            <span className='footerline'><a href="https://www.linkedin.com/in/erkan-uz-lil/" target="_blank" rel="noopener noreferrer">Linkedin</a></span>
            <span className='footerline'><a href="https://www.instagram.com/" target="_blank" rel='noopener noreferrer'>Instagram</a></span>
          </div>
        </div>

        <div className='flex items-center justify-center mt-8 dark:text-white'>
            <p className='text-sm italic'>&#169; Eric Uz. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Details