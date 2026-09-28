import React, { useState, useEffect } from 'react'
import { IoIosFunnel } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import BreadCrumbs from '../../common/BreadCrumbs'
import axios from 'axios'
import izitoast from 'izitoast';
import {Link} from "react-router"


const faqs = [
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery usually takes 5-7 business days depending on your location.',
    status: 'Active'
  },
  {
    question: 'Can I return a product?',
    answer: 'Yes, returns are accepted within 7 days of delivery if the item is unused and in original packaging.',
    status: 'Active'
  },
  {
    question: 'Do you offer installation services?',
    answer: 'Installation services are available for select furniture items at an additional cost.',
    status: 'Inactive'
  }
]

export default function ViewFaqs() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH
  let [data, setData] = useState([])
  let [ids, setIds] = useState([])
  // console.log(data)
  let getData = () => {
    axios.get(`${apiBaseUrl}faq/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.viewRes)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  let getCheckValue = (e) => {
    let checkValue = e.target.value

    if (e.target.checked) {
      setIds([...ids, checkValue])
    }
    else {
      setIds(ids.filter((v) => v != checkValue))
    }
  }

  let allCheck = (e) => {
    if (e.target.checked) {
      let allDataIds = data.map((obj) => obj._id)
      setIds(allDataIds)
    }
    else {
      setIds([])
    }
  }

  let deletefaqs = () => {
    if (ids.length >= 1) {
      axios.post(`${apiBaseUrl}faq/delete`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: "Success",
              message: finalRes.msg,
              position: "topRight",
              color: "green"
            })
            getData()
            setIds([])
          }
        })
    }
    else {
      izitoast.error({
        title: "Error",
        message: "Please Select One Checkbox For Delete",
        position: 'topRight',
        color: "red"
      })
    }
  }

  let updateStatus = () => {
    if (ids.length >= 1) {
      axios.post(`${apiBaseUrl}faq/change-status`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: "Success",
              message: finalRes.msg,
              position: "topRight",
              color: "green"
            })
            getData()
            setIds([])
          }
        })
    }
    else {
      izitoast.error({
        title: "Error",
        message: "Please Select One Checkbox For Delete",
        position: 'topRight',
        color: "red"
      })
    }
  }


  return (
    <>
      <BreadCrumbs title={'/faqs'} title1={'/view faqs'} />

      {/* <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">FAQ Management</h2>
              <p className="mt-1 text-sm text-slate-500">Review and manage the frequently asked questions shown on your site.</p>
            </div>

            <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
              Add FAQ
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">{item.question}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}



      <div className='max-w-full mx-auto border-2 border-slate-100 mt-5 py5'>
        <div className='bg-slate-100 flex justify-between items-center border-b-1 border-slate-100 px-5'>
          <div>
            <h1 className='text-2xl font-bold'>View Faqs</h1>
          </div>

          <div className=' flex gap-5 p-5 '>
            <button className='bg-blue-700 text-white p-2 rounded text-2xl'><IoIosFunnel /></button>
            <button className='px-3 py-2 text-white font-fold bg-[#15803D] rounded-[4px]' onClick={updateStatus}>Change Status</button>
            <button className='px-3 py-2 text-white font-fold bg-[#B91C1C] rounded-[4px]' onClick={deletefaqs}>Delete</button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='text-gray-600 text-sm'>
                <th className='py-3'>
                  <input type="checkbox" onChange={allCheck} checked={ids.length == data.length} />
                </th>
                <th className='text-left py-3 uppercase'>question</th>
                <th className='text-left py-3 uppercase'>answer</th>
                <th className='text-left py-3 uppercase'>Order</th>
                <th className='text-left py-3 uppercase'>Status</th>
                <th className='text-left py-3 uppercase'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((faq, index) => (
                  <tr key={faq._id} className='hover:bg-gray-50'>
                    <td className='py-4 text-center'>
                      <input type="checkbox" value={faq._id} onChange={getCheckValue} checked={ids.includes(faq._id)} />
                    </td>
                    <td>{faq.question}</td>
                    <td>{faq.answer}</td>
                    <td>{faq.order}</td>
                    <td><span className={`px-3 py-1 rounded-full text-sm text-white ${faq.status === "Active" ? "bg-red-500" : "bg-green-500"}`}>{faq.status ? "Active" : "Deactive"}</span></td>
                    <td className='text-center'>
                      <Link to={`/faqs/edit/${faq._id}`} >
                      <button className='bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600'><BiPencil /></button>
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
