import React from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'

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
  return (
    <>
      <BreadCrumbs title={'/faqs'} title1={'/view faqs'} />

      <div className="p-4 sm:p-6 lg:p-8">
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
      </div>
    </>
  )
}
