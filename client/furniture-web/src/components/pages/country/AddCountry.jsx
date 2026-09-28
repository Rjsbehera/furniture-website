import React, { useRef } from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'

export default function AddCountry() {
   const formRef=useRef()
              const handleClick=()=>{
                  formRef.current.reportValidity()
          
                  }

  return (
    <>
      <BreadCrumbs title={'/country'} title1={'/add country'} />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"> 
          <form action="" ref={formRef}>
              <div className='grid grid-cols-1 gap-[3%]'>
                <div>
                  <label htmlFor="">Category Name 
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 mb-3' type="text" required/>
                  </label>
                  <label htmlFor="">Order 
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 mb-3' type="text" required/>
                  </label>
                </div>
              </div>
              <button type='button' className='mt-5 px-3 py-2 text-white bg-[#7E22CE] rounded-[8px]' onClick={handleClick}>Add Sub Category</button>
          </form>
        </div>
      </div>
    </>
  )
}
