import izitoast from 'izitoast';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import BreadCrumbs from '../../common/BreadCrumbs'

import { SketchPicker } from 'react-color';



export default function AddColor() {
  let { id } = useParams()
  let Navigate = useNavigate()
  const [color, setColor] = useState('#ffffff')
  let [editData, setEditData] = useState(null)
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH
  // console.log(apiBaseUrl)


  let handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      name: e.target.name.value,
      code: e.target.code.value,
      order: e.target.order.value
    }
    if (id) {
      //update
      axios.put(`${apiBaseUrl}color/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/color/viewcolor')
          }
          else {
            izitoast.error({
              title: 'Error',
              message: finalRes.error.name,
              position: 'topRight',
              color: 'red'
            });
          }
        })
    }
    else {
      // console.log(obj)
      axios.post(`${apiBaseUrl}color/create`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.message,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/color/viewcolor')
          }
          else {
            izitoast.error({
              title: 'Error',
              message: finalRes.error.name,
              position: 'topRight',
              color: 'red'
            });
          }
        })
    }
  }

  useEffect(() => {
    if (id) {
      axios.get(`${apiBaseUrl}color/details/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
          setEditData(finalRes.data)
        })
    }
    else {
      setEditData(null)
    }
  }, [id])


  return (
    <>
      <BreadCrumbs title={'/color'} title1={'/add color'} />

      <div className='w-full px-5 py-10'>
        <div className='mx-auto max-w-[1220px'>
          <div className='rounded-t-md border border-slate-400 bg-slate-100 px-3 py-2 text-[20px] font-semibold'>Add Colors</div>
          <form onSubmit={handleSubmit} action="" className='rounded-b-md border border-slate-400 p-4'>
            <div className='mb-5'>
              <label htmlFor="" className='block font-medium text-gray-900'>Color Name</label>
              <input type="text" name='name' defaultValue={editData?.name} className='block w-full rounded-lg border-2 border-gray-300 px-3 py-2.5' placeholder='Enter color name' />
            </div>
            <div className='mb-5'>
              <label htmlFor="" className='block font-medium text-gray-900'>Color Picker</label>
              <div className='flex items-center gap-4'>
                <input type="color" defaultValue={`${id ? 'editData?.name' : '#ff5733'}`} className='h-44 w-56 cursor-pointer rounded-md border border-gray-300 bg-white p-2' color={color} onChange={(e) => setColor(e.target.value)} />
                <div className={'h-12 w-12 rounded-md border border-gray-400 bg-[#ff5733]'} style={{ backgroundColor: color }}>
                  <input type="text" name='code' className='w-32 rounded-lg border-2 border-gray-300 px-3 py-2.5 ml-14 uppercase' value={color}
                    onChange={(e) => setColor(e.target.value)} />
                </div>
              </div>
              <div className='mb-5 mt-5'>
                <label htmlFor="" className='block font-medium text-gray-900'>Order</label>
                <input type="tel" name='order' defaultValue={editData?.order} className='block w-full rounded-lg border-2 border-gray-300 px-3 py-2.5' placeholder='Enter order number' />
              </div>
              <div className="flex gap-3">
                <button type='submit' className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white cursor-pointer transition hover:bg-slate-700">
                  {
                    id ? "Update Color" : "Add Color"
                  }
                </button>
                <button type='submit' className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium cursor-pointer text-slate-700 transition hover:bg-slate-50">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

{/* <div className="p-4 sm:p-6 lg:p-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-800">Add New Color</h2>
              <p className="mt-1 text-sm text-slate-500">Create a new color option for your furniture catalog.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-700">Color Preview</h3>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full border border-slate-300" style={{ backgroundColor: color }} />
                  <div>
                    <p className="text-sm font-medium text-slate-800">Selected Color</p>
                    <p className="text-sm text-slate-500">{color}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <SketchPicker color={color} onChange={(e) => setColor(e.hex)} />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Color Name</label>
                  <input
                    type="text"
                    name='name'
                    placeholder="Enter color name"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Color Code</label>
                  <input
                    type="tel"
                    name='code'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Order</label>
                  <input
                    type="tel"
                    name='order'
                    placeholder="Enter order"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>
                <button type='submit' className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white cursor-pointer transition hover:bg-slate-700">
                    Add Color
                  </button>
              </div>
            </form>
          </div>
      </div> */}