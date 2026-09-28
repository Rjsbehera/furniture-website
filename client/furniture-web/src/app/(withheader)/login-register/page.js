import React from 'react'
import BreadCrumbs from '../components/common/BreadCrumbs'
import Link from 'next/link'

export default function LoginRegister() {
    return (
        <>
            <section className='w-full'>
                <div className='w-[1140px] mx-auto px-3 border-b border-b-gray-200 py-10'>
                    <BreadCrumbs title="My Account" />
                </div>
                <div className='max-w-[1140px] mx-auto px-3 grid grid-cols-2 justify-between gap-5 py-5'>
                    <div className='mt-5'>
                        <h3 className='text-3xl font-playfair py-5'>Login</h3>
                        <form className='border border-gray-300 rounded-[4px] p-5'>
                            <label className='block font-rubik py-2'>Emain*</label>
                            <input type='email' placeholder='Email Address' className='w-full h-10 border border-gray-300 roun requiredded-[2px] pl-5 mb-1 outline-none' required></input>
                            <label className='block font-rubik py-2'>Password*</label>
                            <input type='password' placeholder='Password' className='w-full h-10 border border-gray-300 pl-5 requiredpl-5 outline-none' required></input>
                            <button type='submit' className='bg-[#C09578] hover:bg-black text-white px-5 py-2 ml-[80%] mt-5 mb-5 rounded-xl'><Link href='/mydashboard'>Login</Link></button>
                        </form>
                    </div>
                    <div className='mt-5'>
                        <h3 className='text-3xl font-playfair py-5'>Register</h3>
                        <form className='border border-gray-300 rounded-[4px] p-5'>
                            <label className='block font-rubik py-2'>Name*</label>
                            <input type='text' placeholder='Enter Your Name' className='w-full h-10 border border-gray-300 rounded-[2px] pl-5 mb-1 outline-none' required></input>
                            <label className='block font-rubik py-2'>Emain*</label>
                            <input type='email' placeholder='Email Address' className='w-full h-10 border border-gray-300 rounded-[2px] pl-5 mb-1 outline-none' required></input>
                            <label className='block font-rubik py-2'>Password*</label>
                            <input type='password' placeholder='Password' className='w-full h-10 border border-gray-300 pl-5 outline-none' required></input>
                            <label className='block font-rubik py-2'>Phone*</label>
                            <input type='tel' placeholder='Enter Phone No' className='w-full h-10 border border-gray-300 pl-5 outline-none' required></input>
                            <label className='block font-rubik py-2'>Address*</label>
                            <input type='text' placeholder='Address' className='w-full h-10 border border-gray-300 pl-5 outline-none' required></input>
                            <button type='submit' className='bg-[#C09578] hover:bg-black text-white px-5 py-2 ml-[80%] mt-5 mb-5 rounded-xl'><Link href='/mydashboard'>Register</Link></button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
