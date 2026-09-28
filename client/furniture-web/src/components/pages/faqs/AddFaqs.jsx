import React from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'

export default function AddFaqs() {
  return (
    <>
      <BreadCrumbs title={'/faqs'} title1={'/add faqs'} />

      <div className="p-4 sm:p-6 lg:p-8">
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
                placeholder="Enter the question"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Answer</label>
              <textarea
                rows="5"
                placeholder="Write the answer here"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
                Save FAQ
              </button>
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
