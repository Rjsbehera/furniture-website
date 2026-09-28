"use client"
import ProductCart from '@/app/card/ProductCart'
import React from 'react'

export default function ProductTab({PruductList}) {
  return (
    <>
    <section className='py-15 bg-yellow-100'>
        <h2 className='text-center text-3xl font-bold'>Our Products</h2>
        <div className='max-w-[1140px] mx-auto grid grid-cols-4 gap-5 px-3 mt-5'>
            {
                PruductList.map( (obj,index) => <ProductCart key={index} ProductData={obj}/>)
            }
            
        </div>
    </section>
    </>
  )
}
