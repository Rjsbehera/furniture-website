import React from 'react'

export default function ThankYou() {
  return (
    <section className='w-full bg-[#f8f5f2] py-16 md:py-24'>
      <div className='mx-auto max-w-[1140px] px-4'>
        <div className='mx-auto max-w-3xl rounded-[28px] border border-[#eaded7] bg-white p-6 text-center shadow-[0_20px_60px_rgba(41,33,27,0.08)] md:p-12'>
          <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f3e5dc] text-4xl text-[#C09578]'>✓</div>

          <p className='text-sm font-medium uppercase tracking-[0.22em] text-[#C09578]'>Order Confirmed</p>
          <h1 className='mt-4 text-3xl font-bold text-[#1f1f1f] md:text-5xl'>Thank You!</h1>

          <p className='mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg'>
            Your order has been successfully placed. We are preparing your furniture with care and will send you a confirmation as soon as it ships.
          </p>

          <div className='mt-8 grid gap-4 text-left md:grid-cols-2'>
            <div className='rounded-2xl border border-gray-200 bg-[#faf7f4] p-5'>
              <p className='text-xs font-medium uppercase tracking-[0.18em] text-gray-500'>Order Number</p>
              <p className='mt-2 text-lg font-semibold text-[#1f1f1f]'>FUR-2048</p>
            </div>

            <div className='rounded-2xl border border-gray-200 bg-[#faf7f4] p-5'>
              <p className='text-xs font-medium uppercase tracking-[0.18em] text-gray-500'>Estimated Delivery</p>
              <p className='mt-2 text-lg font-semibold text-[#1f1f1f]'>Within 5-7 days</p>
            </div>
          </div>

          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <a
              href='/'
              className='inline-flex items-center justify-center rounded-md bg-[#C09578] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#ad7d60]'
            >
              Continue Shopping
            </a>
            <a
              href='/order-details'
              className='inline-flex items-center justify-center rounded-md border border-[#C09578] bg-white px-7 py-3 text-sm font-medium text-[#C09578] transition hover:bg-[#f9f2ee]'
            >
              View Order
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
