import React from 'react'

export default function ForgotPassword() {
  return (
    <>
    <section className='w-full mt-5'>
        <div className='max-w-[400px] mx-auto p-10 border border-gray-300 shadow-lg'>
            <h5 className='text-[16px] font-bold py-5'>Reset your password</h5>
            <p className='text-[16px] mb-5'>Enter your email and we'll send you a link to reset your password.</p>
            <form>
                <label className='block py-2'>Email</label>
                <input className='w-[100%] h-10 pl-3 border border-gray-300 outline-none' type='email' placeholder='Enter Your Email' required></input>
                <button className='bg-black hover:bg-gray-700 text-white mt-10 w-full py-2 rounded-lg cursor-pointer' type='submit'>Reset Your password</button>
            </form>
            <p className='mt-5 cursor-pointer'>Don't have an account?</p>
        </div>
    </section>
    </>
  )
}
