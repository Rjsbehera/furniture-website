import izitoast from 'izitoast';
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import BreadCrumbs from '../../common/BreadCrumbs'

export default function AddCountry() {
  const formRef = useRef()
  const handleClick = () => {
    formRef.current.reportValidity()

  }

  let { id } = useParams()
  let [editData, setEditData] = useState(null)
  let Navigate = useNavigate()
  let [country, setCountry] = useState(false)
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH

  let handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      name: e.target.name.value,
      order: e.target.order.value
    }
    if (id) {
      //update
      console.log(obj)
      axios.post(`${apiBaseUrl}country/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            console.log(finalRes)
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/country/viewcountry')
          }
          else {
            console.log(finalRes)
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
      console.log(obj)
      axios.post(`${apiBaseUrl}country/create`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            console.log(finalRes)
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/country/viewcountry')
          }
          else {
            console.log(finalRes)
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
      axios.get(`${apiBaseUrl}country/details/${id}`)
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
      <BreadCrumbs title={'/country'} title1={'/add country'} />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <form action="" onSubmit={handleSubmit} ref={formRef}>
            <div className='grid grid-cols-1 gap-[3%]'>
              <div>
                <label htmlFor="">Category Name
                  <input className='border border-slate-200 rounded-[8px] w-full h-10 px-3 mb-3' type="text" name='name' defaultValue={editData?.name} required />
                </label>
                <label htmlFor="">Order
                  <input className='border border-slate-200 rounded-[8px] w-full h-10 px-3 mb-3' type="text" name='order' defaultValue={editData?.order} required />
                </label>
              </div>
            </div>
            <button type='submit' className='mt-5 px-3 py-2 text-white bg-[#7E22CE] rounded-[8px] cursor-pointer' onClick={handleClick}>{ id ? "Update Category" : "Add Sub Category"}</button>
          </form>
        </div>
      </div>
    </>
  )
}
