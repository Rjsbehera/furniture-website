import izitoast from 'izitoast';
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import BreadCrumbs from '../../common/BreadCrumbs'

export default function AddMaterial() {
  const formRef = useRef()
  const handleClick = () => {
    formRef.current.reportValidity()

  }
  const removeHandleClick = () => {
    formRef.current.reset()

  }

  let { id } = useParams()
  let [editData,setEditData]=useState(null)
  let Navigate = useNavigate()
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH
  let handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      name: e.target.name.value,
      order: e.target.order.value
    }
    if (id) {
      axios.put(`${apiBaseUrl}material/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/material/viewmaterial')
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
      axios.post(`${apiBaseUrl}material/create`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/material/viewmaterial')
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

  useEffect(()=>{
    if(id){
      axios.get(`${apiBaseUrl}material/details/${id}`)
      .then((res)=>res.data)
      .then((finalRes)=>{
        setEditData(finalRes.data)
      })
    }
    else{
      setEditData(null)
    }
  },[id])

  return (
    <>
      <BreadCrumbs title={'/material'} title1={'/add material'} />

      <div className="p-4 sm:p-6 lg:p-8">
        <form action="" onSubmit={handleSubmit} ref={formRef} >
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="bg-slate-200 mb-6 border-b border-b-slate-400">
              <h2 className="text-xl font-semibold text-slate-800">Add New Material</h2>
              <p className="mt-1 text-sm text-slate-500">Create a new material option for your furniture catalog.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-1">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Category Name</label>
                  <input
                    type="text"
                    name='name'
                    defaultValue={editData?.name}
                    placeholder="Enter material name"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                    required />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Order</label>
                  <input
                    type="tel"
                    name='order'
                    defaultValue={editData?.order}
                    placeholder="Enter order"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                    required />
                </div>

                {/* <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div> */}

                <div className="flex gap-3">
                  <button type='submit' className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition cursor-pointer hover:bg-slate-700" onClick={handleClick}>
                    {
                      id ? "Update Material" : "Add Material"
                    }
                  </button>
                  <button type='button' className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50" onClick={removeHandleClick}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
