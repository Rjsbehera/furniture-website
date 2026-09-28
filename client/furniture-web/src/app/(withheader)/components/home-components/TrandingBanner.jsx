import Link from 'next/link'
import React from 'react'


export default function TrandingBanner() {
    return (
        <>
            {/* Tranding Banner Section */}
            <section className='w-full'>
                <div className='relative'>
                    <figure className=''>
                        <img className='w-full h-[510px]' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg" alt="" />
                        <div className='absolute top-40 left-10 sm:left-20 md:left-30 xl:left-40 sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] px-3 mx-auto transition-transform duration-300 hover:scale-105'>
                            <h1 className='text-[36px] md:text-[40px] lg:text-[44px] xl:text-[50px] text-[#242424] font-[700px] leading-[65px] mb-[10px] capitalize'>New Trending Collection</h1>
                            <span className='block text-[#5a5a5a] text-[12px] sm:text-[14px] lg:text-[16px]'>We Believe That Good Design is Always in Season</span>
                            <p className='inline-block text-[11px] md:text-[13px] text-[#c09578] font-normal leading-[46px] mt-[70px] px-[32px] md:px-[36px] lg:px-[45px] border-2 border-[#c09578] rounded-[3px] hover:text-white hover:bg-[#c09578] uppercase'><Link href='/tranding-collections'>shopping now</Link></p>
                        </div>
                    </figure>
                </div>
            </section>
        </>
    )
}
