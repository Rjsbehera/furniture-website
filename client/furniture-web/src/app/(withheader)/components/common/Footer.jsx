import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <footer className='w-full py-15 border-t border-t-gray-200'>
        <div className='max-w-[1140px] mx-auto px-3 grid grid-cols-4 justify-between pb-10 border-b border-b-gray-200'>
          <div className='w-full'>
            <h3 className='text-xl font-bold mb-5'>Contact Us</h3>
            <p className='text-[14px] py-2'>Address: Claritas est etiam processus dynamicus</p>
            <p className='text-[14px] py-2'>Phone: 98745612330</p>
            <p className='text-[14px]'>Email: furniture@gmail.com</p>
            <div className='flex gap-5 mt-5'>
              <span className='border border-gray-300 rounded-[50%] p-2 text-gray-500'><FaFacebookF/></span>
              <span className='border border-gray-300 rounded-[50%] p-2 text-gray-500'><FaInstagram/></span>
              <span className='border border-gray-300 rounded-[50%] p-2 text-gray-500'><CiTwitter/></span>
              <span className='border border-gray-300 rounded-[50%] p-2 text-gray-500'><IoLogoYoutube/></span>
              <span className='border border-gray-300 rounded-[50%] p-2 text-gray-500'><FaTelegramPlane/></span>
            </div>
          </div>
          <div className='w-full'>
            <h3 className='text-xl font-bold mb-5'>Information</h3>
            <ul>
              <li className='text-[14px] py-2'>About Us</li>
              <li className='text-[14px] py-2'>Contact Us</li>
              <li className='text-[14px]'>Frequently Questions</li>
            </ul>
          </div>
          <div className='w-full'>
            <h3 className='text-xl font-bold mb-5'>My Account</h3>
            <ul>
              <li className='text-[14px] py-2'>My Dashboard</li>
              <li className='text-[14px] py-2'>Wishlist</li>
              <li className='text-[14px] py-2'>Cart</li>
              <li className='text-[14px]'>Checkout</li>
            </ul>
          </div>
          <div className='w-full'>
            <h3 className='text-xl font-bold mb-5'>Top Rated Products</h3>
            <div className='w-full'>
              <div className='grid grid-cols-[30%_65%] gap-[5%] border-b border-b-gray-200'>
                 <figure className=''>
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg" alt="" />
              </figure>
              <article>
                <p className='text-[13px]'>Cabinets and Sideboard</p>
                <h3 className='text-[16px py-2'>Louise Cabinet</h3>
                <div className='pb-2'>
                  <span className='line-through text-[14px]'>Rs. 28,000</span>
                  <span className='text-[#C09578] text-[14px] ml-2'>Rs. 23,000</span>
                </div>
              </article>
              </div>
              <div className='grid grid-cols-[30%_65%] gap-[5%] mt-5'>
                 <figure className=''>
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/07a01f8b-6937-4923-8bab-3d7cce53195b-1782997130.jpg" alt="" />
              </figure>
              <article>
                <p className='text-[13px]'>Nest Of Tables</p>
                <h3 className='text-[16px py-2'>Center Tables</h3>
                <div className='flex gap-2 pb-2'>
                  <span className='line-through text-[14px]'>Rs. 45,000</span>
                  <span className='text-[#C09578] text-[14px] ml-2'> Rs. 25,000</span>
                </div>
              </article>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[1140px] mx-auto px-3 border-b border-b-gray-200 mb-5'>
          <ul className='flex gap-10 justify-center items-center py-3'>
            <li>Home</li>
            <li>Online Store</li>
            <li> Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </div>
        <div className='max-w-[1140px] mx-auto px-3 mb-5'>
          <p className='text-[13px] text-center'>All Rights Reserved By Furniture | © 2026</p>
        </div>
        <div className='max-w-[1140px] mx-auto px-3 flex justify-center'>
          <img className='' src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png" alt="" />
        </div>
      </footer>
    </>
  )
}
