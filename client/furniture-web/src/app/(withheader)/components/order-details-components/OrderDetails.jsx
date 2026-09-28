import React from 'react'
import BreadCrumbs from '../common/BreadCrumbs'

const orderItems = [
  {
    id: 1,
    name: 'Modern Accent Chair',
    color: 'Walnut Brown',
    qty: 1,
    price: 2450,
    image:
      'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg'
  },
  {
    id: 2,
    name: 'Sheesham Coffee Table',
    color: 'Natural Oak',
    qty: 1,
    price: 3200,
    image:
      'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg'
  },
  {
    id: 3,
    name: 'Storage Bench',
    color: 'Teak Finish',
    qty: 2,
    price: 1890,
    image:
      'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg'
  }
]

const orderSummary = [
  { label: 'Subtotal', value: '₹ 7,540' },
  { label: 'Shipping', value: '₹ 420' },
  { label: 'Tax', value: '₹ 680' },
  { label: 'Discount', value: '-₹ 500' }
]

export default function OrderDetails() {
  const total = 7540 + 420 + 680 - 500

  return (
    <>
      <section className='w-full'>
        <div className='max-w-[1140px] mx-auto px-3 border-b border-b-gray-200'>
          <BreadCrumbs title={'Order Details'} />
        </div>
      </section>

      <section className='w-full py-10 md:py-14'>
        <div className='max-w-[1140px] mx-auto px-3'>
          <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='text-sm font-medium uppercase tracking-[0.18em] text-[#C09578]'>Order #FUR-2048</p>
              <h1 className='mt-2 text-3xl font-bold text-[#1f1f1f] md:text-4xl'>Order Details</h1>
            </div>

            <div className='flex flex-wrap items-center gap-3'>
              <span className='inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700'>Delivered</span>
              <button className='rounded-md bg-[#C09578] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#ad7d60]'>Track Order</button>
            </div>
          </div>

          <div className='mb-8 grid gap-4 md:grid-cols-3'>
            <div className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
              <p className='text-xs font-medium uppercase tracking-[0.18em] text-gray-500'>Order Date</p>
              <p className='mt-3 text-lg font-semibold text-[#1f1f1f]'>12 Aug 2026</p>
            </div>
            <div className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
              <p className='text-xs font-medium uppercase tracking-[0.18em] text-gray-500'>Estimated Delivery</p>
              <p className='mt-3 text-lg font-semibold text-[#1f1f1f]'>Delivered on 18 Aug 2026</p>
            </div>
            <div className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
              <p className='text-xs font-medium uppercase tracking-[0.18em] text-gray-500'>Payment Method</p>
              <p className='mt-3 text-lg font-semibold text-[#1f1f1f]'>Visa ending in 4821</p>
            </div>
          </div>

          <div className='grid gap-6 xl:grid-cols-[1.6fr_0.9fr]'>
            <div className='space-y-6'>
              <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6'>
                <div className='mb-5 flex items-center justify-between'>
                  <h2 className='text-xl font-bold text-[#1f1f1f]'>Products</h2>
                  <span className='text-sm text-gray-500'>3 items</span>
                </div>

                <div className='space-y-4'>
                  {orderItems.map((item) => (
                    <div key={item.id} className='flex flex-col gap-4 rounded-xl border border-gray-200 p-4 sm:flex-row'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='h-28 w-full rounded-lg object-cover sm:h-24 sm:w-24'
                      />

                      <div className='flex flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center'>
                        <div>
                          <h3 className='text-lg font-semibold text-[#1f1f1f]'>{item.name}</h3>
                          <p className='mt-1 text-sm text-gray-500'>Color: {item.color}</p>
                          <p className='mt-2 text-sm text-gray-500'>Qty: {item.qty}</p>
                        </div>

                        <div className='text-left sm:text-right'>
                          <p className='text-xs uppercase tracking-[0.18em] text-gray-400'>Price</p>
                          <p className='mt-2 text-lg font-semibold text-[#1f1f1f]'>₹ {item.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6'>
                <h2 className='mb-5 text-xl font-bold text-[#1f1f1f]'>Shipping Address</h2>
                <div className='rounded-xl bg-[#f8f5f2] p-5'>
                  <p className='text-lg font-semibold text-[#1f1f1f]'>Aanya Sharma</p>
                  <p className='mt-2 text-sm leading-6 text-gray-600'>
                    24, Rosewood Avenue, <br />
                    Sector 18, Bengaluru, <br />
                    Karnataka 560102, India
                  </p>
                  <p className='mt-3 text-sm text-gray-600'>Phone: +91 98765 43210</p>
                </div>
              </div>
            </div>

            <aside className='space-y-6'>
              <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6'>
                <h2 className='mb-5 text-xl font-bold text-[#1f1f1f]'>Order Summary</h2>

                <div className='space-y-3'>
                  {orderSummary.map((item) => (
                    <div key={item.label} className='flex items-center justify-between text-sm text-gray-600'>
                      <span>{item.label}</span>
                      <span className='font-medium text-[#1f1f1f]'>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className='mt-5 border-t border-gray-200 pt-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-base font-semibold text-[#1f1f1f]'>Total</span>
                    <span className='text-2xl font-bold text-[#C09578]'>₹ {total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6'>
                <h2 className='mb-5 text-xl font-bold text-[#1f1f1f]'>Order Status</h2>
                <div className='space-y-4'>
                  {[
                    { label: 'Order Placed', done: true, time: '12 Aug, 09:30 AM' },
                    { label: 'Packed', done: true, time: '13 Aug, 11:00 AM' },
                    { label: 'Shipped', done: true, time: '15 Aug, 02:15 PM' },
                    { label: 'Delivered', done: true, time: '18 Aug, 09:45 AM' }
                  ].map((step) => (
                    <div key={step.label} className='flex gap-3'>
                      <div className='flex flex-col items-center'>
                        <span
                          className={`mt-1 h-3.5 w-3.5 rounded-full ${
                            step.done ? 'bg-[#C09578]' : 'bg-gray-300'
                          }`}
                        />
                        {step.label !== 'Delivered' && <span className='mt-2 h-8 w-px bg-gray-200' />}
                      </div>

                      <div className='pb-2'>
                        <p className='font-medium text-[#1f1f1f]'>{step.label}</p>
                        <p className='text-sm text-gray-500'>{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
