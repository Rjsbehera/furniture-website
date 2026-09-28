import React from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'
import { IoIosFunnel } from "react-icons/io";
import { BiPencil } from "react-icons/bi";

const sliders = [
  {id:1, name: 'Neil Sims', slug: 'https://packshifts.in/images/iso.png',order:1, status: 'Active' },
  {id:2, name: 'Neil Sims ', slug: 'https://packshifts.in/images/iso.png',order:1, status: 'Active' },
]

export default function ViewSlider() {
  return (
    <>
      <BreadCrumbs title={'/sliders'} title1={'/view slider'} />

     <div className='max-w-full mx-auto border-2 border-slate-100 mt-5 py5'>
             <div className='bg-slate-100 flex justify-between items-center border-b-1 border-slate-100 px-5'>
               <div>
                 <h1 className='text-2xl font-bold'>View Slider</h1>
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
               <th className='text-left py-3'>Image</th>
               <th className='text-left py-3'>order</th>
               <th className='text-left py-3'>Status</th>
               <th className='text-left py-3'>Action</th>
                </tr>
              </thead>
              <tbody>
               {
                 sliders.map((slider)=>(
                   <tr key={slider.id} className='hover:bg-gray-50'>
                 <td className='py-4 text-center'>
                   <input type="checkbox" />
                 </td>
                 <td>{slider.name}</td>
                 <td>{slider.slug}</td>
                 <td>{slider.order}</td>
                 <td><span className={`px-3 py-1 rounded-full text-sm text-white ${slider.status==="Active"?"bg-green-500":"bg-red-500"}`}>{slider.status}</span></td>
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
