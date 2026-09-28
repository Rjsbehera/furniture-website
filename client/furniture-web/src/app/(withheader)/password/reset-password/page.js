import React from 'react'

export default function ResetPassword() {
  return (
    <>
    <section className='w-full mt-5'>
        <div className='max-w-[400px] mx-auto p-10 border border-gray-300 shadow-lg'>
            <h5 className='text-[16px] font-bold py-5'>Change password</h5>
            <form>
                <label className='block py-2'>Your Email</label>
                <input className='w-[100%] h-10 pl-3 border border-gray-300 outline-none' type='email' placeholder='Enter Your Email' required></input>
                <label className='block py-2'>New password</label>
                <input className='w-[100%] h-10 pl-3 border border-gray-300 outline-none' type='password' placeholder='Enter Your New password' required></input>
                <label className='block py-2'>Confirm password</label>
                <input className='w-[100%] h-10 pl-3 border border-gray-300 outline-none' type='password' placeholder='Enter Your Confirm password' required></input>
                <div className='flex gap-2 pt-2'>
                    <input className='' type='checkbox'></input>
                    <p className='text-[14px]'>I accept the Term & Condition</p>
                </div>
                <button className='bg-blue-500 hover:bg-gray-700 text-white mt-5 w-full py-2 rounded-lg cursor-pointer' type='submit'>Reset Your password</button>
            </form>
        </div>
    </section>
    </>
  )
}
