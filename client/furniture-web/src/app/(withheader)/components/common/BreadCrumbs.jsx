"use client";
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'

export default function BreadCrumbs({ title }) {
  return (
    <>
      <div className='py-10'>
        <p className='text-center text-[#242424] text-4xl font-bold font-[700px] font-playfair leading-[48px] capitalize'>{title}</p>
        <div className='flex gap-2 justify-center items-center'>
          <p ><Link href='/'>Home</Link></p>
          <p className='flex justify-center items-center text-[#E0B49F]'><MdKeyboardArrowRight />{title}</p>
        </div>
      </div>
    </>
  )
}
