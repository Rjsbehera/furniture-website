"use client";
import React from 'react'
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

export default function Testimonial() {
    return (
        <>
            {/* Testimonial */}
            <section className='w-full py-5'>
                <div className='w-full mx-auto'>
                    <h2 className='text-[26px] text-center font-playfair font-bold py-5'>What Our Custumers Say ?</h2>
                    <Swiper
                        className=''
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true, }}
                        slidesPerView={1}
                        loop

                    // autoplay={{delay:3000,
                    //   disableOnInteraction:false,
                    // }}
                    >
                        <SwiperSlide>
                            <div className='sm:w-220 mx-auto h-[380px]'>
                                <p className='text-[17px] text-center text-[#8F8F8F] font-rubik font-normal lead leading-[26px] px-2'>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img className='block mx-auto' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" alt="" />
                                <span className='block text-[14px] text-center py-2 uppercase'>kathy young</span>
                                <span className='block text-[14px] text-center text-[#8F8F8F] py-2'>CEO of sonPark</span>
                                <ul className='flex gap-0.5 py-2 justify-center items-center'>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sm:w-220 mx-auto h-[380px]' >
                                <p className='text-[17px] text-[15px] text-center text-[#8F8F8F] font-rubik font-normal lead leading-[26px] px-2'>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img className='block mx-auto' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" alt="" />
                                <span className='block text-[14px] text-center py-2 uppercase'>kathy young</span>
                                <span className='block text-[14px] text-center text-[#8F8F8F] py-2 '>CEO of sonPark</span>
                                <ul className='flex gap-0.5 py-2 justify-center items-center'>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sm:w-220 mx-auto h-[380px]' >
                                <p className='text-[17px] text-[15px] text-center text-[#8F8F8F] font-rubik font-normal lead leading-[26px] px-2'>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img className='block mx-auto' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" alt="" />
                                <span className='block text-[14px] text-center py-2 uppercase'>kathy young</span>
                                <span className='block text-[14px] text-center text-[#8F8F8F] py-2 '>CEO of sonPark</span>
                                <ul className='flex gap-0.5 py-2 justify-center items-center'>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                    <li className='text-[#C09578] text-[14px]'><FaStar /></li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
