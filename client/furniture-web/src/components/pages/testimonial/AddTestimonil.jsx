import React, { useRef } from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'

export default function AddTestimonil() {
  const formRef=useRef()
            const handleClick=()=>{
                formRef.current.reportValidity()
        
                }

  return (
    <>
      <BreadCrumbs title={'/testimonial'} title1={'/add testimonial'} />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"> 
          <form action="" ref={formRef}>
             <div>
              <h1>Choose Image</h1>
              <div className='grid grid-cols-[35%_60%] gap-[3%]'>
                <div className='border border-slate-200 h-[250px]'>
                  <input type="file" required/>
                </div>
                <div>
                  <label htmlFor="">Name 
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 mb-3' type="number" required/>
                  </label>
                  <label htmlFor="">Designation 
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 mb-3' type="number" required/>
                  </label>
                  <label htmlFor="">Rating 
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 mb-3' type="number" required/>
                  </label>
                  <label htmlFor="">Order 
                    <input className='border border-slate-200 rounded-[8px] w-full h-10 mb-3' type="text" required/>
                  </label>
                  <label htmlFor="">Message 
                    <textarea className='border border-slate-200 rounded-[8px] w-full mb-3' name="" id="" rows="4" required></textarea>
                  </label>
                </div>
              </div>
              <button type='button' className='mt-5 px-3 py-2 text-white bg-[#7E22CE] rounded-[8px]' onClick={handleClick}>Add Sub Category</button>
             </div>
          </form>
        </div>
      </div>
    </>
  )
}
