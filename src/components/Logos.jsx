import React from 'react'

import {FaFirefox, FaPhoenixFramework} from 'react-icons/fa'
import {GiCat} from 'react-icons/gi'
import {SiTailwindcss, SiReact, SiFirebase, SiGithub, SiFigma, SiReactivex, SiGnuicecat, SiDrupal, SiAltiumdesigner, SiWorldhealthorganization} from 'react-icons/si'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Parallax, Pagination, FreeMode, Autoplay } from "swiper";

const marquee = [
    <SiTailwindcss />,<SiReact />,<SiFirebase />,<SiGithub />,<SiFigma />,<GiCat />,<SiReactivex />,<FaFirefox />,<FaPhoenixFramework />,<SiGnuicecat />,<SiDrupal />,<SiAltiumdesigner />,<SiWorldhealthorganization />
];

const Logos = () => {
  return (
    <div className='flex justify-center'>
      <div className='container'>
          <div className='flex justify-center items-center mt-16'>
            <Swiper
            speed={800}
            slidesPerView={6}
            loop={true}
            freeMode={true}
            parallax={true}
            pagination={{
              clickable: false,
            }}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
            modules={[ Parallax, Pagination, FreeMode, Autoplay]}
            className="mySwiper"
            >
              {marquee.map((x, id) => (
                  <SwiperSlide className='text-black dark:text-white sm:text-[62px] text-3xl' key={id}>
                      <div>{x}</div>
                  </SwiperSlide>
              )
              )}
            </Swiper>
          </div>
      </div>
    </div>
  )
}
export default Logos