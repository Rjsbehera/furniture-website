"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

export default function BannerSlider() {
  return (
    <>
       <section className='w-full mx-auto'>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true, }}
          slidesPerView={1}
          loop
          effect={'fade'}
        // autoplay={{delay:1000,
        //   disableOnInteraction:true,
        // }} 
        >
          <SwiperSlide>
            <div>
                <img className='w-full' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
                <img className='w-full' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
           <div>
            <img className='w-full' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="" />
           </div>
          </SwiperSlide>

        </Swiper>
      </section>
    </>
  )
}
