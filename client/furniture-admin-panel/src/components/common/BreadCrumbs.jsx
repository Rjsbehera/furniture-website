import React from 'react'

export default function BreadCrumbs({title,title1}) {
  return (
    <div className='font-bold text-gray-800 mt-2 border-b-1 pb-2 px-5'>
     <button className='mr-2 cursor-pointer hover:text-blue-500'>Home</button>
     <button className='mr-2 cursor-pointer hover:text-blue-500'>{title}{title1}</button>
    </div>
  )
}
