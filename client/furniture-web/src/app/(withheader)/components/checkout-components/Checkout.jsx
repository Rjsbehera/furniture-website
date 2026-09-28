"use client"
import React, { useState } from 'react'

export default function Checkout() {
  let [differentAddress, setDifferentAddress] = useState(false)
  return (
    <>
      <section className='w-full mb-5'>
        <div className='max-w-[1140px] mx-auto py-10'>
          <form action="">
            <div className='w-[50%]'>
              <h3 className='bg-[#212121] text-white font-bold text-[15px] px-3 py-1.5 uppercase'>billing details</h3>
              <div className='w-full'>
                <div className='w-full grid grid-cols-2 justify-between gap-5'>
                  <div>
                    <label className='block text-[13px] py-2'>Name*</label>
                    <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="text" />
                  </div>
                  <div>
                    <label className='block text-[13px] py-2'>Mobile number*</label>
                    <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="tel" />
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='w-full grid grid-cols-2 justify-between gap-5'>
                  <div>
                    <label className='block text-[13px] py-2'>Billing Name*</label>
                    <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="text" />
                  </div>
                  <div>
                    <label className='block text-[13px] py-2'>Billing email*</label>
                    <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="email" />
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <label className='block text-[13px] py-2' htmlFor="">Billing Mobile Number*</label>
                <input className='w-full px-3 py-1 mb-2 rounded-sm border border-gray-200 outline-none required' type="tel" />
              </div>
              <div className='w-full'>
                <label className='block text-[13px] py-2' htmlFor="">Billing Address*</label>
                <input className='w-full px-3 py-1 mb-2 rounded-sm border border-gray-200 outline-none required' type="text" />
              </div>
              <div className='w-full mb-3'>
                <label className='block text-[13px] py-2' htmlFor="">Country*</label>
                <select className='w-full px-3 py-2 border border-gray-200 outline-none' name="" id="">
                  <option value="">select country</option>
                  <option value="">select country</option>
                </select>
              </div>
              <div className='w-full mb-3'>
                <div className='w-full grid grid-cols-2 justify-between gap-5'>
                  <div>
                    <label className='block text-[13px] py-2'>State*</label>
                    <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="text" />
                  </div>
                  <div>
                    <label className='block text-[13px] py-2'>City*</label>
                    <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="tel" />
                  </div>
                </div>
              </div>
              <div className=' w-full mt-5'>
                <input type="checkbox" id='mycheckBox' />
                <label htmlFor='mycheckBox' className=' bg-[#212121] text-[15px] text-white p-2 ml-3 mb-5 capitalize cursor-pointer' onClick={() => setDifferentAddress(!differentAddress)}>ship to a different address
                </label >
                {
                  differentAddress &&
                  <div className='w-full'>
                    <div className='w-full grid grid-cols-2 justify-between gap-5'>
                      <div className='w-full'>
                        <label className='block text-[13px] py-2'>Billing Name*</label>
                        <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="text" />
                      </div>
                      <div className='w-full'>
                        <label className='block text-[13px] py-2'>Billing email*</label>
                        <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="email" />
                      </div>
                    </div>
                    <div className='w-full'>
                      <label className='block text-[13px] py-2' htmlFor="">Billing Mobile Number*</label>
                      <input className='w-full px-3 py-1 mb-2 rounded-sm border border-gray-200 outline-none required' type="tel" />
                    </div>
                    <div className='w-full'>
                      <label className='block text-[13px] py-2' htmlFor="">Billing Address*</label>
                      <input className='w-full px-3 py-1 mb-2 rounded-sm border border-gray-200 outline-none required' type="text" />
                    </div>
                    <div className='w-full mb-3'>
                      <label className='block text-[13px] py-2' htmlFor="">Country*</label>
                      <select className='w-full px-3 py-2 border border-gray-200 outline-none' name="" id="">
                        <option value="">select country</option>
                        <option value="">select country</option>
                      </select>
                    </div>
                    <div className='w-full mb-3'>
                      <div className='w-full grid grid-cols-2 justify-between gap-5'>
                        <div>
                          <label className='block text-[13px] py-2'>State*</label>
                          <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="text" />
                        </div>
                        <div>
                          <label className='block text-[13px] py-2'>City*</label>
                          <input className='w-full border border-gray-200 outline-none px-3 py-1 rounded-sm mb-2 required' type="tel" />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
              <div className='w-full mt-5'>
              <h3 className='text-[12px] font-bold pb-1'>Order Notes</h3>
              <textarea className='w-full text-[12px] pl-5 border border-gray-200 resize-none outline-none' rows={'7'} name="" id="" placeholder='Notes about your order e.g. Special notes for delivery'></textarea>
            </div>
            </div>
            <div className='w-[50%]'>
            <h3 className='bg-[#212121] text-white font-bold text-[15px] px-3 py-1.5 uppercase'>your order</h3>
            <div className='w-full mt-2'>
              <table className='w-full'>
                <thead className='w-full'>
                  <tr className='w-full bg-[#F2F2F2] grid grid-cols-2 justify-around items-center'>
                    <th className='text-[13px] py-2.5'>Product</th>
                    <th className='text-[13px] py-2.5'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='w-full grid grid-cols-2 justify-around items-center'>
                    <td className='text-center py-2 border border-gray-200'>Calina Swing Jhula × 1</td>
                    <td className='text-center py-2 border border-gray-200'>Rs. 58,000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className='w-full grid grid-cols-2 justify-around items-center border-b border-b-gray-200'>
                    <th className='text-[14px]'>Cart Subtotal	</th>
                    <td className='text-center text-[14px] py-3'>Rs. 60,300</td>
                  </tr>
                  <tr className='w-full grid grid-cols-2 justify-around items-center border-b border-b-gray-200'>
                    <th className='text-[14px]'>Discount (-)</th>
                    <td className='text-center text-[14px] py-3'>Rs. 0</td>
                  </tr>
                  <tr className='w-full grid grid-cols-2 justify-around items-center border-b border-b-gray-200'>
                    <th className='text-[14px]'>Order Total</th>
                    <td className='text-center text-[14px] py-3'>Rs. 60,300</td>
                  </tr>
                </tfoot>
              </table>
              <button className='bg-[#C09578] text-[15px] text-white font-bold px-3 py-1.5 rounded-sm mt-10 cursor-pointer' type='submit'>Placed Order</button>
            </div>
          </div>
          </form>
        </div>
      </section>
    </>
  )
}
