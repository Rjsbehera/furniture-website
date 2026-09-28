import React from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'
import { IoIosFunnel } from "react-icons/io";
import { BiPencil } from "react-icons/bi";

const testimonials = [
  {
    id:1,
    name: 'Sarah Johnson',
    role: 'Happy Customer',
    rating:5,
    order:1,
    message: 'The quality and design exceeded my expectations. Highly recommended!',
    status: 'Active'
  },
  {
    id:2,
    name: 'Michael Chen',
    role: 'Interior Designer',
    rating:5,
    order:1,
    message: 'Beautiful craftsmanship and excellent service from start to finish.',
    status: 'Active'
  },
  {
    id:3,
    name: 'Alicia Gomez',
    role: 'Homeowner',
    rating:5,
    order:1,
    message: 'The furniture transformed our space completely. We love it!',
    status: 'Inactive'
  }
]

export default function ViewTestimonial() {
  return (
    <>
      <BreadCrumbs title={'/testimonial'} title1={'/view testimonial'} />

       <div className='max-w-full mx-auto border-2 border-slate-100 mt-5 py5'>
              <div className='bg-slate-100 flex justify-between items-center border-b-1 border-slate-100 px-5'>
                <div>
                  <h1 className='text-2xl font-bold'>View Testimonial</h1>
                </div>
      
                <div className=' flex gap-5 p-5 '>
                  <button className='bg-blue-700 text-white p-2 rounded text-2xl'><IoIosFunnel /></button>
                  <button className='px-3 py-2 text-white font-fold bg-[#15803D] rounded-[4px] '>Change Status</button>
                  <button className='px-3 py-2 text-white font-fold bg-[#B91C1C] rounded-[4px]'>Delete</button>
                </div>
              </div>
              <div className='overflow-x-auto'>
              <table className='w-full border-collapse'>
               <thead>
                 <tr className='text-gray-600 text-sm'>
                  <th className='py-3'>
                  <input type="checkbox" />
                </th>
                <th className='text-left py-3'>Name</th>
                <th className='text-left py-3'>Role</th>
                <th className='text-left py-3'>Rating</th>
                <th className='text-left py-3'>Order</th>
                <th className='text-left py-3'>Status</th>
                <th className='text-left py-3'>Action</th>
                 </tr>
               </thead>
               <tbody>
                {
                  testimonials.map((testimonial)=>(
                    <tr key={testimonial.id} className='hover:bg-gray-50'>
                  <td className='py-4 text-center'>
                    <input type="checkbox" />
                  </td>
                  <td>{testimonial.name}</td>
                  <td>{testimonial.role}</td>
                  <td>{testimonial.rating}</td>
                  <td>{testimonial.order}</td>
                  <td><span className={`px-3 py-1 rounded-full text-sm text-white ${testimonial.status==="Active"?"bg-green-500":"bg-red-500"}`}>{testimonial.status}</span></td>
                  <td className='text-center'>
                    <button className='bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600'><BiPencil /></button>
                  </td>
                </tr>
                  ))
                }
               </tbody>
              </table>
              </div>
            </div>
    </>
  )
}
