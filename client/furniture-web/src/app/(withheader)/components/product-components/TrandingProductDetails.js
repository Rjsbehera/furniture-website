import React from 'react'

export default function TrandingProductDetails() {
  return (
    <>
    <section className='w-full py-10'>
        <div className='max-w-[1140px] mx-auto px-3 grid grid-cols-2 gap-10'>
            <figure>
                <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg' alt='' />
            </figure>
            <article>
                <h2 className='mb-5'>Caroline Study Tables</h2>
                <p className='mb-10'>Rs. 2,500</p>
                <p className='py-5 border-b border-b-gray-200'>The Drawer is for your storage needs and camouflages perfectly with the tables carved front. The use of Sheesham ensures its longevity.</p>
                <button className='bg-[#C09578] text-white px-15 py-3 mt-10 rounded-sm'>Add to Cart</button>
            </article>
        </div>
    </section>
    </>
  )
}
