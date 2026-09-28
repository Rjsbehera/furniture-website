import React, { useState,useRef } from 'react'
import BreadCrumbs from '../common/BreadCrumbs'
import { FaMobile } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router';

export default function Profile() {
const [activeTab,setactiveTab]=useState("profile")
 const formRef=useRef()
    const handleClick=()=>{
        formRef.current.reportValidity()


    }
  return (
    <>
    <BreadCrumbs title={'/profile'} title1={''} />
    <section className=' max-w-[1100px] mx-auto grid grid-cols-[30%_70%] gap-5 mt-10'>
        <div className='shadow-lg h-[310px] grid grid-rows-2 gap-5'>
            <figure className='grid grid-rows-1 justify-center py-5'>
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/users/59c32aee-61e4-4868-b27c-e9339ab54e9a-1670132624.jpg" alt="" className='rounded-[50%] w-[80px]' />
                <p className='text-center'>Admin</p>
            </figure>
            <article className='bg-gray-200'>               
                    <h1 className='font-bold p-3 '>contact information</h1>
                    <p className='flex items-center gap-2 p-2' ><FaMobile />1234567890</p>
                    <p className='flex items-center gap-2 p-2' ><IoMdMail />xyz@gmail.com</p>
            </article>
        </div>
        <div className='shadow-lg'>
            <div className='w-[700px] mx-auto flex gap-10 border-b-1 border-b-gray-400 mt-10'>
                
                <button onClick={()=>setactiveTab("profile")} className={`text-xl p-1.5 hover:text-purple-700 hover:border-b-4 ${activeTab==="profile" ? "active" : ""}`}>Edit Profile 
                </button> 
                <button onClick={()=>setactiveTab("password")} className={`text-xl p-1.5 hover:text-purple-700 hover:border-b-4 ${activeTab==="password" ? "active" : ""}`}>Change Password
                </button>
                                
            </div>
            {
                activeTab==="profile" &&(
              
                <div className='p-10'> 
                    <form className='flex gap-5 w-[40%_60%]' action="" ref={formRef}>
                       <div>
                         <h1>Choose Image</h1>
                         <input className='w-full h-[236px] border-1 border-gray-400' type="file" name="" id="" required />
                       </div>
                       <div>
                        <label htmlFor="">Name
                            <input className=' w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px] mb-5' type="text" placeholder='Name' required />
                        </label>
                        <label htmlFor="">Email
                            <input className=' w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px] mb-5' type="email" placeholder='Name' required />
                        </label>
                        <label htmlFor="">Mobile Number
                            <input className=' w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px]' type="tel" placeholder='Name' required />
                        </label>
                       </div>
                </form>
                <button className='mt-5 p-3 text-white bg-purple-700 rounded-[8px]' type='button' onClick={handleClick}>Change Password</button>
                </div>
            
                )
            }
            {
                activeTab==="password" &&(
                     <div className='p-10'>
                    <form className='p-5' action="" ref={formRef}>
                        <label htmlFor="">Current Password
                            <input className='block w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px] mb-5' type="password" placeholder='Current Password' required />
                        </label>
                        <label htmlFor="">New Password
                            <input className='block w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px] mb-5' type="password" placeholder='New Password' required />
                        </label>
                        <label htmlFor="">Confirm Password
                            <input className='block w-[100%] h-12 pl-3 border-1 border-gray-500 rounded-[8px]' type="password" placeholder='Confirm Password' required />
                        </label>
                        <button className='mt-5 p-3 text-white bg-purple-700 rounded-[8px]' type='button' onClick={handleClick}>Change Password</button>
                    </form>
            </div>
                )
            }
           
        </div>
    </section>
    </>
  )
}
