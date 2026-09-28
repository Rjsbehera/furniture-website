import React from 'react'
import BreadCrumbs from '../../common/BreadCrumbs'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By using our platform, you agree to comply with all applicable laws and the rules set out in these Terms and Conditions.'
  },
  {
    title: '2. Product Usage',
    content: 'All products and services offered are subject to availability. We reserve the right to modify, suspend, or discontinue any service without prior notice.'
  },
  {
    title: '3. Payment and Orders',
    content: 'Orders are considered confirmed only after successful payment. Any discrepancies in billing must be reported within 7 days.'
  },
  {
    title: '4. Privacy and Data',
    content: 'We protect your personal data in accordance with our privacy policy and use it only for service delivery and account support.'
  }
]

export default function TermsConditions() {
  return (
    <>
      <BreadCrumbs title={'/terms & conditions'} title1={''} />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-800">Terms & Conditions</h2>
            <p className="mt-1 text-sm text-slate-500">Manage the main legal terms and rules for your platform.</p>
          </div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-800">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
