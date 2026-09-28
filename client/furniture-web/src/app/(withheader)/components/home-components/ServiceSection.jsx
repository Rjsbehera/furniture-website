import React from 'react'
import { IoEarth } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { GoClock } from "react-icons/go";

export default function ServiceSection() {
  return (
    <>
    {/* Service Section */}
        <section className='w-full p-[50px] bg-[#F8F9F9] border-1 border-gray-300 mt-10'>
          <div className="max-w-[1140px] mx-auto grid sm:grid-cols-1 md:grid-cols-3 px-3 gap-10">
        <div className="flex justify-center">
          <div className="">
            <div className="w-18 p-7 mt-7 ml-15 border rounded-[50%]"><IoEarth/></div>
            <div className="mt-5">
              <h3 className='pl-12 text-[18px] font-bold font-rubik'>Free Shipping</h3>
              <p className='py-2 pl-4'>Free shipping on all order</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="single-shipping">
            <div className="w-18 p-7 mt-7 ml-15 border rounded-[50%]"><SiTicktick/></div>
            <div className="mt-5">
              <h3 className='pl-12 text-[18px] font-bold font-rubik'>Money Return</h3>
              <p className='py-2 pl-4'>Back guarantee under 7 days</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="single-shipping">
            <div className="w-18 p-7 mt-7 ml-15 border rounded-[50%]"><GoClock/></div>
            <div className="mt-5">
              <h3 className='pl-12 text-[18px] font-bold font-rubik'>Online Support</h3>
              <p className='py-2 pl-4'>Support online 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
        </section>
    </>
  )
}
