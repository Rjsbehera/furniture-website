import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

export default function CartDetails() {
  return (
    <>
      {/* cart details */}
      <section className='w-full mt-10 mb-15'>
        <div className='max-w-[1140px] mx-auto px-3'>
          <div className='w-full'>
            <div className='w-full'>
              <table className='w-full'>
                <thead>
                  <tr className='bg-[#F2F2F2] flex justify-around items-center py-2 border-b-2 border-b-[#C09578]'>
                    <th>Delete</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <CartDetailsCart/>
                </tbody>
              </table>
              <div className='max-w-[1140px] mx-auto px-3 flex justify-end border border-gray-200 p-2.5'>
                <button className='bg-[#212121] text-white text-[11px] font-bold p-2 rounded-sm hover:bg-[#C09578] uppercase cursor-pointer' type='submit'>update cart</button>
              </div>
            </div>
            {/* coupon section */}
            <div className='max-w-[1140px] mx-auto grid grid-cols-2 justify-between gap-5 mt-15'>
              <div className='w-full border border-gray-200'>
                <h3 className='w-full bg-[#212121] text-[15px] text-white px-5 py-2 uppercase'>Coupon</h3>
                <p className='text-[12px] px-5 py-3 mb-2'>Enter your coupon code if you have one.</p>
                <div className='px-5 mb-5'>
                  <input className='px-5 py-2 text-[12px] outline-none border border-gray-200' type="text" placeholder='Coupon Code' />
                  <button className='bg-[#212121] text-[11px] text-white font-bold px-3 py-2 ml-5 rounded-sm hover:bg-[#C09578] uppercase cursor-pointer'>apply coupon</button>
                </div>
              </div>
              <div className='w-full'>
                <h3 className='w-full bg-[#212121] text-[15px] text-white px-5 py-2 uppercase'>Cart Totals</h3>
                <div className='p-5 border border-gray-200'>
                  <div className='flex justify-between'>
                    <p className='text-[13px] font-bold py-2'>Subtotal</p>
                    <p className='font-bold'>Rs. 58,000</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-[13px] font-bold py-2'>Discount (-)</p>
                    <p className='font-bold'>Rs. 0</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-[13px] font-bold py-2'>Total</p>
                    <p className='font-bold'>Rs. 58,000</p>
                  </div>
                  <div className='flex justify-end'>
                    <button className='bg-[#C09578] text-[13px] text-white font-bold px-3 py-2 mt-2.5 rounded-sm hover:bg-[#212121] cursor-pointer'>Proceed To Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


function CartDetailsCart() {
  return (
    <tr className='w-full flex justify-evenly items-center border border-gray-200'>
      <td className='text-xl text-[#C09578] cursor-pointer'><RiDeleteBin5Line /></td>
      <td className='max-w-[180px] p-[10px]'><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg" alt="" /></td>
      <td className='text-[14px]'>Calina Swing Jhula</td>
      <td className='text-[15px] font-bold'>Rs. 58,000</td>
      <td className='text-[14px]'>
        <label htmlFor="">Quantity</label>
        <input className='max-w-[40px] ml-2 pl-2 outline-none border border-gray-200' type="number" min={'0'} max={'100'} value={'1'} />
      </td>
      <td className='text-[15px] font-bold'>Rs. 58,000</td>
    </tr>
  )
}