import React, { useEffect, useState } from 'react'
import axios from 'axios'
import izitoast from 'izitoast';
import BreadCrumbs from '../../common/BreadCrumbs'
import { useNavigate, useParams } from 'react-router';

export default function AddFaqs() {
  let Navigate = useNavigate()
  let { id } = useParams()
  let [editData, setEditData] = useState(null)
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH
  let handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      question: e.target.question.value,
      answer: e.target.answer.value,
      order: e.target.order.value
    }
    if (id) {
      //update
      axios.put(`${apiBaseUrl}faq/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/faqs/viewfaqs')
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
      axios.post(`${apiBaseUrl}faq/create`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            izitoast.show({
              title: 'Success',
              message: finalRes.msg,
              position: 'topRight', // Options: topRight, topLeft, bottomRight, bottomLeft, topCenter, bottomCenter, center
              color: 'green'
            });
            Navigate('/faqs/viewfaqs')
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
      axios.get(`${apiBaseUrl}faq/details/${id}`)
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
      <BreadCrumbs title={'/faqs'} title1={'/add faqs'} />

      <div className="p-4 sm:p-6 lg:p-8">
        <form onSubmit={handleSubmit} action="">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-800">Add New FAQ</h2>
              <p className="mt-1 text-sm text-slate-500">Create a new frequently asked question for your support section.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Question</label>
                <input
                  type="text"
                  name='question'
                  defaultValue={editData?.question}
                  placeholder="Enter the question"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Answer</label>
                <textarea
                  rows="5"
                  name='answer'
                  defaultValue={editData?.answer}
                  placeholder="Write the answer here"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Order</label>
                <input
                  type="tel"
                  name='order'
                  defaultValue={editData?.order}
                  placeholder="Enter order"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              {/* <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div> */}

              <div className="flex gap-3">
                <button type='submit' className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white cursor-pointer transition hover:bg-slate-700">
                  {id ? "Update FAQ" : "Save FAQ"}
                </button>
                <button type='submit' className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium cursor-pointer text-slate-700 transition hover:bg-slate-50">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
