import React from 'react'
import { FaFax } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import BreadCrumbs from '../components/common/BreadCrumbs';



export default function ContancUs() {
    return (
        <>
            <section className='w-full'>
                <div className='w-[1140px] mx-auto px-3 py-10 border-b border-b-gray-200'>
                    <BreadCrumbs title="Contact Us" />
                </div>
                <iframe className='w-[1140px] h-[450px] px-3 mx-auto py-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.631421124823!2d73.0283626508787!3d26.27362318332549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1ea7d0c7%3A0xf14d81eb1531921c!2sLaxmi%20Kirana%20Store!5e0!3m2!1sen!2sin!4v1580291833220!5m2!1sen!2sin" allowfullscreen=""></iframe>
            </section>
            <section className='w-full h-[700px] mb-[70px]'>
                <div className='w-[1140px] mx-auto px-3 grid grid-cols-2 justify-between gap-5'>
                    <div className=''>
                        <h2 className='text-[#242424] text-[20px] font-bold font-[700px] font-playfair leading-[48px] capitalize border-b border-b-gray-200 py-5'>Contact Us</h2>
                        <p className='flex gap-5 items-center text-[16px] text-gray-800 py-3 border-b border-b-gray-200'><FaFax className='text-[14px]' /> Address : Claritas est etiam processus dynamicus</p>
                        <p className='flex gap-5 items-center text-[16px] text-gray-800 py-3 border-b border-b-gray-200'><BsTelephoneFill className='text-[12px]' /> 98745612330</p>
                        <p className='flex gap-5 items-center text-[16px] text-gray-800 py-3'> <MdOutlineEmail />furniture@gmail.com</p>
                    </div>
                    <form>
                        <h2 className='text-[#242424] text-[20px] font-bold font-[700px] font-playfair leading-[48px] capitalize'>Tell us your question</h2>
                        <label className='block py-3' htmlFor="">Your Name (required)</label>
                        <input className='w-[504px] h-[43px] px-5 border mb-3 border-gray-200 outline-none' type="text" name="" id="" placeholder='Name *' required />
                        <label className='block py-3' htmlFor="">Your Email (required)</label>
                        <input className='w-[504px] h-[43px] px-5 border mb-3 border-gray-200 outline-none' type="email" name="" id="" placeholder='Email *' required />
                        <label className='block py-3' htmlFor="">Your Mobile Number (required)</label>
                        <input className='w-[504px] h-[43px] px-5 border mb-3 border-gray-200 outline-none' type="tell" name="" id="" placeholder='Mobile Number *' required />
                        <label className='block py-3' htmlFor="">Subject</label>
                        <input className='w-[504px] h-[43px] px-5 border mb-3 border-gray-200 outline-none' type="text" name="" id="" placeholder='Subject *' required />
                        <label className='block py-3' htmlFor="">Your Message</label>
                        <textarea className='w-[92%] h-50 border border-gray-200 outline-none p-5' name="" id="" placeholder='Message *' required></textarea>
                        <button className='block bg-black text-white px-7 py-3 rounded-[8px] mt-5' type='submit'>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}
