import React from 'react'

export default function Collection() {
  return (
    <>
    {/* Chair Collection Section */}
      <section className='w-full py-10 border-b border-b-gray-200'>
        <div className='sm:w-[500px] md:w-[720px] lg:w-[960px] xl:w-[1140px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto items-center gap-7 px-3 '>
            <div className='relative group overflow-hidden'>
                <img className='transition-transform duration-300 group-hover:scale-110' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                <p className='absolute top-2 left-3 text-[14px] font-rubik p-5'>
              Design Creative</p>
            <h1 className='absolute top-16 left-3 text-2xl font-playfair font-bold pl-5 mt-[-16px]'>Chair Collection</h1>
            </div>
            <div className='relative group overflow-hidden'>
                <img className='transition-transform duration-300 group-hover:scale-110' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp" alt="" />
                <p className='absolute top-2 left-3 text-[14px] font-rubik p-5'>

              Bestselling Products</p>
            <h1 className='absolute top-16 left-3 text-2xl font-playfair font-bold pl-5 mt-[-16px]'>Chair Collection</h1>
            </div>
            <div className='relative group overflow-hidden'>
                <img className='transition-transform duration-300 group-hover:scale-110' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp" alt="" />
                <p className='absolute top-2 left-3 text-[14px] font-rubik p-5'>
                Onsale Products</p>
              <h1 className='absolute top-16 left-3 text-2xl font-playfair font-bold pl-5 mt-[-16px]'>Chair Collection</h1>
            </div>
        </div>
      </section>
    </>
  )
}
