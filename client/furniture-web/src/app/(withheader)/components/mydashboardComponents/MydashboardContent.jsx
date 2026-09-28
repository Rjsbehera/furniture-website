"use client"
import React, { useState } from 'react'
import Link from 'next/link'



export default function MydashboardContent() {
  let [openmenu, setOpenmenu] = useState("0")

  return (
    <>
      <section className='w-full py-10'>
        <div className='max-w-[1140px] mx-auto grid grid-cols-[23%_75%] gap-[2%]'>
          {/* Menu */}
          <ul>
            <li className={`bg-black text-white text-[15px] w-full pl-5 py-2 mb-1 rounded-sm hover:bg-[#C09578] capitalize cursor-pointer`} onClick={() => setOpenmenu("0")}>my dashboard</li>
            <li className={`bg-black text-white text-[15px] w-full pl-5 py-2 mb-1 rounded-sm hover:bg-[#C09578] capitalize cursor-pointer`} onClick={() => setOpenmenu("1")}>orders</li>
            <li className='bg-black text-white text-[15px] w-full pl-5 py-2 mb-1 rounded-sm hover:bg-[#C09578] capitalize cursor-pointer' onClick={() => setOpenmenu("2")}>address</li>
            <li className='bg-black text-white text-[15px] w-full pl-5 py-2 mb-1 rounded-sm hover:bg-[#C09578] capitalize cursor-pointer' onClick={() => setOpenmenu("3")}>my profile</li>
            <li className='bg-black text-white text-[15px] w-full pl-5 py-2 mb-1 rounded-sm hover:bg-[#C09578] capitalize cursor-pointer' onClick={() => setOpenmenu("4")}>change password</li>
            <li className='bg-black text-white text-[15px] w-full pl-5 py-2 mb-1 rounded-sm hover:bg-[#C09578] capitalize cursor-pointer'><Link href='/'>logout</Link></li>
          </ul>
          {/* Details */}
          {
            openmenu == 0 &&
            <div className='w-full'>
              <h2 className='text-[20px] font-bold'>My Dashboard</h2>
              <p className='text-[15px] py-5'>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
            </div>
          }
          {
            openmenu == 1 &&
            <div className='w-full'>
              <h2 className='text-[20px] font-bold'>Orders</h2>
              <div className='w-full'>
                <table className='w-full'>
                  <thead className='w-full bg-[#F2F2F2]'>
                    <th className='flex justify-between items-center border-b'>
                      <td className='w-full mx-auto text-[15px] p-2'>Order</td>
                      <td className='w-full mx-auto text-[15px] p-2'>Date</td>
                      <td className='w-full mx-auto text-[15px] p-2'>Status</td>
                      <td className='w-full mx-auto text-[15px] p-2'>Total</td>
                      <td className='w-full mx-auto text-[15px] p-2'>Actions</td>
                    </th>
                  </thead>
                  <tbody className='w-full'>
                    <tr className='w-full flex justify-between items-center'>
                      <td className='w-full text-center border border-gray-200 py-2'>1</td>
                      <td className='w-full text-center border border-gray-200 py-2'>May 10,2018</td>
                      <td className='w-full text-center border border-gray-200 py-2'>Completed</td>
                      <td className='w-full text-center border border-gray-200 py-2'>Rs. 25.00 for 1 item</td>
                      <td className='w-full text-center text-[#C09578] border border-gray-200 py-2 cursor-pointer'><Link href='/order-details'>view</Link></td>
                    </tr>
                    <tr className='w-full flex justify-between items-center'>
                      <td className='w-full text-center border border-gray-200 py-2'>2</td>
                      <td className='w-full text-center border border-gray-200 py-2'>May 10,2018</td>
                      <td className='w-full text-center border border-gray-200 py-2'>Processing</td>
                      <td className='w-full text-center border border-gray-200 py-2'>Rs. 17.00 for 1 item</td>
                      <td className='w-full text-center text-[#C09578] border border-gray-200 py-2 cursor-pointer'><Link href='/order-details'>view</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          }
          {
            openmenu == 2 &&
            <div className='w-full'>
              <h2 className='text-[20px] font-bold'>Address</h2>
              <p className='text-[15px] py-5'>From your Address .</p>
            </div>
          }
          {
            openmenu == 3 &&
            <div className='w-full'>
              <h2 className='text-[20px] font-bold'>My Profile</h2>
              <div className='w-full border border-gray-200 rounded-sm p-5'>
                <form>
                  <div className='flex gap-2 mb-5'>
                    <input type="radio" name='title' value="Mr." />Mr.
                    <input type="radio" name='title' value="Mrs." />Mrs.
                  </div>
                  <label className='block mb-2 hover:text-[#C09578]' htmlFor="">Name*</label>
                  <input className='w-full h-10 border border-gray-200 rounded-sm outline-none px-5' type="text" required />
                  <label className='block mb-2 mt-5 hover:text-[#C09578]' htmlFor="">Email*</label>
                  <input className='w-full h-10 border border-gray-200 rounded-sm outline-none px-5' type="email" required />
                  <label className='block mb-2 mt-5 hover:text-[#C09578]' htmlFor="">Mobile Number*</label>
                  <input className='w-full h-10 border border-gray-200 rounded-sm outline-none px-5' type="password" required />
                  <label className='block mb-2 mt-5 hover:text-[#C09578]' htmlFor="">Address*</label>
                  <input className='w-full h-10 border border-gray-200 rounded-sm outline-none px-5' type="text" required />
                  <button type='tel' className='bg-[#C09578] text-white px-5 py-1 rounded-2xl mt-10 ml-[88%] cursor-pointer capitalize'>update</button>
                </form>

              </div>
            </div>
          }
          {
            openmenu == 4 &&
            <div className='w-full'>
              <h2 className='text-[20px] font-bold'>Change Password</h2>
              <div className='border border-gray-200 rounded-sm p-5 mt-5'>
                <form>
                  <label className='block mb-2 hover:text-[#C09578]' htmlFor="">Current Password</label>
                  <input className='w-full h-10 border border-gray-200 rounded-sm outline-none px-5' type="password" required />
                  <label className='block mb-2 mt-5 hover:text-[#C09578]' htmlFor="">New Password</label>
                  <input className='w-full h-10 border border-gray-200 rounded-sm outline-none px-5' type="password" required />
                  <label className='block mb-2 mt-5 hover:text-[#C09578]' htmlFor="">Confirm Password</label>
                  <input className='w-full h-10 border border-gray-200 rounded-sm outline-none px-5' type="password" required />
                  <button type='submit' className='bg-[#C09578] text-white px-5 py-1 rounded-2xl mt-10 ml-[78%] cursor-pointer'>Change Password</button>
                </form>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}
