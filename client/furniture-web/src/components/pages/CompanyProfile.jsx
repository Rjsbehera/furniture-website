import React, { useRef } from 'react'
import BreadCrumbs from '../common/BreadCrumbs'

export default function CompanyProfile() {
    const formRef=useRef()
    const handleClick=()=>{
        formRef.current.reportValidity()

        }
  return (
    <>
    <BreadCrumbs title={'/companyprofile'} title1={''} />
                  <div className='p-7'>          
                    <form  action="" ref={formRef}>
                   <div className='flex w-[40%_60%] gap-5'>
                     <div>
                        <h1>Category Image</h1>
                        <input className=' h-[200px] border-1 border-gray-400' type="file" name="" id="" required />
                    </div>
                    <div>
                     <label htmlFor="">Name
                            <input className='w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px]' type="text" placeholder='Name' required />
                        </label>
                        <label htmlFor="">Email
                            <input className='w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px]' type="email" placeholder='Name' required />
                        </label>
                        <label htmlFor="">Mobile Number
                            <input className='w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px]' type="tel" placeholder='Name' required />
                        </label>
                    </div>
                   </div>
                   <div className=' mx-auto mt-2'>
                     <h1>Address</h1>
                    <textarea className='border-1 border-gray-400 w-full rounded-[12px] pl-3' name="" rows="4" id="" placeholder='Address' required></textarea>
                 </div>
                 <div className='max-w-[1000px] mx-auto'>
                    <h1>Google Map URL</h1>
                        <textarea className='border-1 border-gray-400 w-full rounded-[12px] pl-3' name="" rows="4" id="" placeholder='Google Map URL' required></textarea>
                </div>
  {/* Hello world */}
               <div className="my-4 p-2 border-2 border-gray-400 border-gray rounded-[6px]">
                 <iframe
                    className="w-full"
                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14310.50203363295!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1741676183003!5m2!1sen!2sin"
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                 />
               </div>

                </form>
                <button className='mt-5 p-3 bg-purple-700 rounded-[8px]' type='button' onClick={handleClick}>Update Company Profile</button>
                </div>
    </>
  )
}

                  

