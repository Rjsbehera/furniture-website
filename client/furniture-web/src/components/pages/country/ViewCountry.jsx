import React from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'
import { IoIosFunnel } from "react-icons/io";
import { BiPencil } from "react-icons/bi";

const countries = [
  { id:1, name: 'India', code: 'IN', status: 'Active' },
  { id:2, name: 'United States', code: 'US', status: 'Active' },
  
]

export default function ViewCountry() {
  return (
    <>
      <BreadCrumbs title={'/country'} title1={'/view country'} />

      <div className='max-w-full mx-auto border-2 border-slate-100 mt-5 py5'>
              <div className='bg-slate-100 flex justify-between items-center border-b-1 border-slate-100 px-5'>
                <div>
                  <h1 className='text-2xl font-bold'>View User</h1>
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
                <th className='text-left py-3'>Country Name</th>
                <th className='text-left py-3'>	Code</th>
                <th className='text-left py-3'>Status</th>
                <th className='text-left py-3'>Action</th>
                 </tr>
               </thead>
               <tbody>
                {
                  countries.map((countrie)=>(
                    <tr key={countrie.id} className='hover:bg-gray-50'>
                  <td className='py-4 text-center'>
                    <input type="checkbox" />
                  </td>
                  <td>{countrie.name}</td>
                  <td>{countrie.code}</td>
                  <td><span className={`px-3 py-1 rounded-full text-sm text-white ${countrie.status==="Active"?"bg-green-500":"bg-red-500"}`}>{countrie.status}</span></td>
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
