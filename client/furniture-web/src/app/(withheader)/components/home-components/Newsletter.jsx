"use client"
import React from 'react'

export default function Newsletter() {
  return (
    <>
    {/* Newsletter Section */}
    {/* <section className='bg-[#F8F9F9] w-full py-17'>
        <div className='max-w-[1140px] mx-auto px-3'>
            <h2 className='text-[#242424] text-[24px] text-center font-[700px] leading-[32px] capitalize'>Our Newsletter</h2> 
        </div>
    </section> */}


      <section className='w-full bg-[#F8F9F9] py-[70px] border-b border-b-gray-200'>
        <div className='max-w-[1140px] mx-auto px-3'>
          <h2 className='text-[#242424] text-[24px] text-center font-bold font-playfair font-[700px] leading-[32px] capitalize'>Our Newsletter</h2> 
          <p className=' text-center font-rubik leading-[26px] py-2 mb-9'>Get E-mail updates about our latest shop and special offers.</p>
          <div className='max-w-[690px] mx-auto flex justify-center items-center'>
            <input className='flex-1 px-3 py-[10px]  border-1 border-gray-200 rounded-[4px] outline-none' type="email" placeholder='Email address...'/>
            <button className='bg-[#C09578] text-center text-4 text-white font-normal px-7 sm:px-15 py-3 rounded-[4px] transition-transform duration-500 ease-in-out hover:bg-black'>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}
