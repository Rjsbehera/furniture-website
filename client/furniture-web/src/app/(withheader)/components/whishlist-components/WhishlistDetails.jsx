import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

export default function WhishlistDetails() {
    return (
        <>
            <section className='w-full mt-10 mb-15'>
                <div className='max-w-[1140px] mx-auto px-3'>
                    <WhishlistCart/>
                </div>
            </section>
        </>
    )
}


function WhishlistCart() {
    return (
        <div className='max-w-[1140px] mx-auto px-3'>
            <div className='w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-[#F2F2F2] flex justify-around items-center py-2 border-b-2 border-b-[#C09578]'>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th>Add To Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-full flex justify-evenly items-center border border-gray-200'>
                            <td className='text-xl text-[#C09578] cursor-pointer'><RiDeleteBin5Line /></td>
                            <td className='max-w-[180px] p-[10px]'><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg" alt="" /></td>
                            <td className='text-[14px]'>Calina Swing Jhula</td>
                            <td className='text-[15px] font-bold'>Rs. 58,000</td>
                            <td className='text-[14px]'>Out Of Stock</td>
                            <td className='text-[13px] font-bold'><button className='bg-[#C09578] text-white p-2 rounded-sm hover:bg-[#212121] cursor-pointer'>Add To Cart</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
